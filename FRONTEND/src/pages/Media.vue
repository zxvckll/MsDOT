<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableMedia from "@/components/Media/Table.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableMedia },
  data() {
    return {
      dataCustomer: [],
      media: [],
      DataMediaInterface: [],
      Merk: [],
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
        this.Merk = await data.data;
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
        this.DataMediaInterface = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListMedia() {
      var url = `http://localhost:5000/media/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteMediaByID(id) {
      var url = `http://localhost:5000/media/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListMedia();
      } catch (error) {
        console.error(error);
      }
    },
    async addMedia(newData) {
      delete newData.id
      var url = "http://localhost:5000/media"
      var data = {
        MediaInterfaceId: newData.MediaInterfaceId,
        MerkId: newData.MerkId,
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
        this.getListMedia();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editMedia(newData) {
      var url = `http://localhost:5000/media/${newData.id}`
      delete newData.id
      var data = {
        MediaInterfaceId: newData.MediaInterfaceId,
        MerkId: newData.MerkId,
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
        this.getListMedia();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListMedia();
    this.getListMediaInterface();
    this.getListMerk();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table Media
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableMedia
        :Merk="this.Merk"
        :data="this.dataCustomer"
        :MediaInterface="this.DataMediaInterface"
        @editmedia="editMedia"
        @addmedia="addMedia"
        @deletemedia="deleteMediaByID"
      ></TableMedia>
    </div>

    <!-- <table-media :data="this.CustomerData"></table-media> -->
  </div>
</template>

<style scoped></style>
