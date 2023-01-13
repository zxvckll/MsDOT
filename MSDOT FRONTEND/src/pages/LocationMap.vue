<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HeroSlide from '@/components/HeroSlide.vue';
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
  <div class="text-black text-center  p-10 mb-10">
    <HeroSlide ></HeroSlide>
    <h2 class="my-10 text-5xl">Alamat MsDOT</h2>
    <img class="mx-auto" src="http://2.bp.blogspot.com/-FlgoF9ccFjQ/UKmKLdwVqaI/AAAAAAAABy4/XSmYGqVAUKA/s400/MsDOT+Peta+Lokasi.jpg" alt="">
    <h3 class="text-3xl mt-10 mb-5">Head Office :</h3>
    <pre>
Griyo Wage Asri II Blok AD-19
Wage – Taman – Sidoarjo – Jawa Timur – Indonesia
( Pom Bensin Aloha ke arah Barat 3 km )
Alternatif Peta : <a href="http://www.wikimapia.org/#lat=-7.3654488&lon=112.71157&z=19&l=54&m=b&search=griyo%20wage%20asri">Google Maps</a>
    </pre>
    <img class="mx-auto" src="http://1.bp.blogspot.com/-qSEWBJqIJUw/UKmLfER7V8I/AAAAAAAABzA/v_4iOXnSpwI/s400/MsDOT+Kontak+Kami.jpg" alt="">
    <h3 class="text-3xl mt-10 mb-5">Branch Office :</h3>
    <pre>THR IT Mall Lantai Dasar Blok E-14
Jl. Kusuma Bangsa 116-118 Surabaya – Jawa Timur – Indonesia
Alternatif Peta : Google Maps</pre>

</div>

</template>

<style scoped></style>
