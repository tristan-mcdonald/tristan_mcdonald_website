<template>
    <div class="layout">
        <header
        class="global_header"
        id="global_header">
            <div class="global_header__inner">
                <g-link
                class="global_header__site_name"
                to="/">{{ $static.metadata.siteName }}</g-link>
                <a
                class="call_to_action--primary"
                :href="`mailto:${ $static.metadata.emailAddress }`">Say hello</a>
                <button
                class="global_header__global_navigation_reveal"
                id="global_navigation_reveal">
                    <span class="global_header__global_navigation_reveal__text">Navigate</span>
                    <NavigationIcon/>
                </button><!-- .global_header__global_navigation_reveal#global_navigation_reveal -->
            </div><!-- .global_header__inner -->
        </header><!-- .global_header -->
        <nav class="global_navigation">
            <ul class="global_navigation__list">
                <li class="global_navigation__item">
                    <g-link
                    class="global_navigation__anchor"
                    to="/working-together">Working together</g-link>
                    <ul class="global_navigation__nested_list">
                        <li class="global_navigation__item">
                            <g-link
                            class="global_navigation__anchor"
                            to="/working-together/contracting">Contracting</g-link>
                        </li><!-- .global_navigation__item -->
                        <li class="global_navigation__item">
                            <g-link
                            class="global_navigation__anchor"
                            to="/working-together/wordpress-development">WordPress development</g-link>
                        </li><!-- .global_navigation__item -->
                        <li class="global_navigation__item">
                            <g-link
                            class="global_navigation__anchor"
                            to="/working-together/impartial-consulting">Impartial consulting</g-link>
                        </li><!-- .global_navigation__item -->
                        <li class="global_navigation__item">
                            <g-link
                            class="global_navigation__anchor"
                            to="/working-together/permanent-roles">Permanent roles</g-link>
                        </li><!-- .global_navigation__item -->
                    </ul><!-- .global_navigation__nested_list -->
                </li><!-- .global_navigation__item -->
                <li class="global_navigation__item">
                    <g-link
                    class="global_navigation__anchor"
                    to="/experience">My experience</g-link>
                    <ul class="global_navigation__nested_list">
                        <li class="global_navigation__item">
                            <g-link
                            class="global_navigation__anchor"
                            to="/experience/summary">Summary</g-link>
                        </li><!-- .global_navigation__item -->
                        <li class="global_navigation__item">
                            <g-link
                            class="global_navigation__anchor"
                            to="/experience/case-studies">Case studies</g-link>
                        </li><!-- .global_navigation__item -->
                        <li class="global_navigation__item">
                            <g-link
                            class="global_navigation__anchor"
                            to="/experience/design">Design</g-link>
                        </li><!-- .global_navigation__item -->
                        <li class="global_navigation__item">
                            <g-link
                            class="global_navigation__anchor"
                            to="/experience/tenet-css">Tenet CSS</g-link>
                        </li><!-- .global_navigation__item -->
                    </ul><!-- .global_navigation__nested_list -->
                </li><!-- .global_navigation__item -->
                <li class="global_navigation__item">
                    <g-link
                    class="global_navigation__anchor"
                    to="/articles">Articles</g-link>
                </li><!-- .global_navigation__item -->
            </ul><!-- .global_navigation__list -->
        </nav><!-- .global_navigation -->
        <slot/>
        <footer class="global_footer">Global footer</footer><!-- .global_footer -->
    </div>
</template>
<static-query>
    query {
        metadata {
            emailAddress
            siteName
        }
    }
</static-query>
<script>
    import NavigationIcon from "~/assets/svg/navigation_icon.svg"
    export default {
        components: {
            NavigationIcon
        }
    }
</script>

#
