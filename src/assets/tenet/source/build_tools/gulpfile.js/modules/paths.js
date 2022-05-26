"use strict";
/*
    define paths object, containing all paths used.
*/
module.exports = {
    javascript: {
        config: "./.eslintrc",
        input: "../build_assets/js/app.js",
        lint: "../build_assets/js/**/*.js",
        output: "../../../js/",
        transpiled: "../../../js/app.js",
        uglified: "../../../js/app.min.js",
        watch: "../build_assets/js/**/*.js",
    },
    images: {
        css: "../build_assets/images",
    },
    server: {
        root: "../../../reference_html",
    },
    stylus: {
        config: ".stylintrc",
        input: "../build_assets/stylus/app.styl",
        lint: "../build_assets/stylus/**/*.styl",
        output: "../../../css/",
        transpiled: "../../../css/app.css",
        uglified: "../../../css/app.min.css",
        watch: "../build_assets/stylus/**/*.styl",
    },
};
