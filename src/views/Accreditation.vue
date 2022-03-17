<template>
  <section-hero herotitle="Accreditations" herodesc="" heroimg="hero-acc.jpg" />
  <div class="container-m">
    <h1 class="is-size-2 title">Accreditations</h1>
    <p class="text pt-5">
      We are NSW Based Licensed Electrical contractors with Fair trading and
      registered master cablers with ACMA. Our accreditations with Clean Energy
      Council as a Designer and installer enable us to play vital role in
      renewal energy market along with Electrical installations and
      Commissioning.
      <br />
      Being a professional member of NECA, our participation in electrical and
      communication industry kept us with current regulations, australian
      standards and industry updates.
    </p>

    <div class="accimages">
      <div class="tile tile1">
        <img src="../assets/Acc-3.jpg" alt="" />
      </div>
      <div class="tile tile2">
        <img src="../assets/Acc-4.png" alt="" />
      </div>
      <div class="tile tile3">
        <img src="../assets/Acc-5.png" alt="" />
      </div>
      <div class="tile tile4">
        <img src="../assets/Acc-1.jpg" alt="" />
      </div>
      <div class="tile tile5">
        <img src="../assets/Acc-2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionHero from "../components/SectionHero.vue";
export default {
  name: "Autoplay",
  components: {
    SectionHero,
  },
};
</script>

<style scoped>
p.text {
  text-align: justify;
}
img {
  transform: scale(0.7);
}
.accimages {
  display: grid;
  justify-content: center;
  align-content: center;
  flex-grow: 1;
  grid-template-columns: repeat(4, 15em) !important;
  grid-template-rows: repeat(4, 10em) !important;
  gap: 0.25em;
  margin-bottom: 1em;
  transform: scale(0.8);
}
.tile {
  border: 1px solid rgb(105, 103, 103);
  box-shadow: 10px 10px 10px 1px rgb(189, 187, 187);
  border-radius: 5px;
}
.tile1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tile2 {
  grid-column: 3 / span 4;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tile3 {
  grid-column: 3 / span 4;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tile4 {
  grid-column: 1 / span 2;
  grid-row: 3 / span 4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tile5 {
  grid-column: 3 / span 4;
  grid-row: 3 / span 4;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 890px) {
  .accimages {
    transform: scale(0.5) !important;
  }
}
@media screen and (max-width: 480px) {
  img {
    transform: scale(0.5);
  }
  .accimages {
    transform: scale(0.3) !important;
    height: 50vh;
  }
}
</style>
