<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableSizeType from "@/components/SizeType/TableSizeType.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableSizeType },
  data() {
    return {
      dataCustomer: [],
      sizeType: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListSizeType() {
      var url = `http://localhost:5000/sizeType/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteSizeTypeByID(id) {
      var url = `http://localhost:5000/sizeType/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListSizeType();
      } catch (error) {
        console.error(error);
      }
    },
    async addSizeType(newData) {
      delete newData.id
      var url = "http://localhost:5000/sizeType"
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
        this.getListSizeType();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editSizeType(newData) {
      var url = `http://localhost:5000/sizeType/${newData.id}`
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
        this.getListSizeType();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListSizeType();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table SizeType
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableSizeType
        :data="this.dataCustomer"
        :dataSizeType="this.sizeType"
        @editsizeType="editSizeType"
        @addsizeType="addSizeType"
        @deletesizeType="deleteSizeTypeByID"
      ></TableSizeType>
    </div>

    <!-- <table-sizeType :data="this.CustomerData"></table-sizeType> -->
  </div>
</template>

<style scoped></style>
