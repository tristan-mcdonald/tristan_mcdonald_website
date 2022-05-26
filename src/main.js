/*
    This is the main.js file. Import global CSS and scripts here.
    The Client API can be used here. Learn more: gridsome.org/docs/client-api
*/
// load global stylesheet. potentially temporary, may be replaced in favour of component-based styles.
import "~/assets/css/app.css"
// import default layout
import DefaultLayout from "~/layouts/Default.vue";
export default function (Vue, { router, head, isClient }) {
    // set default layout as a global component
    Vue.component("Layout", DefaultLayout)
}
