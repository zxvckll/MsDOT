<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableMerk from "@/components/Merk/TableMerk.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableMerk },
  data() {
    return {
      dataCustomer: [],
      merk: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListMerk() {
      var url = `http://localhost:5000/merk/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteMerkByID(id) {
      var url = `http://localhost:5000/merk/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListMerk();
      } catch (error) {
        console.error(error);
      }
    },
    async addMerk(newData) {
      delete newData.id
      var url = "http://localhost:5000/merk"
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
        this.getListMerk();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editMerk(newData) {
      var url = `http://localhost:5000/merk/${newData.id}`
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
        this.getListMerk();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListMerk();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table Merk
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableMerk
        :data="this.dataCustomer"
        :dataMerk="this.merk"
        @editmerk="editMerk"
        @addmerk="addMerk"
        @deletemerk="deleteMerkByID"
      ></TableMerk>
    </div>

    <!-- <table-merk :data="this.CustomerData"></table-merk> -->
  </div>
</template>

<style scoped></style>
