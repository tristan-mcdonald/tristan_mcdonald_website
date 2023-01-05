<template>
  <Layout>
    <section class="home_introduction">
    <div class="home_introduction__inner">
      <div class="home_introduction__details">
        <h1 class="home_introduction__text">
        <span class="home_introduction__text__line">A software engineer &amp; communications designer with {{ calculateExperience }} years of full-time experience in tech.</span>
        <span class="home_introduction__text__line">Let's talk about how your organisation can exceed it's goals.</span>
        </h1><!-- .home_introduction__text -->
        <ul class="home_introduction__clients__list">
          <li class="home_introduction__clients__item">
            United Nations
          </li><!-- .home_introduction__clients__item -->
          <li class="home_introduction__clients__item">
            Oxford University
          </li><!-- .home_introduction__clients__item -->
          <li class="home_introduction__clients__item">
            The Global Health Network
          </li><!-- .home_introduction__clients__item -->
          <li class="home_introduction__clients__item">
            Cardiff University
          </li><!-- .home_introduction__clients__item -->
          <li class="home_introduction__clients__item">
            Family Larsson-Rosenquist Foundation
          </li><!-- .home_introduction__clients__item -->
        </ul><!-- .home_introduction__clients__list -->
      </div><!-- .home_introduction__details -->
      <div class="home_introduction__image__divider">
        <g-image
        src="~/assets/images/tristan_mcdonald_home_introduction.jpg"
        alt="Tristan McDonald on a beach in Puglia, Italy"
        class="home_introduction__image"/>
      </div><!-- .home_introduction__image__divider -->
    </div><!-- .home_introduction__inner -->
    </section><!-- .home_introduction -->
    <section class="home_description">
      <p>I design to the question, "how best can this service provide what it's users need?"</p>
      <p>I write software to the question, "what will I be glad of when I return to this codebase in five years' time?"</p>
      <p>For three years I was <em>Principal of Frontend Engineering & Design</em> at a software house in Bristol, and now I'm contracting.</p>
      <p>My skills are in designing in code, planning maintainable systems, keeping code structured and readable, and acting as a steadying layer between project managers and software engineers.</p>
      <p>I come from a family of communication designers, and I've been building for the web since the nineties. I have project management experience, and I've led engineering teams through many technical and interpersonal challenges.</p>
      <p>My main contribution to open-source is my CSS framework for designing and building maintainable frontends, <a href="https://github.com/trubblebruin/tenet">Tenet CSS</a>, which has been alive since 2013 and is in active development.</p>
      <p>I'm interested in working with caring organisations on projects which bring some good to the communities they serve. I'm available for design & software contracting, handling full projects, WordPress work, and consultation to those looking for advice in buying a digital service.</p>
    </section><!-- .home_description -->
    <nav class="home_site_map">
      <ul class="home_site_map__list">
        <li class="home_site_map__item">
          <g-link
          class="home_site_map__anchor"
          to="/working-together">Working together</g-link>
          <ul class="home_site_map__sub_list">
            <li class="home_site_map__sub__item">
              <g-link
              class="home_site_map__anchor"
              to="/working-together/contracting">Design & software contracting</g-link>
              <g-link
              class="home_site_map__anchor"
              to="/working-together/wordpress-development">WordPress development</g-link>
              <g-link
              class="home_site_map__anchor"
              to="/working-together/impartial-consulting">Impartial consulting</g-link>
              <g-link
              class="home_site_map__anchor"
              to="/working-together/permanent-roles">Permanent roles</g-link>
            </li><!-- .home_site_map__sub__item -->
          </ul><!-- .home_site_map__sub_list -->
        </li><!-- .home_site_map__item -->
        <li class="home_site_map__item">
          <g-link
          class="home_site_map__anchor"
          to="/experience">My experience</g-link>
          <ul class="home_site_map__sub_list">
            <li class="home_site_map__sub__item">
              <g-link
              class="home_site_map__anchor"
              to="/experience/summary">Summary</g-link>
              <g-link
              class="home_site_map__anchor"
              to="/experience/case-studies">Case studies</g-link>
              <g-link
              class="home_site_map__anchor"
              to="/experience/design">Design</g-link>
              <g-link
              class="home_site_map__anchor"
              to="/working-together/permanent-roles">Permanent roles</g-link>
            </li><!-- .home_site_map__sub__item -->
          </ul><!-- .home_site_map__sub_list -->
        </li><!-- .home_site_map__item -->
        <li class="home_site_map__item">
          <g-link
          class="home_site_map__anchor"
          to="/experience/tenet-css">Tenet CSS</g-link>
        </li><!-- .home_site_map__item -->
        <li class="home_site_map__item">
          <g-link
          class="home_site_map__anchor"
          to="/articles">Articles</g-link>
        </li><!-- .home_site_map__item -->
      </ul><!-- .home_site_map__list -->
    </nav><!-- .home_site_map -->
  </Layout>
</template>
<script>
  export default {
    computed: {
      calculateExperience: function () {
        const currentDate   = new Date();
        const startDate     = new Date("2007/07/28");
        const difference    = currentDate - startDate;
        const secondsInYear = 31557600000;
        const experience    = Math.floor(difference / secondsInYear);
        return experience
      }
    },
    metaInfo: {
      title: "Home"
    },
  }
</script>
