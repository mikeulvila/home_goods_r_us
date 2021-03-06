requirejs.config({
    baseUrl: "./javascripts",
    paths:{
        "jquery": "../lib/bower_components/jquery/dist/jquery.min",
        "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
        "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
});

require(
    ["jquery", "hbs", "bootstrap", "app"],
    function($, hbs, bootstrap, app) {
        console.log("page loaded!");

    }
);