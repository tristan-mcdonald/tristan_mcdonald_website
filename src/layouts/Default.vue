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
            <nav class="global_header__navigation">
                <ul class="global_header__navigation__list">
                    <li class="global_header__navigation__item">
                        <g-link
                        class="global_header__navigation__anchor"
                        to="/working-together">Working together</g-link>
                        <ul class="global_header__navigation__nested_list">
                            <li class="global_header__navigation__item">
                                <g-link
                                class="global_header__navigation__anchor"
                                to="/working-together/contracting">Contracting</g-link>
                            </li><!-- .global_header__navigation__item -->
                            <li class="global_header__navigation__item">
                                <g-link
                                class="global_header__navigation__anchor"
                                to="/working-together/wordpress-development">WordPress development</g-link>
                            </li><!-- .global_header__navigation__item -->
                            <li class="global_header__navigation__item">
                                <g-link
                                class="global_header__navigation__anchor"
                                to="/working-together/impartial-consulting">Impartial consulting</g-link>
                            </li><!-- .global_header__navigation__item -->
                            <li class="global_header__navigation__item">
                                <g-link
                                class="global_header__navigation__anchor"
                                to="/working-together/permanent-roles">Permanent roles</g-link>
                            </li><!-- .global_header__navigation__item -->
                        </ul><!-- .global_header__navigation__nested_list -->
                    </li><!-- .global_header__navigation__item -->
                    <li class="global_header__navigation__item">
                        <g-link
                        class="global_header__navigation__anchor"
                        to="/experience">My experience</g-link>
                        <ul class="global_header__navigation__nested_list">
                            <li class="global_header__navigation__item">
                                <g-link
                                class="global_header__navigation__anchor"
                                to="/experience/summary">Summary</g-link>
                            </li><!-- .global_header__navigation__item -->
                            <li class="global_header__navigation__item">
                                <g-link
                                class="global_header__navigation__anchor"
                                to="/experience/case-studies">Case studies</g-link>
                            </li><!-- .global_header__navigation__item -->
                            <li class="global_header__navigation__item">
                                <g-link
                                class="global_header__navigation__anchor"
                                to="/experience/design">Design</g-link>
                            </li><!-- .global_header__navigation__item -->
                            <li class="global_header__navigation__item">
                                <g-link
                                class="global_header__navigation__anchor"
                                to="/experience/tenet-css">Tenet CSS</g-link>
                            </li><!-- .global_header__navigation__item -->
                        </ul><!-- .global_header__navigation__nested_list -->
                    </li><!-- .global_header__navigation__item -->
                    <li class="global_header__navigation__item">
                        <g-link
                        class="global_header__navigation__anchor"
                        to="/blog">Articles</g-link>
                    </li><!-- .global_header__navigation__item -->
                </ul><!-- .global_header__navigation__list -->
            </nav><!-- .global_header__navigation -->
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
