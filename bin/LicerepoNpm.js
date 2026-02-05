class LicerepoNpm {

    /**
     * @type {string} BASE_URL The base URL for the NPM registry.
     */
    BASE_URL = 'https://registry.npmjs.org/';

    /**
     * Fetches package information from the NPM registry.
     *
     * @param {string} packageName - The name of the package to fetch.
     * @param {string} [version='latest'] - The version of the package to fetch. If 'latest', fetches the latest version.
     *
     * @returns {Promise<Object>} - The fetched package information.
     *
     * @throws {Error} - If the package name or version is invalid.
     */
    async fetch(packageName, version = 'latest') {
        this.packageName = packageName;
        this.version = version;

        if (!this._validatePackageName(packageName).valid) {
            throw new Error(`Invalid package name: ${this.packageName} — ${this._validatePackageName(this.packageName).reason}`);
        }

        if (!this._validateVersion(version).valid) {
            throw new Error(`Invalid package version: ${this.version} — ${this._validateVersion(this.version).reason}`);
        }

        try {
            const encodedName = encodeURIComponent(this.packageName);
            const url = this.version === 'latest'
                ? `${this.BASE_URL}/${encodedName}`
                : `${this.BASE_URL}/${encodedName}/${this.version}`;

            const res = await fetch(url, {
                headers: { 'Accept': 'application/json' }
            });

            if (!res.ok) {
                if (res.status === 404) {
                    return { error: `Package '${this.packageName}' not found.` };
                }

                throw new Error(`HTTP ${res.status}. [${res.statusText}]`);
            }

            const pkg = await res.json();

            // Try to find latest version data when requesting 'latest'
            const versionData = this.version === 'latest' ? pkg['dist-tags']?.latest ? pkg.versions[pkg['dist-tags'].latest] : pkg : pkg;
            const latestVersion = this.version === 'latest' ? pkg['dist-tags']?.latest || 'unknown' : this.version;

            // Security advisories – npm now exposes basic vulnerability count in some endpoints
            // but full advisory list usually requires npm audit or separate service
            const vulnerabilities = pkg?.securityAdvisories?.count || 0;

            const dependencies = versionData.dependencies || {};
            const devDependencies = versionData.devDependencies || {};
            const peerDependencies = versionData.peerDependencies || {};

            const depList = [];

            // Regular dependencies
            for (const [name, range] of Object.entries(dependencies)) {
                depList.push({ name, version: range, type: 'dependency' });
            }
            // Dev dependencies
            for (const [name, range] of Object.entries(devDependencies)) {
                depList.push({ name, version: range, type: 'devDependency' });
            }
            // Peer dependencies
            for (const [name, range] of Object.entries(peerDependencies)) {
                depList.push({ name, version: range, type: 'peerDependency' });
            }

            return {
                name: pkg.name,
                version: latestVersion,
                description: pkg.description || null,
                license: this._normalizeLicense(pkg.license || pkg.licenses),
                homepage: pkg.homepage || null,
                repository: pkg.repository?.url || pkg.repository || null,
                deprecated: versionData?.deprecated ? true : false,
                deprecationMessage: versionData?.deprecated || null,
                lastPublished: pkg.time?.[latestVersion] || pkg.time?.modified || null,
                maintainers: pkg.maintainers?.map(m => m.name) || [],
                vulnerabilitiesCount: vulnerabilities,
                hasVulnerabilities: vulnerabilities > 0,
                dependencies: {
                    total: depList.length,
                    list: depList
                },
                error: null
            };

        } catch (err) {
            return {
                name: this.packageName,
                version: this.version,
                error: err.message
            };
        }
    }

    /**
     * Normalize a license field to a string.
     *
     * @param {string|Object|Array<string|Object>} licenseField - The license field to normalize.
     * @returns {string|null} - The normalized license string, or null if invalid.
     *
     * If the license field is a string, it is returned as is.
     * If the license field is an array, it is mapped to a string array of
     * license types or URLs, and then joined with ' OR '.
     * If the license field is an object with a 'type' property, that property is
     * returned as a string.
     * If the license field is invalid, null is returned.
     */
    _normalizeLicense(licenseField) {
        if (!licenseField) return null;

        if (typeof licenseField === 'string') return licenseField;

        if (Array.isArray(licenseField)) {
            return licenseField.map(l => typeof l === 'string' ? l : l.type || l.url).filter(Boolean).join(' OR ');
        }

        if (licenseField.type) return licenseField.type;

        return null;
    }

    /**
     * Validate a package name semantics.
     *
     * @param {string} name - The package name to validate.
     * @returns {object} - `{ valid: boolean, reason: string }`
     *
     * Returns an object with a valid property (boolean) and a reason property (string).
     */
    _validatePackageName(name) {
        if (typeof name !== 'string') {
            return { valid: false, reason: 'Name must be a string' };
        }

        name = name.trim();

        if (name.length === 0) {
            return { valid: false, reason: 'Name cannot be empty' };
        }

        if (name.length > 214) {
            return { valid: false, reason: 'Name exceeds 214 characters' };
        }

        if (name !== name.toLowerCase()) {
            return { valid: false, reason: 'Name must be lowercase' };
        }

        if (name === 'node_modules' || name === 'favicon.ico') {
            return { valid: false, reason: 'Reserved package name' };
        }

        // Scoped package support: @scope/name
        const scopedRegex = /^@[a-z0-9][a-z0-9-_]*\/[a-z0-9][a-z0-9-._]*$/;
        const unscopedRegex = /^[a-z0-9][a-z0-9-._]*$/;

        if (name.startsWith('@')) {
            if (!scopedRegex.test(name)) {
                return { valid: false, reason: 'Invalid scoped package name' };
            }
        } else {
            if (!unscopedRegex.test(name)) {
                return { valid: false, reason: 'Invalid package name format' };
            }
        }

        if (
            name.startsWith('.') ||
            name.startsWith('_') ||
            name.endsWith('.') ||
            name.endsWith('_')
        ) {
            return { valid: false, reason: 'Cannot start or end with . or _' };
        }

        return { valid: true };
    }

    /**
     * Validates a version string according to the npm versioning rules.
     * Accepts exact SemVer 2.0.0, npm ranges, and wildcard versions.
     * Returns an object with a valid boolean and a reason string if invalid.
     *
     * @param {string} version - The version string to validate.
     * @returns {Object} - An object with a valid boolean and a reason string if invalid
     */
    _validateVersion(version) {
        if (typeof version !== 'string' || version.trim() === '') {
            return { valid: false, reason: 'Version must be a non-empty string.' };
        }

        // Exact SemVer 2.0.0
        const semver =
            '(0|[1-9]\\d*)\\.' +
            '(0|[1-9]\\d*)\\.' +
            '(0|[1-9]\\d*)' +
            '(?:-([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?' +
            '(?:\\+([0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*))?';

        // npm ranges
        const range = new RegExp(
            '^\\s*(' +
            '\\*|' +
            'latest|' +
            '[~^]?' + semver + '|' +
            '(>=|<=|>|<)=?\\s*' + semver + '|' +
            semver.replace(/\\\.\\d+/g, '(?:\\.x|\\.\\*)') +
            ')(\\s+.*)?\\s*$'
        );

        if (!range.test(version)) {
            return { valid: false, reason: 'Invalid npm version or range.' };
        }

        return { valid: true };
    }
}

module.exports = LicerepoNpm;