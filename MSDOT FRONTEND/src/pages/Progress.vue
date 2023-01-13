<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableProgress from "@/components/Progress/TableProgress.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableProgress },
  data() {
    return {
      dataCustomer: [],
      progressType: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListProgressType() {
      var url = `http://localhost:5000/progressType/`
      try {
        const response = await axios.get(url);
        const data =  response;
        console.log(data.data);

        this.progressType =  data.data;
        console.log(this.progressType);
      } catch (error) {
        console.error(error);
      }
    },
    async getListProgress() {
      var url = `http://localhost:5000/progress/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteProgressByID(id) {
      var url = `http://localhost:5000/progress/${id}`
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListProgress();
      } catch (error) {
        console.error(error);
      }
    },
    async addProgress(newData) {
      delete newData.id
      var url = "http://localhost:5000/progress"
      var data = {
        Name: newData.Name,
        ProgressTypeId: newData.ProgressType,
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
        this.getListProgress();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editProgress(newData) {
      var url = `http://localhost:5000/progress/${newData.id}`
      delete newData.id
      var data = {
        
        Name: newData.Name,
        ProgressTypeId: newData.ProgressType,
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
        this.getListProgress();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListProgress();
    this.getListProgressType();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table Progress
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableProgress
        :data="this.dataCustomer"
        :dataProgressType="this.progressType"
        @editprogress="editProgress"
        @addprogress="addProgress"
        @deleteprogress="deleteProgressByID"
      ></TableProgress>
    </div>

    <!-- <table-progress :data="this.CustomerData"></table-progress> -->
  </div>
</template>

<style scoped></style>
