<template>
    <div class="layout">
        <header
        class="global_header"
        id="global_header">
            <g-link
            class="global_header__site_name"
            to="/">
                {{ $static.metadata.siteName }}
            </g-link><!-- .global_header__site_name -->
            <nav class="nav">
                <ul>
                    <li>
                        <g-link
                        class="nav__link"
                        to="/articles">Working together</g-link>
                    </li>
                </ul>
            </nav>
        </header><!-- .global_header -->
        <slot/>
        <footer class="global_footer">
            Global footer
        </footer><!-- .global_footer -->
    </div>
</template>
<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>
<style>
    body {
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        margin:0;
        padding:20px;
        line-height: 1.618;
        background-color: hsl(234.5, 15.5%, 13.9%);
    }
    .layout {
        max-width: 760px;
        margin: 0 auto;
        padding-left: 20px;
        padding-right: 20px;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 40px;
    }
    .nav ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        list-style: none;
        padding: 0 20px;
        margin: 0;
    }
    nav li {
        line-height: 2;
    }
    .nav__link {
        margin-right: 20px;
    }
    .header a {
        line-height: 2;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    a,
    a:visited {
        color: white;
    }
</style>
