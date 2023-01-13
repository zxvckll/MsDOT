<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableCaseType from "@/components/CaseType/TableCaseType.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: [],
  components: { Hero, TableCaseType },
  data() {
    return {
      dataCustomer: [],
      caseType: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getterLoginStatus: "getLoginStatus",
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListCaseType() {
      var url = `http://localhost:5000/caseType/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCaseTypeByID(id) {
      var url = `http://localhost:5000/caseType/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListCaseType();
      } catch (error) {
        console.error(error);
      }
    },
    async addCaseType(newData) {
      delete newData.id
      var url = "http://localhost:5000/caseType"
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
        this.getListCaseType();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editCaseType(newData) {
      var url = `http://localhost:5000/caseType/${newData.id}`
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
        this.getListCaseType();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListCaseType();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table CaseType
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableCaseType
        :data="this.dataCustomer"
        :dataCaseType="this.caseType"
        @editcaseType="editCaseType"
        @addcaseType="addCaseType"
        @deletecaseType="deleteCaseTypeByID"
      ></TableCaseType>
    </div>

    <!-- <table-caseType :data="this.CustomerData"></table-caseType> -->
  </div>
</template>

<style scoped></style>
