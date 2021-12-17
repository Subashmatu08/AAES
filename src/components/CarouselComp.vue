<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          class="image m-0"
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

<style>
.card {
  max-width: 20vw;
  min-height: 60vh;
}
</style>
