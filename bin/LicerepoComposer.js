class LicerepoComposer {
    BASE_URL = 'https://repo.packagist.org/p2/';
    OSV_URL = 'https://api.osv.dev/v1/query';

    /**
     * Fetch package info with optional version (exact or 'latest')
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

        const nameValidation = this._validatePackageName(packageName);
        if (!nameValidation.valid) throw new Error(`Invalid package name: ${packageName} — ${nameValidation.reason}`);
        const versionValidation = this._validateVersion(version);
        if (!versionValidation.valid) throw new Error(`Invalid version: ${version} — ${versionValidation.reason}`);

        try {
            let url = `${this.BASE_URL}${encodeURIComponent(packageName.toLowerCase())}.json`;
            if (process.env.NODE_ENV === 'development') {
                url = `https://corsproxy.io/?${encodeURIComponent(url)}`;
            }

            const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
            if (!res.ok) {
                if (res.status === 404) return { error: `Package '${packageName}' not found.` };
                throw new Error(`HTTP ${res.status} [${res.statusText}]`);
            }

            const data = await res.json();
            const pkgKey = Object.keys(data.packages)[0];
            if (!pkgKey || !data.packages[pkgKey] || data.packages[pkgKey].length === 0) {
                return { error: `No versions found for package '${packageName}'` };
            }

            const versions = data.packages[pkgKey];
            let targetVersionObj;

            if (version === 'latest') {
                targetVersionObj = versions.reduce((latest, current) =>
                    this._compareVersions(current.version, latest.version) > 0 ? current : latest
                    , versions[0]);
            } else {
                // Strip v-prefix
                const cleanVersion = version.replace(/^v/, '');
                targetVersionObj = versions.find(v => v.version.replace(/^v/, '') === cleanVersion);

                if (!targetVersionObj) {
                    return { error: `Version '${version}' not found for package '${packageName}'` };
                }
            }

            const pkg = targetVersionObj;
            const dependencies = [];

            // Collect dependencies
            const depTypes = ['require', 'require-dev', 'suggest', 'replace', 'provide'];
            const typeMap = {
                'require': 'dependency',
                'require-dev': 'dev_dependency',
                'suggest': 'suggested',
                'replace': 'replaced',
                'provide': 'provided'
            };

            for (const key of depTypes) {
                if (pkg[key] && typeof pkg[key] === 'object') {
                    for (const [name, constraint] of Object.entries(pkg[key])) {
                        dependencies.push({
                            name,
                            version: constraint || '*',
                            type: typeMap[key]
                        });
                    }
                }
            }

            // Fetch vulnerabilities from OSV API.
            let vulnerabilities = [];
            try {
                const vulnRes = await fetch(this.OSV_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        package: { name: packageName, ecosystem: 'Packagist' },
                        version: pkg.version.replace(/^v/, '')
                    })
                });
                const vulnData = await vulnRes.json();
                vulnerabilities = vulnData.vulnerabilities || [];
            } catch (_) {
                // ignore errors
            }

            return {
                name: pkgKey,
                version: pkg.version,
                description: pkg.description || null,
                license: Array.isArray(pkg.license) ? pkg.license.join(', ') : pkg.license || null,
                homepage: pkg.homepage || null,
                repository: pkg.source?.url || pkg.support?.source || null,
                deprecated: !!pkg.abandoned,
                deprecationMessage: pkg.abandoned === true ? 'Package is abandoned' :
                    (typeof pkg.abandoned === 'string' ? pkg.abandoned : null),
                lastPublished: pkg.time || null,
                maintainers: pkg.maintainers?.map(m => m.name) || [],
                vulnerabilitiesCount: vulnerabilities.length,
                hasVulnerabilities: vulnerabilities.length > 0,
                dependencies: { total: dependencies.length, list: dependencies },
                likes: null,
                popularity: null,
                pubPoints: null,
                error: null
            };

        } catch (err) {
            return { name: packageName, version, error: err.message };
        }
    }

    /**
     * Validate a package name semantics.
     *
     * @param {string} name - The package name to validate.
     * @returns {object} - `{ valid: boolean, reason: string }`
     *
     * Returns an object with a valid property (boolean) and a reason property (string).
     * If the package name is invalid, valid is set to false and reason is set to a string explaining why the package name is invalid.
     * If the package name is valid, valid is set to true and reason is set to null.
     */
    _validatePackageName(name) {
        if (typeof name !== 'string' || !name.trim()) return { valid: false, reason: 'Name must be a non-empty string' };
        const regex = /^[a-z0-9]([a-z0-9_.-]*[a-z0-9])?\/[a-z0-9]([a-z0-9_.-]*[a-z0-9])?$/i;
        if (!regex.test(name)) return { valid: false, reason: 'Must be vendor/package format' };
        return { valid: true };
    }

    /**
     * Validate a version string.
     *
     * @param {string} version - The version string to validate.
     * @returns {Object} - An object with a valid boolean and a reason string if invalid.
     *
     * Returns an object with a valid property (boolean) and a reason property (string).
     */
    _validateVersion(version) {
        if (typeof version !== 'string' || !version.trim()) return { valid: false, reason: 'Version must be a non-empty string' };
        return { valid: true };
    }

    /**
     * Compare two version strings (basic semver comparison)
     *
     * @returns {number} - 1 if a > b, -1 if a < b, 0 if equal.
     */
    _compareVersions(a, b) {
        a = a.replace(/^v/, '').split('-')[0];
        b = b.replace(/^v/, '').split('-')[0];
        const partsA = a.split('.').map(Number);
        const partsB = b.split('.').map(Number);
        for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
            const numA = partsA[i] || 0;
            const numB = partsB[i] || 0;
            if (numA > numB) return 1;
            if (numA < numB) return -1;
        }
        return 0;
    }
}

module.exports = LicerepoComposer;
