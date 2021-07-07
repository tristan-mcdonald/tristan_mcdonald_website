/*
    this is where project configuration and plugin options are located.
    https://gridsome.org/docs/config
    changes here require a server restart.
*/
module.exports = {
    siteName: "Tristan McDonald",
    siteUrl: "http://localhost:8080",
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
    templates: {
        Article: "/articles/:year/:month/:title",
    }

}
