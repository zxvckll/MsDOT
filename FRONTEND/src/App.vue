<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from "./components/Home.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
    Home,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
    <div v-if="this.$route.fullPath == '/'">
      <Home></Home>
    </div>
    <!-- <tesVue></tesVue> -->
  </div>
</template>

<style scoped></style>
