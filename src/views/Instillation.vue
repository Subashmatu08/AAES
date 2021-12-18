<template>
  <section-hero
    herotitle="Installation"
    herodesc="Installation,Testing &amp; Commissioning"
    heroimg="inst-hero-inst.jpg"
  />
  <div class="container-m">
    <p class="title pb-5 is-size-2">What are all the Instillations we do?</p>
    <div class="solarsys columns pb-5" id="solarsystems">
      <div class="inst-desc column">
        <h1 class="title">Solar PV Systems</h1>
        <p class="text">
          We are Clean Energy Council Accredited Solar designers and installers
          and providing our customers with custom designed Grid-connect PV
          installation services for residential, Commercial premises to suit
          their requirements. We encourage our customers to utilize the
          advantage of Solar rebates being offered by government to reduce the
          capital investment on solar generation units and enjoy the quick
          return of investment. For more information to about NSW government
          vision, We recommend to visit the
          <a
            href="https://energysaver.nsw.gov.au/households/solar-and-battery-power"
            target="_blank"
            >energysaver.nsw.gov.au</a
          >
          . We work with many retailers to install the PV systems on
          sub-contracting basis. Please discuss with our friendly Team about
          your solar requirements and eligibility.
        </p>
      </div>
      <div class="inst-pic column">
        <img src="../assets/inst-solar.jpg" class="image" alt="Solar Panels" />
      </div>
    </div>
    <hr />
    <div class="electrical columns pb-5" id="electrical">
      <div class="column">
        <img
          src="../assets/inst-electrical.jpg"
          class="image"
          alt="Electrical"
        />
      </div>
      <div class="column">
        <h1 class="title">Electrical</h1>
        <p class="text pb-3">
          Being a Licenced Electrical Contractors, we undertake Installation of
          Electrical Systems right from 230/440V Switchboards up to Large
          Complex Control systems in 330KV Substations including Power and
          distribution Transformers, LV &amp; HV Switchgear, ACBs, CTs, VTs,
          Relays, Metering and Control wiring.
        </p>
        <p class="text">
          Our field Service team performs Testing and commissioning of
          substation assets and Electrical installations. Please contact us to
          discuss your electrical requirements.
        </p>
      </div>
    </div>
    <hr />
    <div class="transformer columns pb-5" id="transformers">
      <div class="column">
        <h1 class="title">Transformers</h1>
        <p class="text">
          We had over 20 Years of experience in Designing, Manufacturing,
          Testing and Installation on sites. Our expertise will certainly help
          our clients with Troubleshooting, Asset management and Testing of
          Distribution Transformers, Power Transformers, Dry type transformers
          and Special purpose transformers. Please enquire us for your
          Transformers needs.
        </p>
      </div>
      <div class="column">
        <img
          src="../assets/inst-transformer1.jpg"
          class="image"
          alt="Transformer"
        />
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
.solarsys,
.electric,
.transformer {
  min-height: 50vh;
}

.image {
  width: 100%;
  border-radius: 5px;
}
</style>
<style lang="scss">
.container-m {
  margin: 5rem;
}
</style>
