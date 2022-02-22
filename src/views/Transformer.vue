<template>
  <section-hero
    herotitle="Transformers"
    herodesc="This is a description for Transformers"
    heroimg="hero-transformer.jpg"
  />
  <div class="container-m">
    <p class="title is-size-2">Distribution &amp; Power Transformers</p>
    <p class="text">
      We supply transformers (Pole Mount, Pad mount and Ground mount) for power
      utilities and various industrial and mining customers.
    </p>
    <div class="columns py-5">
      <div class="column">
        <p class="title">Pole Mount Transformers</p>
        <p class="text">
          Our pole mount distribution transformers are from 5KVA to 500kVA with
          primary voltages of 11, 22 and 33kV in single phase, single phase
          SWER, 3 phase or dual ratio. Transformers are manufactured based on
          the requirements of the AEEMA/ENA “specification for pole mounting
          distribution transformers” and/or customer specific requirements, as
          well as the requirements of AS60076. All our standard designs have
          been certified by type testing including impulse, short circuit,
          temperature rise, and sound level.
        </p>
        <div class="text py-2">
          <b>Specifications :</b>
          <ul style="list-style-type: square" class="ml-5">
            <li>Primary voltage rating: 11kV to 36kV.</li>
            <li>Secondary Voltage rating: 250V/433V.</li>
            <li>Rating: 5 to 500kVA</li>
            <li>MEPS or HEPS compliance.</li>
            <li>AEEMA/ENA standard specification – complete range.</li>
            <li>Single phase, Three phase and SWER Transformers.</li>
            <li>Fully sealed tanks with Pressure relief valves</li>
            <li>Off load tap changers.</li>
            <li>Pole mount suitability as per utility requirements.</li>
          </ul>
        </div>
      </div>
      <div class="column">
        <img src="../assets/transformer-pole.jpg" class="image" alt="" />
      </div>
    </div>
    <hr />
    <div class="columns py-5">
      <div class="column">
        <img src="../assets/transformer-pole.jpg" class="image" alt="" />
      </div>
      <div class="column">
        <p class="title">Ground Mount Transformers:</p>
        <p class="text">
          Our Ground mount Transformers ranging from 500KVA to 2500kVA, 36kV
          class including Kiosk substation units. Each kiosk unit is designed
          with a modular approach and cost-effective distribution transformer
          assembly. The transformer is built around a variety of bases, bunds,
          kiosk enclosures and accessories to suit the customer requirements.
        </p>
        <div class="text py-2">
          <b>Specifications :</b>
          <ul style="list-style-type: square" class="ml-5">
            <li>Primary Voltage rating: 11kV to 36kV.</li>
            <li>Secondary Voltage rating: 250V/433V.</li>
            <li>Ratings: 500 to 2500kVA.</li>
            <li>MEPS / HEPS compliance.</li>
            <li>Single phase and Three phase.</li>
            <li>Fully sealed tanks with accessories.</li>
            <li>200A DIN HV bushing connections or customers requirement.</li>
            <li>Off load tap changers 7 steps.</li>
            <li>Hot dip galvanized and/or painted finish.</li>
            <li>
              Switchgear to suit application sourced from a range of suppliers..
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr />
    <div class="columns py-5">
      <div class="column">
        <p class="title">Industrial Transformers:</p>
        <p class="text">
          Our Industrial ground mount transformers are ranging from 1000kVA to
          10000kVA, upto 66kV class with proven laboratory type testing.
        </p>
        <div class="text py-2">
          <b>Highlights</b>
          <ul>
            <li>Non-standard primary and secondary voltages.</li>
            <li>Traction Transformers.</li>
            <li>Generator transformers.</li>
            <li>Furnace transformers.</li>
            <li>Mining transformers.</li>
          </ul>
        </div>
        <div class="text py-2">
          <b>Specifications :</b>
          <ul style="list-style-type: square" class="ml-5">
            <li>Primary Voltage rating: 11kV to 36kV.</li>
            <li>Secondary Voltage rating: 250V/433V.</li>
            <li>Ratings: 500 to 2500kVA.</li>
            <li>MEPS / HEPS compliance.</li>
            <li>Single phase and Three phase.</li>
            <li>Fully sealed tanks with accessories.</li>
            <li>200A DIN HV bushing connections or customers requirement.</li>
            <li>Off load tap changers 7 steps.</li>
            <li>Hot dip galvanized and/or painted finish.</li>
            <li>
              Switchgear to suit application sourced from a range of suppliers..
            </li>
          </ul>
        </div>
      </div>
      <div class="column">
        <img src="../assets/transformer-industrial.jpg" class="image" alt="" />
      </div>
    </div>
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
.image {
  width: 100%;
  border-radius: 5px;
}
</style>
