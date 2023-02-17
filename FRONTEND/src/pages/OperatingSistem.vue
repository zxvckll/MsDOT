<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableOperatingSistem from "@/components/OperatingSistem/Table.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: [],
  components: { Hero, TableOperatingSistem },
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
    async getListOperatingSistem() {
      var url = `http://localhost:5000/operatingSistem/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataTable = await data.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteOperatingSistemByID(id) {
      var url = `http://localhost:5000/operatingSistem/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListOperatingSistem();
      } catch (error) {
        console.error(error);
      }
    },
    async addOperatingSistem(newData) {
      delete newData.id
      var url = "http://localhost:5000/operatingSistem"
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
        this.getListOperatingSistem();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editOperatingSistem(newData) {
      var url = `http://localhost:5000/operatingSistem/${newData.id}`
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
        this.getListOperatingSistem();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListOperatingSistem();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table OperatingSistem
    </h2>
    <div v-if="this.dataTable != NULL">
      <TableOperatingSistem
        :data="this.dataTable"
        @editData="editOperatingSistem"
        @addData="addOperatingSistem"
        @deleteData="deleteOperatingSistemByID"
      ></TableOperatingSistem>
    </div>

    <!-- <table-operatingSistem :data="this.CustomerData"></table-operatingSistem> -->
  </div>
</template>

<style scoped></style>
