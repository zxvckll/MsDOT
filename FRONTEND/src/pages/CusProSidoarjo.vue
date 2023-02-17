<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableProgress from "@/components/Nota/Table.vue";
import axios from "axios";

export default {
  props: [],
  components: { Hero, TableProgress },
  data() {
    return {
      dataCustomer: [],
    };
  },
  methods: {
    async getListProgress() {
      var url = `http://localhost:5000/nota/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListProgress();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Customer Progress MSDOT
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableProgress
        :data="this.dataCustomer"
      ></TableProgress>
    </div>

  </div>
</template>

<style scoped></style>
