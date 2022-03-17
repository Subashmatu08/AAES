<template>
  <nav
    class="navbar pl-5 pr-5"
    :class="{ isNavShown }"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link
        to="/"
        class="navbar-item logo"
        @click="isMenuShown = !isMenuShown"
        :class="{ isNavShown }"
      >
        <img class="nav-img" src="../../public/favicon.jpg" />
        Australian Applied Engineering Systems
      </router-link>

      <a
        role="button"
        class="navbar-burger"
        @click="isMenuShown = !isMenuShown"
        :class="{ 'is-active': isMenuShown, isNavShown }"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true" class="nav-toggle"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true" class="nav-toggle"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuShown }">
      <div class="navbar-end">
        <!-- <router-link
          to="/"
          class="navbar-item"
          @click="isMenuShown = !isMenuShown"
          :class="{ isNavShown }"
          exact
        >
          Home
        </router-link> -->

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link
            to="/"
            class="navbar-item"
            :class="{ isNavShown }"
            active-class="router-link-active"
            @click="isMenuShown = !isMenuShown"
          >
            Installations
          </router-link>

          <div class="navbar-dropdown">
            <a
              href="/#solarsystems"
              @click="isMenuShown = !isMenuShown"
              class="navbar-item"
            >
              Solar PV Systems
            </a>
            <a
              href="/#electrical"
              @click="isMenuShown = !isMenuShown"
              class="navbar-item"
            >
              Electrical
            </a>
            <a
              href="/#transformers"
              @click="isMenuShown = !isMenuShown"
              class="navbar-item"
            >
              Transformers
            </a>
            <!-- <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a> -->
          </div>
        </div>
        <router-link
          to="/transformers"
          class="navbar-item"
          :class="{ isNavShown }"
          active-class="router-link-active"
          @click="isMenuShown = !isMenuShown"
        >
          Transformers
        </router-link>
        <router-link
          to="/project-management"
          class="navbar-item"
          :class="{ isNavShown }"
          active-class="router-link-active"
          @click="isMenuShown = !isMenuShown"
        >
          Project Management
        </router-link>
        <router-link
          to="/accreditations"
          class="navbar-item"
          :class="{ isNavShown }"
          active-class="router-link-active"
          @click="isMenuShown = !isMenuShown"
        >
          Accreditations
        </router-link>
        <router-link
          to="/contact-us"
          class="navbar-item"
          :class="{ isNavShown }"
          active-class="router-link-active"
          @click="isMenuShown = !isMenuShown"
        >
          Reach Us
        </router-link>
      </div>
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
.navbar {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  backdrop-filter: blur(2px);
  box-shadow: 0px 1px 4px rgba(66, 66, 66, 0.199);
  padding-top: 3px !important;
  padding-bottom: 3px !important;
  // background: rgba(255, 255, 255, 0.788);
}

.nav-img {
  transform: scale(1.5);
  margin-right: 10px;
}
.nav-toggle {
  background-color: black !important;
}
.logo {
  font-size: 20px;
  color: #04427a !important;

  margin-top: 5px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:focus {
    background: transparent;
  }
  &:hover {
    color: #04427a !important;
  }
}
nav a {
  color: black !important;
  background: transparent !important;
  margin: auto 2px;
  z-index: 2;
}
.navbar-menu a::after {
  content: "";
  display: block;
  position: absolute;
  // background: rgba(16, 230, 245, 0.37);
  background: #4aa1ee49;
  inset: 0;
  opacity: 0;
}
.navbar-menu a:hover::after {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

nav.isNavShown {
  background-color: white !important;
  transition: 0.2s ease-in-out;
  box-shadow: 0px 1.5px 7px rgb(66, 66, 66);
}
.navbar-menu a.isNavShown {
  color: black !important;
  background-color: transparent;
  border-bottom: none;
}
.navbar-menu {
  box-shadow: none !important;
}
.navbar-burger {
  height: auto;
}
nav a.router-link-active {
  &::after {
    opacity: 1;
  }
}

@media screen and (max-width: 1024px) {
  .navbar-burger {
    background: black;
  }
  .logo {
    font-size: 13px;
  }
  .nav-img {
    transform: scale(1.5);
    margin-right: 10px;
  }
}
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
