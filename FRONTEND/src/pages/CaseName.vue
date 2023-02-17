<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableCaseName from "@/components/CaseName/Table.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: [],
  components: { Hero, TableCaseName },
  data() {
    return {
      dataTable: [],

    };
  },
  computed: {
    ...mapGetters("auth", {
      getterLoginStatus: "getLoginStatus",
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListCaseName() {
      var url = `http://localhost:5000/caseName/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataTable = await data.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCaseNameByID(id) {
      var url = `http://localhost:5000/caseName/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListCaseName();
      } catch (error) {
        console.error(error);
      }
    },
    async addCaseName(newData) {
      delete newData.id
      var url = "http://localhost:5000/caseName"
      var data = {
        name: newData.Name,
      }
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.post(url,data,config);
        console.log(newData);
        console.log(response);
        this.getListCaseName();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editCaseName(newData) {
      var url = `http://localhost:5000/caseName/${newData.id}`
      delete newData.id
      var data = {
        
        name: newData.Name,
      }
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.put(url,data,config);
        console.log(newData);
        console.log(response);
        this.getListCaseName();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListCaseName();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table CaseName
    </h2>
    <div v-if="this.dataTable != NULL">
      <TableCaseName
        :data="this.dataTable"
        @editData="editCaseName"
        @addData="addCaseName"
        @deleteData="deleteCaseNameByID"
      ></TableCaseName>
    </div>

    <!-- <table-caseName :data="this.CustomerData"></table-caseName> -->
  </div>
</template>

<style scoped></style>
