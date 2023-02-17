<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableMediaType from "@/components/MediaType/Table.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableMediaType },
  data() {
    return {
      dataCustomer: [],
      mediaType: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListMediaType() {
      var url = `http://localhost:5000/mediaType/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteMediaTypeByID(id) {
      var url = `http://localhost:5000/mediaType/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data =  response;
        console.log(data);
        this.getListMediaType();
      } catch (error) {
        console.error(error);
      }
    },
    async addMediaType(newData) {
      delete newData.id
      var url = "http://localhost:5000/mediaType"
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
        this.getListMediaType();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editMediaType(newData) {
      var url = `http://localhost:5000/mediaType/${newData.id}`
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
        this.getListMediaType();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListMediaType();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table MediaType
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableMediaType
        :data="this.dataCustomer"
        :dataMediaType="this.mediaType"
        @editmediaType="editMediaType"
        @addmediaType="addMediaType"
        @deletemediaType="deleteMediaTypeByID"
      ></TableMediaType>
    </div>

    <!-- <table-mediaType :data="this.CustomerData"></table-mediaType> -->
  </div>
</template>

<style scoped></style>
