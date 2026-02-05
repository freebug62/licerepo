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

[todo: description|author: website|version: 1.0.4]

## Compiling

### For development

To compile this project for development, run `npm run dev` or `npm run watch`.

### For production

To compile this project for production, run `npm run build` or `npm run prod`.

## Usage

```js
// NPM example
const lice = new LicerepoNpm();
console.log("Axios:", await lice.fetchNpm('axios', 'latest'));

// Result payload (object)
{
    dependencies: {total: 62, list: Array(62)}
    deprecated: false
    deprecationMessage: null
    description: "Promise based HTTP client for the browser and node.js"
    error: null
    hasVulnerabilities: false
    homepage: "https://axios-http.com"
    lastPublished: "2026-01-27T18:18:38.613Z"
    license: "MIT"
    maintainers: ['mzabriskie', 'nickuraltsev', 'emilyemorehouse', 'jasonsaayman']
    name: "axios"
    repository: "git+https://github.com/axios/axios.git"
    version: "1.13.4"
    vulnerabilitiesCount: 0
}
```

## Licensing

This project is dual-licensed:

### Open Source

- **GNU General Public License v3.0 or later**
- See `LICENSE-GPL.md`

### Commercial Use

- Requires a **paid commercial license**
- See `LICENSE-COMMERCIAL.md`

Commercial use without a valid license is not permitted.

Artificial intelligence training or dataset usage is prohibited under
all license options without explicit written permission.
