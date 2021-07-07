"use strict";
/*
    define paths object, containing all paths used.
*/
module.exports = {
    javascript: {
        config: "./.eslintrc",
        input: "../build_assets/js/app.js",
        lint: "../build_assets/js/**/*.js",
        output: "../../assets/js/",
        transpiled: "../../assets/js/app.js",
        uglified: "../../assets/js/app.min.js",
        watch: "../build_assets/js/**/*.js",
    },
    images: {
        css: "../build_assets/images",
    },
    server: {
        root: "../../assets/reference_html",
    },
    stylus: {
        config: ".stylintrc",
        input: "../build_assets/stylus/app.styl",
        lint: "../build_assets/stylus/**/*.styl",
        output: "../../assets/css/",
        transpiled: "../../assets/css/app.css",
        uglified: "../../assets/css/app.min.css",
        watch: "../build_assets/stylus/**/*.styl",
    },
};
