/*
    Server API makes it possible to hook into various parts of Gridsome
    on server-side and add custom data to the GraphQL data layer.
    Learn more: https://gridsome.org/docs/server-api/
    Changes here require a server restart.
*/
module.exports = function (api) {
    api.loadSource(({ addCollection }) => {
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    })
    api.loadSource(async store => {
        store.addMetadata("emailAddress", "letswork@tristanmcdonald.co.uk")
    })
    api.createPages(({ createPage }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })
}
