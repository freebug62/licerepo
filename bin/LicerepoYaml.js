class LicerepoYaml {

    /**
     * @type {string} BASE_URL The base URL for the pub.dev API.
     */
    BASE_URL = 'https://pub.dev/api/packages/';

    /**
     * Fetches package information from pub.dev (Dart/Flutter packages).
     *
     * @param {string} packageName - The name of the package to fetch.
     * @param {string} [version='latest'] - Currently only 'latest' is supported.
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

        if (version !== 'latest') {
            throw new Error(`pub.dev fetch currently only supports version = 'latest'`);
        }

        try {
            const url = `${this.BASE_URL}${encodeURIComponent(this.packageName)}`;

            // ────────────────────────────────────────────────
            // Use CORS proxy **only in development**
            // ────────────────────────────────────────────────
            const isDev = process.env.NODE_ENV === 'development';

            let fetchUrl = url;

            if (isDev) {
                // Pick one proxy — corsproxy.io is usually reliable
                fetchUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;

                // Alternative proxies (uncomment if needed):
                // fetchUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(targetUrl)}`;
                // fetchUrl = `https://thingproxy.freeboard.io/fetch/${targetUrl}`;
            }

            const res = await fetch(fetchUrl, {
                headers: { 'Accept': 'application/json' }
            });

            if (!res.ok) {
                if (res.status === 404) {
                    return { error: `Package '${this.packageName}' not found.` };
                }
                throw new Error(`HTTP ${res.status}. [${res.statusText}]`);
            }

            const data = await res.json();
            const latest = data.latest;
            const pubspec = latest?.pubspec || {};
            const dependencies = pubspec.dependencies || {};
            const devDependencies = pubspec.dev_dependencies || {};
            const depList = [];

            for (const [name, constraint] of Object.entries(dependencies)) {
                const versionRange = typeof constraint === 'string' ? constraint : constraint?.version || null;

                depList.push({ name, version: versionRange, type: 'dependency' });
            }

            for (const [name, constraint] of Object.entries(devDependencies)) {
                const versionRange = typeof constraint === 'string' ? constraint : constraint?.version || null;

                depList.push({ name, version: versionRange, type: 'dev_dependency' });
            }

            return {
                name: data.name,
                version: latest.version,
                description: pubspec.description || null,
                license: pubspec.license || null,
                homepage: pubspec.homepage || pubspec.repository || null,
                repository: pubspec.repository || null,
                deprecated: !!latest.isDiscontinued,
                deprecationMessage: latest.isDiscontinued ? 'Package is discontinued' : null,
                lastPublished: latest.published || null,
                maintainers: data.publisher ? [data.publisher] : [],
                vulnerabilitiesCount: null,
                hasVulnerabilities: false,
                dependencies: {
                    total: depList.length,
                    list: depList
                },
                likes: data.likes || 0,
                popularity: data.popularity || 0,
                pubPoints: data.score?.grantedPoints || null,
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
     * Validate a pub.dev package name.
     * pub.dev package names are generally lowercase letters, numbers, underscores, and hyphens.
     *
     * @param {string} name - The package name to validate.
     * @returns {object} - `{ valid: boolean, reason: string }`
     */
    _validatePackageName(name) {
        if (typeof name !== 'string') {
            return { valid: false, reason: 'Name must be a string' };
        }

        name = name.trim();

        if (name.length === 0) {
            return { valid: false, reason: 'Name cannot be empty' };
        }

        if (name.length > 100) { // conservative limit
            return { valid: false, reason: 'Name is too long (max ~100 characters)' };
        }

        const regex = /^[a-z0-9][a-z0-9_-]*[a-z0-9]$/;
        if (!regex.test(name)) {
            return { valid: false, reason: 'Name must contain only lowercase letters, numbers, underscores and hyphens, and must not start or end with hyphen/underscore' };
        }

        return { valid: true };
    }

    /**
     * pub.dev currently only supports fetching the latest version.
     * This method is kept for consistency with the NPM class.
     */
    _validateVersion(version) {
        if (version === 'latest') {
            return { valid: true };
        }
        return { valid: false, reason: 'pub.dev fetch only supports version = "latest"' };
    }
}

module.exports = LicerepoYaml;