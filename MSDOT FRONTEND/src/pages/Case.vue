<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableCase from "@/components/Case/TableCase.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: [],
  components: { Hero, TableCase },
  data() {
    return {
      dataCustomer: [],
      case: [],
      dataCaseName: [],
      dataCaseType: [],
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
        this.dataCaseType = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListCaseName() {
      var url = `http://localhost:5000/caseName/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCaseName = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListCase() {
      var url = `http://localhost:5000/case/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCaseByID(id) {
      var url = `http://localhost:5000/case/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListCase();
      } catch (error) {
        console.error(error);
      }
    },
    async addCase(newData) {
      delete newData.id
      var url = "http://localhost:5000/case"
      var data = {
        CaseNameId: newData.CaseNameId,
        CaseTypeId: newData.CaseTypeId,
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
        this.getListCase();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editCase(newData) {
      var url = `http://localhost:5000/case/${newData.id}`
      delete newData.id
      var data = {
        CaseNameId: newData.CaseNameId,
        CaseTypeId: newData.CaseTypeId,
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
        this.getListCase();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListCase();
    this.getListCaseName();
    this.getListCaseType();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table Case
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableCase
        :data="this.dataCustomer"
        :DataCaseName="this.dataCaseName"
        :DataCaseType="this.dataCaseType"
        :dataCase="this.case"
        @editcase="editCase"
        @addcase="addCase"
        @deletecase="deleteCaseByID"
      ></TableCase>
    </div>

    <!-- <table-case :data="this.CustomerData"></table-case> -->
  </div>
</template>

<style scoped></style>
