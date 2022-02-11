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

<style lang="scss" scoped>
.card {
  width: max-content;
  height: 60vh;
  transform: scale(0.8);
}
.image {
  width: 20vw;
  aspect-ratio: 10/8;
  transform: scale(0.8);
}

@media screen and (min-width: 480px) {
  .card {
    height: 60vh;
    width: 55vw;
  }
}
@media screen and (min-width: 600px) {
  .card {
    height: 80vh;
    width: 55vw;
  }
}
@media screen and (min-width: 972px) {
  .card {
    height: 80vh;
    width: 45vw;
  }
}
// @media screen and (min-width: 970px) {
//   .card {
//     height: 80vh;
//   }
// }
@media screen and (min-width: 1024px) {
  .card {
    height: 100vh;
    width: 45vw;
    transform: scale(0.6);
    .image {
      width: 40vw;
      aspect-ratio: 10/8;
      transform: scale(0.8);
    }
  }
}
</style>
