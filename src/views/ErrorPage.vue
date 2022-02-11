<template>
  <div class="error">
    <div class="errorcontent">
      <h1 class="is-size-1 errorheading">404 PAGE NOT FOUND</h1>
      <a href="/">Back Home</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss">
.errorcontent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
