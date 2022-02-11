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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 55px;
}
main {
  min-height: 100vh !important;
}
HTML {
  width: 100vw;
  scroll-behavior: smooth;
}
.container-m {
  margin: 5rem;
}
::-webkit-scrollbar {
  width: 10px;
  background: #ebe7e7;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: #b9b4b4;
  border-radius: 2px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a7a6a6;
}
@media screen and (max-width: 1024px) {
  .container-m {
    margin: 2rem !important;
  }
}
</style>
