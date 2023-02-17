<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableDate from "@/components/Date/Table.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: [],
  components: { Hero, TableDate },
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
    async getListDate() {
      var url = `http://localhost:5000/date/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataTable = await data.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteDateByID(id) {
      var url = `http://localhost:5000/date/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListDate();
      } catch (error) {
        console.error(error);
      }
    },
    async addDate(newData) {
      delete newData.id
      var url = "http://localhost:5000/date"
      var data = {
        date_new_nota: newData.date_new_nota,
        date_take_nota: newData.date_take_nota,
        date_other_1: newData.date_other_1,
        date_other_2: newData.date_other_2,
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
        this.getListDate();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editDate(newData) {
      var url = `http://localhost:5000/date/${newData.id}`
      delete newData.id
      var data = {
        date_new_nota: newData.date_new_nota,
        date_take_nota: newData.date_take_nota,
        date_other_1: newData.date_other_1,
        date_other_2: newData.date_other_2,
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
        this.getListDate();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListDate();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table Date
    </h2>
    <div v-if="this.dataTable != NULL">
      <TableDate
        :data="this.dataTable"
        @editData="editDate"
        @addData="addDate"
        @deleteData="deleteDateByID"
      ></TableDate>
    </div>

    <!-- <table-date :data="this.CustomerData"></table-date> -->
  </div>
</template>

<style scoped></style>
