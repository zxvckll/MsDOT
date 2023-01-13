<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeroSlide from "./HeroSlide.vue";
export default {
  props: [],
  components: {
    HeroSlide,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="text-black  mx-20">
    <section>
      <HeroSlide></HeroSlide>
    </section>
    <div class="mx-60">
      <div class="my-10">
        <h2 class="mb-2">SITE STATISTICS</h2>
        <p class="text-xs">
          Visitors today : 1 <br />
          Page views today : 1<br />
          Total visitors : 6,124<br />
          Total page view: 10,587<br />
        </p>
      </div>
      <div class="my-10">
        <h2 class="mb-2">MSDOT PENYELAMAT DATA</h2>
        <p>Data Recovery Specialist, Berpengalaman lebih 21 tahun,, Menangani lebih 16.000 Customer, Terpercaya, Kerahasiaan Terjamin, berGaransi, FastRespon, Online Support, PASTIKAN DATA ANDA DITANGANI AHLINYA
        </p>
      </div>
      <router-link to="/">
        <img src="https://penyelamatdata.com/wp-content/uploads/2012/11/Pricelist-Msdot-01-862x1219.jpg" alt="">
      </router-link>
      
    </div>
  </div>
</template>

<style scoped></style>
