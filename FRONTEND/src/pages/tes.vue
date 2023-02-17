<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

export default {
  props: [],
  components: {},
  data() {
    return {
        dataa : []
    };
  },
  methods : {
    async getProgressByID() {
      var url = `http://localhost:5000/progress/1`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataa = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getProgressByID();
  },
};
</script>

<template>
  <div class="text-black p-10 mb-10 mx-20">
    {{ dataa }}
aasd
  </div>
</template>

<style scoped></style>
