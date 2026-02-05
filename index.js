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

    console.log('----------------------- Report');
    console.log(await lice.report('composer', 'laravel/framework', 'latest'));
    //console.log(await lice.report('composer', 'drupal/core', 'latest'));
})();