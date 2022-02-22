<template>
  <div class="hero">
    <img :src="require(`@/assets/${heroimg}`)" class="banner" alt="AAES" />
    <div class="hero-desc">
      <div>
        <h1 class="title has-text-white is-size-2">{{ herotitle }}</h1>
        <h5 class="subtitle is-4 has-text-white">
          {{ herodesc }}
        </h5>
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
          <ul>
            <li>
              <router-link to="/" class="has-text-white">Home</router-link>
            </li>
            <li class="is-active">
              <a aria-current="page" class="is-active">{{ herotitle }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["herotitle", "herodesc", "heroimg"],
};
</script>

<style>
.hero {
  height: 60vh;
  background-size: cover;
  position: relative;
}
.hero-desc {
  color: white;
  background: rgba(0, 0, 0, 0.555);
  position: absolute;
  inset: 0;
  z-index: 3;
}
.hero-desc div {
  margin: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
}
.banner {
  z-index: 1;
  height: 100%;
  object-fit: cover;
}
.is-active {
  color: rgb(211, 209, 209) !important;
}
</style>
