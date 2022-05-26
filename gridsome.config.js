/*
    this is where project configuration and plugin options are located.
    https://gridsome.org/docs/config
    changes here require a server restart.
*/
module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule("svg")
        svgRule.uses.clear()
        svgRule
            .use("vue-svg-loader")
            .loader("vue-svg-loader")
    },
    plugins: [
        {
            use: "@gridsome/source-filesystem",
            options: {
                typeName: "Article",
                path: "./content/articles/**/*.md",
            },
            refs: {
                category: {
                    typeName: "Category",
                    create: true,
                },
            },
        },
    ],
    siteName: "Tristan McDonald",
    siteUrl: "http://localhost:8080",
    templates: {
        Article: "/articles/:year/:month/:title",
    }

}
