<template>
  <nav-bar class="nav-bar" />
  <main>
    <router-view class="router" />
  </main>
  <Footer />
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  setup() {
    // window.scroll({
    //   behavior: "smooth",
    // });
  },
};
</script>

<style lang="scss">
main {
  min-height: 100vh !important;
}
HTML {
  scroll-behavior: smooth;
}
.container-m {
  margin: 5rem;
}
@media screen and (max-width: 1024px) {
  .container-m {
    margin: 2rem !important;
  }
}
</style>
