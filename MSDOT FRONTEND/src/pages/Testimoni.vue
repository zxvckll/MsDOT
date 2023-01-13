<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import Hero from '@/components/HeroSlide.vue'
export default {
  props: [],
  components: {Hero,},
  data() {
    return {};
  },
};
</script>

<template>
  <div class="text-black p-10 mb-10 mx-20">
    <Hero></Hero>
  </div>
</template>

<style scoped></style>
