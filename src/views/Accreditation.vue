<template>
  <section-hero
    herotitle="Accreditations"
    herodesc="This is a description"
    heroimg="hero-acc.jpg"
  />
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
    <div class="carousel-div">
      <Carousel
        :autoplay="3000"
        :wrapAround="true"
        class="carousel"
        :settings="settings"
        :breakpoints="breakpoints"
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
  </div>
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
      breakpoints: {
        480: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        // 700px and up
        972: {
          itemsToShow: 2.2,
          snapAlign: "center",
        },
        // 1024 and up
        973: {
          // itemsToShow: 3.95,
          itemsToShow: 2.2,
          snapAlign: "center",
        },
        1024: {
          // itemsToShow: 3.95,
          itemsToShow: 2.75,
          snapAlign: "center",
        },
      },
    };
  },
});
</script>

<style scoped>
p.text {
  text-align: justify;
}

@media screen and (min-width: 1024px) {
  .carousel-div {
    transform: scale(0.8);
  }
}
</style>
