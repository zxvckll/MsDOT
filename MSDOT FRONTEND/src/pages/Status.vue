<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableStatus from "@/components/Status/TableStatus.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableStatus },
  data() {
    return {
      dataCustomer: [],
      status: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListStatus() {
      var url = `http://localhost:5000/status/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteStatusByID(id) {
      var url = `http://localhost:5000/status/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListStatus();
      } catch (error) {
        console.error(error);
      }
    },
    async addStatus(newData) {
      delete newData.id
      var url = "http://localhost:5000/status"
      var data = {
        name: newData.Name,
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
        this.getListStatus();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editStatus(newData) {
      var url = `http://localhost:5000/status/${newData.id}`
      delete newData.id
      var data = {
        
        name: newData.Name,
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
        this.getListStatus();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListStatus();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table Status
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableStatus
        :data="this.dataCustomer"
        :dataStatus="this.status"
        @editstatus="editStatus"
        @addstatus="addStatus"
        @deletestatus="deleteStatusByID"
      ></TableStatus>
    </div>

    <!-- <table-status :data="this.CustomerData"></table-status> -->
  </div>
</template>

<style scoped></style>
