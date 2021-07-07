/*
    This is the main.js file. Import global CSS and scripts here.
    The Client API can be used here. Learn more: gridsome.org/docs/client-api
*/
require("assets/css/app.css");
import DefaultLayout from "~/layouts/Default.vue";
export default function (Vue, { router, head, isClient }) {
    // set default layout as a global component
    Vue.component("Layout", DefaultLayout)
}
