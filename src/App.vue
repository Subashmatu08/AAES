<template>
  <nav-bar />
  <main>
    <router-view />
  </main>
</template>
<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  setup() {},
};
</script>

<style lang="scss">
main {
  min-height: 100vh !important;
}
HTML {
  scroll-behavior: smooth;
}
</style>
