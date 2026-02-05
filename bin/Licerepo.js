const LicerepoNpm = require('./LicerepoNpm');
const LicerepoComposer = require('./LicerepoComposer');
const LicerepoYaml = require('./LicerepoYaml');

class Licerepo {
    async fetchNpm(packageName, version = 'latest') {
        console.log(packageName);

        const npm = new LicerepoNpm();
        return await npm.fetch(packageName, version);
    }

    async fetchYaml(packageName, version = 'latest') {
        return await new LicerepoYaml().fetch(packageName, version);
    }

    async fetchComposer(packageName, version = 'latest') {
        return await new LicerepoComposer().fetch(packageName, version);
    }
}

module.exports = Licerepo;