# Licerepo

Licerepo

Licerepo is a robust, multi-platform library designed to analyze and manage dependencies across npm, YAML-based, and Composer ecosystems. It provides developers and teams with comprehensive metadata and compliance information for software packages, helping to ensure security, maintainability, and legal conformity across projects.

At its core, Licerepo allows users to query a package name and version, returning a structured dataset that includes:

Dependency list with versions – Retrieve all direct and transitive dependencies, including exact version numbers, ensuring full visibility into the dependency graph.

Deprecation status – Identify deprecated packages or versions, enabling proactive updates and avoiding the use of unsupported software.

Package information – Access critical metadata such as release date, download counts, repository popularity, author information, and descriptive summaries for each package. This facilitates informed decisions when selecting or upgrading dependencies.

License analysis and EU compliance – Evaluate each package’s license, flagging potential conflicts with European Union regulations. Licerepo provides clear indicators of compatibility, helping legal and compliance teams mitigate risk in commercial or open-source projects.

Vulnerability status – Integrates with public security databases to identify known vulnerabilities associated with a given package version. Users can prioritize updates or mitigation strategies based on real-time security information.

Licerepo is designed to support the three major repositories: npm for JavaScript, Packagist/Composer for PHP, and YAML-based package managers or configuration files used in DevOps and CI/CD workflows. By consolidating metadata and compliance information from multiple ecosystems, it allows developers to maintain a unified view of dependencies across heterogeneous projects.

The library exposes a clean programmatic interface, making it suitable for integration into CI/CD pipelines, dependency auditing tools, and package management dashboards. It can automatically fetch data from official registries, cache metadata for performance, and generate structured reports for auditing or compliance purposes.

Whether you are managing an enterprise application with hundreds of dependencies or a small open-source project, Licerepo provides the visibility and control necessary to maintain secure, up-to-date, and legally compliant software ecosystems. Its multi-repository support and extensive metadata coverage make it a critical tool for modern software development and operations.

Licerepo itself uses **no runtime dependencies** meaning, the code is self-contained. 3rd-party dependencies are exclusively used to bundle and package the library.

[todo: description|author: website|version: 1.0.4]

## 3rd-Party Service Dependencies

Package metadata is retrieved from the following sources:

- **npm**: `https://registry.npmjs.org/`
- **YAML / Pub.dev**: `https://pub.dev/api/packages/`
- **Composer / Packagist**: `https://packagist.org/`

> **Composer package vulnerabilities status**
>
> - Package information is first fetched from **Packagist**.
> - Vulnerability data is then retrieved via the **OSV API**: `https://osv.dev/`.
> - The workflow: `Packagist → OSV` ensures both package metadata and known security issues are captured.

## Development Proxy (CORS)

When running Licerepo in a development environment (NODE_ENV=development), a CORS proxy is used to fetch package data from external APIs to bypass browser cross-origin restrictions. **No proxy is used in production**.

### How it works

Normal API request:

```https://packagist.org/p2/laravel/framework.json```

In development, the URL is rewritten through the proxy:

```javascript
if (process.env.NODE_ENV === 'development') {
    url = `https://corsproxy.io/?${encodeURIComponent(url)}`;
}
```

Proxy URL:

`https://corsproxy.io/?https%3A%2F%2Fpackagist.org%2Fp2%2Flaravel%2Fframework.json`

The proxy returns the JSON response, bypassing CORS restrictions in the browser.

> **Notes**
>
> The proxy is only used in development; production builds fetch data directly from the APIs.
>
> Alternative proxies can be changed on `./bin` files.
>
> No API keys are required; the proxy is for local testing only.

## Compiling

Licerepo is compiled using Node.js and webpack-mix and, has zero 3rd party library dependencies.

Run following command to install development dependencies:

```bash
npm install
```

### For development

To compile this project for development, run `npm run dev` or `npm run watch`.

### For production

To compile this project for production, run `npm run build` or `npm run prod`.

## Usage

```js
const Licerepo = require('./bin/Licerepo');

(async () => {
    const lice = new Licerepo();

    // NPM
    console.log('----------------------- NPM');
    //console.log("React:", await lice.fetchNpm('react', 'latest'));
    //console.log("Axios:", await lice.fetchNpm('axios', '1.13.4'));

    // Composer
    console.log('----------------------- Composer');
    //console.log("Laravel:", await lice.fetchComposer('laravel/framework', 'latest'));
    //console.log("Guzzle:", await lice.fetchComposer('guzzlehttp/guzzle'));

    // Pub.dev
    console.log('----------------------- Pub.dev');
    //console.log("Provider:", await lice.fetchYaml('provider'));
    //console.log("http:", await lice.fetchYaml('http'));
})();
```

## Licensing

This project is dual-licensed:

### Open Source

- **GNU General Public License v3.0 or later**
- See `LICENSE-GNU.md`

### Commercial Use

- Requires a **paid commercial license**
- See `LICENSE-COMMERCIAL.md`

Commercial use without a valid license is not permitted.

Artificial intelligence training or dataset usage is prohibited under
all license options without explicit written permission.
