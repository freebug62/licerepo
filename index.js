const Licerepo = require('./bin/Licerepo');

(async () => {
    const lice = new Licerepo();

    // NPM
    console.log("React:", await lice.fetchNpm('react', 'latest'));
    console.log("Axios:", await lice.fetchNpm('axios', '1.13.4'));

    // Composer
    //console.log("Laravel:", await lice.fetch('laravel/framework'));
    //console.log("Guzzle:", await lice.fetch('guzzlehttp/guzzle'));

    // Pub.dev
    console.log("Provider:", await lice.fetchYaml('provider'));
    console.log("http:", await lice.fetchYaml('http'));
})();