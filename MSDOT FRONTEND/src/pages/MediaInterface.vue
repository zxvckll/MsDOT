<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableMediaInterface from "@/components/MediaInterface/TableMediaInterface.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableMediaInterface },
  data() {
    return {
      dataCustomer: [],
      DataMediaType: [],
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
        this.DataMediaType = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListMediaInterface() {
      var url = `http://localhost:5000/mediaInterface/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteMediaInterfaceByID(id) {
      var url = `http://localhost:5000/mediaInterface/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListMediaInterface();
      } catch (error) {
        console.error(error);
      }
    },
    async addMediaInterface(newData) {
      delete newData.id
      var url = "http://localhost:5000/mediaInterface"
      var data = {
        name: newData.Name,
        MediaTypeId: newData.MediaTypeId
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
        this.getListMediaInterface();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editMediaInterface(newData) {
      var url = `http://localhost:5000/mediaInterface/${newData.id}`
      delete newData.id
      var data = {
        name: newData.Name,
        MediaTypeId: newData.MediaTypeId
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
        this.getListMediaInterface();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListMediaInterface();
    this.getListMediaType();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table MediaInterface
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableMediaInterface
        :DataMediaType="this.DataMediaType"
        :data="this.dataCustomer"
        @editmediaInterface="editMediaInterface"
        @addmediaInterface="addMediaInterface"
        @deletemediaInterface="deleteMediaInterfaceByID"
      ></TableMediaInterface>
    </div>

    <!-- <table-mediaInterface :data="this.CustomerData"></table-mediaInterface> -->
  </div>
</template>

<style scoped></style>
