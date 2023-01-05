<template>
  <div class="user_visible_content">
    <header
    class="global_header"
    id="global_header">
      <div class="global_header__inner">
        <g-link
        class="global_header__site_name"
        to="/">{{ $static.metadata.siteName }}</g-link>
        <ContactButton/>
        <button
        class="global_header__global_navigation_reveal"
        id="global_navigation_reveal">
          <span class="global_header__global_navigation_reveal__text">Navigate</span>
          <NavigationIcon/>
        </button><!-- .global_header__global_navigation_reveal -->
      </div><!-- .global_header__inner -->
    </header><!-- .global_header -->
    <NavigationGlobal/>
    <main class="main_content">
      <slot/>
    </main>
    <footer class="global_footer">Global footer</footer><!-- .global_footer -->
  </div><!-- .user_visible_content -->
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
  import ContactButton from "~/components/ContactButton.vue"
  import NavigationGlobal from "~/components/NavigationGlobal.vue"
  import NavigationIcon from "~/assets/svg/navigation_icon.svg"
  export default {
    components: {
      ContactButton,
      NavigationGlobal,
      NavigationIcon,
    }
  }
</script>
