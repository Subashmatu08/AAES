<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <h1>Austrailian Applied Engineering System</h1>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item"> Home </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link to="/instillation" class="navbar-link">
            Instillation
          </router-link>

          <div class="navbar-dropdown">
            <a href="/instillation#solarsystems" class="navbar-item">
              Solar PV Systems
            </a>
            <a href="/instillation#electrical" class="navbar-item">
              Electrical
            </a>
            <a href="/instillation#transformers" class="navbar-item">
              Transformers
            </a>
            <!-- <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a> -->
          </div>
        </div>
        <router-link to="/transformers" class="navbar-item">
          Transformers
        </router-link>
        <router-link to="/project-management" class="navbar-item">
          Project Managements
        </router-link>
        <router-link to="/accreditations" class="navbar-item">
          Accredatations
        </router-link>
        <router-link to="/contact-us" class="navbar-item">
          Contact Us
        </router-link>
      </div>

      <!-- <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const isMenuShown = ref(false);
    const isNavShown = ref(false);
    function handleScroll() {
      if (window.scrollY > 1) {
        isNavShown.value = true;
      } else if (window.scrollY <= 1) {
        isNavShown.value = false;
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    return {
      isMenuShown,
      isNavShown,
    };
  },
};
</script>

<style lang="scss">
nav {
  margin-top: 50px;
  width: 100%;
  box-shadow: 0px 1px 4px rgba(66, 66, 66, 0.199);
  margin: 0;
  position: sticky !important;
  scroll-behavior: smooth !important;
}
</style>
