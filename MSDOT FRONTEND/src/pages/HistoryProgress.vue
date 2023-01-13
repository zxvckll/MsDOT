<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableHistoryProgress from "@/components/HistoryProgress/TableHistoryProgress.vue";
import axios from "axios";
import { mapGetters } from "vuex";


export default {
  props: [],
  components: { Hero, TableHistoryProgress },
  data() {
    return {
      dataCustomer: [],
      historyProgress: [],
      Progress:[],
      ProgressType:[],
      Nota:[],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getterLoginStatus: "getLoginStatus",
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListNota() {
      var url = `http://localhost:5000/nota/`
      try {
        const response = await axios.get(url);
        const data =  response;
        this.Nota = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListProgress() {
      var url = `http://localhost:5000/progress/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.Progress = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListProgressType() {
      var url = `http://localhost:5000/progressType/`
      try {
        const response = await axios.get(url);
        const data =  response;
        console.log(data.data);

        this.ProgressType =  data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListHistoryProgress() {
      var url = `http://localhost:5000/historyProgress/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteHistoryProgressByID(id) {
      var url = `http://localhost:5000/historyProgress/${id}`;
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.delete(url,config);
        const data = response;
        console.log(data);
        this.getListHistoryProgress();
      } catch (error) {
        console.error(error);
      }
    },
    async addHistoryProgress(newData) {
      delete newData.id;
      var url = "http://localhost:5000/historyProgress";
      var data = {
        NotumId: newData.NotumId,
        deadline: newData.deadline,
        ProgressId: newData.ProgressId,
      };
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.post(url, data, config);
        console.log(newData);
        console.log(response);
        this.getListHistoryProgress();
      } catch (error) {
        console.error(error);
      }
    },
    async editHistoryProgress(newData) {
      var url = `http://localhost:5000/historyProgress/${newData.id}`;
      delete newData.id;
      var data = {
        name: newData.Name,
      };
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        },
      };
      try {
        const response = await axios.put(url, data, config);
        console.log(newData);
        console.log(response);
        this.getListHistoryProgress();
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListProgressType();
    this.getListProgress();
    this.getListNota();
    this.getListHistoryProgress();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table HistoryProgress
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableHistoryProgress
        :Progress="this.Progress"
        :ProgressType="this.ProgressType"
        :Nota="this.Nota"
        :data="this.dataCustomer"
        :dataHistoryProgress="this.historyProgress"
        @edithistoryProgress="editHistoryProgress"
        @addhistoryProgress="addHistoryProgress"
        @deletehistoryProgress="deleteHistoryProgressByID"
      ></TableHistoryProgress>
    </div>

    <!-- <table-historyProgress :data="this.CustomerData"></table-historyProgress> -->
  </div>
</template>

<style scoped></style>
