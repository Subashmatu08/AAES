<template>
  <div class="error">
    <div class="errorcontent">
      <h1 class="is-size-1 errorheading">404 PAGE NOT FOUND</h1>
      <h1 class="is-size-1 errortext">Btw...Stay Home And Stay Safe</h1>
      <router-link to="/" class="errorbtn"
        ><i class="fas fa-home-lg-alt"></i> Home</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss">
.error {
  min-height: 100vh;
  background-color: rgb(48, 45, 45);
  position: relative;
  .errorcontent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    // text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  .errorbtn {
    color: #fff;
    font-size: 1.8rem;
    // padding: 5rem;
    justify-content: center;
    border: 2px solid rgb(53, 177, 140);
    padding: 0.5rem;
    border-radius: 10px;
    background-position-x: 0%;
    &:hover {
      transition: 0.2s ease-in-out;
      background-position-x: 100%;
      box-shadow: 0 0 4px #fff, 0 0 40px #0fa, 0 0 80px #0fa;
      text-shadow: 0 0 4px #fff, 0 0 40px #0fa, 0 0 80px #0fa;
    }
  }
}
.errorheading,
.errortext {
  animation: flicker 1.5s infinite alternate;
  color: #fff;
}
.errorheading {
  font-size: 4.2rem;
}
.errortext {
  font-size: 1.8rem;
}
@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
      0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
  }
  20%,
  24%,
  55% {
    text-shadow: none;
  }
}

@media screen and (max-width: 1024px) {
  .errorheading {
    font-size: 1.8rem !important;
  }
  .errortext {
    font-size: 1rem !important;
  }
  .errorbtn {
    font-size: 1rem !important;
  }
}
</style>
