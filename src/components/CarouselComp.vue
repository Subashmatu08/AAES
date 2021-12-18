<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          class="image"
          :src="require(`@/assets/${AccImage}`)"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left"></div>
        <div class="media-content">
          <p class="title is-5">
            {{ AccTitle }}
          </p>
          <p class="subtitle is-6 has-text-grey">{{ AccSubtitle }}</p>
        </div>
      </div>

      <div class="content">
        {{ AccContent }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["AccImage", "AccTitle", "AccSubtitle", "AccContent"],
};
</script>

<style scoped>
.card {
  min-width: 23vw;
  padding: auto 10rem;
  min-height: 70vh;
  transform: scale(0.7);
}
.image {
  width: 100%;
  transform: scale(0.7);
}
@media screen and (max-width: 1024px) {
  .card {
    min-width: 17vw;
    padding: auto 10rem;
    max-height: 50vh;
    transform: scale(0.7);
  }
}
</style>
