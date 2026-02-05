const mix = require('laravel-mix');

mix
    .js([
        'bin/LicerepoNpm.js',
        'bin/LicerepoComposer.js',
        'bin/LicerepoYaml.js',
        'bin/LicerepoReport.js',
        'bin/Licerepo.js',
    ], 'dist/Licerepo.js')
    .babelConfig({
        comments: false,
    });

// THE BELOW CODE IS FOR COMPILING THE SAMPLE INDEX SAMPLE.
// IT IS NOT REQUIRED TO USE LICEREPO IN YOUR PROJECT AND CAN DELETE.
mix.js('index.js', 'index.min.js');