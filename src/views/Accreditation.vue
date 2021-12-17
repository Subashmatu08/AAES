<template>
  <section-hero
    herotitle="Accreditations"
    herodesc="This is a description"
    heroimg="inst-hero-acc.jpg"
  />
  <div class="container-m">
    <h1 class="is-size-2 title">Accredatation</h1>
    <p class="text py-5">
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
  </div>

  <div class="carousel-div">
    <Carousel
      :autoplay="3000"
      :wrapAround="true"
      class="carousel"
      :items-to-show="3.95"
    >
      <template #slides>
        <Slide v-for="item in items" :key="item.id">
          <div class="carousel__item">
            <carousel-comp
              :AccImage="item.img"
              :AccTitle="item.title"
              :AccContent="item.descr"
              :AccSubtitle="item.subtitle"
            />
          </div>
        </Slide>
      </template>
      <template #addons="{ slidesCount }">
        <Navigation v-if="slidesCount > 1" />
        <!-- <pagination /> -->
      </template>
    </Carousel>
  </div>

  <!-- <carousel-comp
    AccImage="Acc-1.jpg"
    AccTitle="Accredited Solar Designer"
    AccContent="Accredited Solar Designer"
    AccSubtitle="Accredited Solar Designer"
  /> -->
</template>

<script>
import { defineComponent } from "vue";
import CarouselComp from "../components/CarouselComp.vue";
import items from "../components/items.js";
import SectionHero from "../components/SectionHero.vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default defineComponent({
  name: "Autoplay",
  components: {
    SectionHero,
    CarouselComp,
    Carousel,
    Slide,
    // Pagination,
    Navigation,
  },
  data() {
    return {
      items,
    };
  },
});
</script>

<style scoped>
.container-m {
  margin: 5rem;
}
p.text {
  text-align: justify;
}
.carousel {
  width: 85vw;
}
.carousel-div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
}
/* .carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
} */
</style>
