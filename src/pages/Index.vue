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
            <li class="home_introduction__clients__item">United Nations</li><!-- .home_introduction__clients__item -->
            <li class="home_introduction__clients__item">Oxford University</li><!-- .home_introduction__clients__item -->
            <li class="home_introduction__clients__item">The Global Health Network</li><!-- .home_introduction__clients__item -->
            <li class="home_introduction__clients__item">Cardiff University</li><!-- .home_introduction__clients__item -->
            <li class="home_introduction__clients__item">Family Larsson-Rosenquist Foundation</li><!-- .home_introduction__clients__item -->
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
    <p>I design to answer the question, "what does this need to do, and how best can it do that?"</p>
    <p>I write software to answer the question, "what will I be glad of when I come back to this codebase in five years' time?"</p>
    <p>I come from a family of communication designers, and I've been building for the web since the nineties. I have project management experience, and I've led engineering teams through many technical and interpersonal challenges.</p>
    <p>My main contribution to open-source is my CSS framework for designing and building maintainable frontends, <a href="https://github.com/trubblebruin/tenet">Tenet CSS</a>.</p>
    <p>For the past few years I worked as <em>Principal of Frontend Engineering & Design</em> at a software house in Bristol, and now I'm contracting.</p>
  </Layout>
</template>
<script>
  export default {
    computed:{
      calculateExperience: function() {
        const currentDate = new Date();
        const startDate = new Date("2007/07/28");
        const difference = currentDate - startDate;
        const secondsInYear = 31557600000;
        const experience = Math.floor(difference / secondsInYear);
        return experience
      }
    },
    metaInfo: {
      title: "Home"
    },
  }
</script>
