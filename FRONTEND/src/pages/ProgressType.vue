<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableProgressType from "@/components/ProgressType/TableProgressType.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableProgressType },
  data() {
    return {
      dataCustomer: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListProgressType() {
      var url = `http://localhost:5000/progressType/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProgressTypeByID(id) {
      var url = `http://localhost:5000/progressType/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListProgressType();
      } catch (error) {
        console.error(error);
      }
    },
    async addProgressType(newData) {
      delete newData.id
      var url = "http://localhost:5000/progressType"
      var data = {
        name: newData.Nama,
      }
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.post(url,data,config);
        console.log(newData);
        console.log(response);
        this.getListProgressType();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editProgressType(newData) {
      var url = `http://localhost:5000/progressType/${newData.id}`
      delete newData.id
      var data = {
        name: newData.Nama,
      }
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.put(url,data,config);
        console.log(newData);
        console.log(response);
        this.getListProgressType();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListProgressType();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table ProgressType
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableProgressType
        :data="this.dataCustomer"
        @editprogressType="editProgressType"
        @addprogressType="addProgressType"
        @deleteprogressType="deleteProgressTypeByID"
      ></TableProgressType>
    </div>

    <!-- <table-progressType :data="this.CustomerData"></table-progressType> -->
  </div>
</template>

<style scoped></style>
