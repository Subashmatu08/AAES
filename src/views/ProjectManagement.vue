<template>
  <section-hero
    herotitle="Project Management"
    herodesc="This is a description for Project Management"
    heroimg="hero-pm.png"
  />
  <div class="container-m">
    <h1 class="title is-size-2">Project Management Title</h1>
    <p class="text">
      We are engineering focused project management specialists. Had extensive
      experience in project management from sales to product delivery and after
      sales support. Our approach provides complete solutions to our clients and
      open discussion of project specifications. We act as authorised agent /
      representative for the Australian market who wish to supply products from
      overseas and ensure the product quality and compliance aligns Australian
      market to meet customer expectations and government regulations. Our
      friendly Team maintains long term relationships with clients and
      customers. Please contact us to discuss our project management
      services.
    </p>
    <div class="subtitle pt-5">We assist Our clients with: -</div>
    <p>
      <ul>
        <li>Market study</li>
        <li>Tender management</li>
        <li>Contract management</li>
        <li>Site visits / Third party inspections</li>
        <li>Transformers manufacturing</li>
        <li>Quality management systems</li>
        <li>Australian Standards (AS/NZS)</li>
        <li>Factory audits and Reporting</li>
        <li>Factory Acceptance Testing (FAT)</li>
        <li>Product supply and Customer service to clients</li>
        <li>Compliance management</li>
      </ul>
    </p>
  </div>
</template>

<script>
import SectionHero from "../components/SectionHero.vue";
export default {
  components: {
    SectionHero,
  },
};
</script>

<style lang="scss" scoped>
p.text {
  text-align: justify;
}
</style>
