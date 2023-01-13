<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableNota from "@/components/Nota/TableNota.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableNota },
  data() {
    return {
      dataCustomer: [],
      User: [],
      SizeType: [],
      CaseName: [],
      CaseType: [],
      Status: [],
      Progress: [],
      MediaInterface: [],
      Merk: [],
      MediaType: [],
      ProgressType: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async addHistoryProgress(newData,notaId) {
      delete newData.id;
      var url = "http://localhost:5000/historyProgress";
      var data = {
        NotumId: notaId,
        deadline: newData.date,
        ProgressId: newData.ProgressId,
      };
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.post(url, data, config);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async addCase(newData) {
      delete newData.id;
      var url = "http://localhost:5000/case";
      var data = {
        CaseNameId: newData.CaseNameId,
        CaseTypeId: newData.CaseTypeId,
      };
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.post(url, data, config);
        console.log(response);
        return response.data[0].id;
      } catch (error) {
        console.error(error);
      }
    },
    async addMedia(newData) {
      delete newData.id;
      var url = "http://localhost:5000/media";
      var data = {
        MediaInterfaceId: newData.MediaInterfaceId,
        MerkId: newData.MerkId,
      };
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.post(url, data, config);
        console.log(response);
        return response.data[0].id;
      } catch (error) {
        console.error(error);
      }
    },
    async getListProgressType() {
      var url = `http://localhost:5000/progressType/`;
      try {
        const response = await axios.get(url);
        const data = await response;
        this.ProgressType = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListMediaType() {
      var url = `http://localhost:5000/mediaType/`;
      try {
        const response = await axios.get(url);
        const data = await response;
        this.MediaType = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListMerk() {
      var url = `http://localhost:5000/merk/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.Merk = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListMediaInterface() {
      var url = `http://localhost:5000/mediaInterface/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.MediaInterface = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListProgress() {
      var url = `http://localhost:5000/progress/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.Progress = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListStatus() {
      var url = `http://localhost:5000/status/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.Status = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListCaseType() {
      var url = `http://localhost:5000/caseType/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.CaseType = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListCaseName() {
      var url = `http://localhost:5000/caseName/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.CaseName = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListSizeType() {
      var url = `http://localhost:5000/sizeType/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.SizeType = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListUser() {
      var url = `http://localhost:5000/user/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.User = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getListNota() {
      var url = `http://localhost:5000/nota/`;
      try {
        const response = await axios.get(url);
        const data = response;
        this.dataCustomer = await data.data;
        console.log(data.data);

      } catch (error) {
        console.error(error);
      }
    },
    async deleteNotaByID(id) {
      var url = `http://localhost:5000/nota/${id}`;
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.delete(url,config);
        const data = response;

        this.getListNota();
      } catch (error) {
        console.error(error);
      }
    },
    async addNota(newData) {
      var mediaId = await this.addMedia(newData);
      var caseId = await this.addCase(newData);
      
      delete newData.id;
      var url = "http://localhost:5000/nota";

       var data = {
        nota_no: newData.nota_no,
        UserId: newData.UserId,
        size: newData.size,
        SizeTypeId: newData.SizeTypeId,
        MediumId: mediaId.toString(),
        MediaTypeId: newData.MediaTypeId,
        model: newData.model,
        CaseId: caseId.toString(),
        StatusId: newData.StatusId,
        cost: newData.cost,
        ProgressId: newData.ProgressId,
        ProgressTypeId: newData.ProgressTypeId,
        date: newData.date,
        data_priority: newData.data_priority,
      };

      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.post(url, data, config);
        console.log(response);
        await addHistoryProgress(newData,response.id);
        this.getListNota();
      } catch (error) {
        console.error(error);
      }
    },
    async editNota(newData) {
      var mediaId = await this.addMedia(newData);
      var caseId = await this.addCase(newData);
      var url = `http://localhost:5000/nota/${newData.idNota}`
      delete newData.id;
      
      console.log(caseId);
      console.log(mediaId);
      var data = {
        nota_no: newData.nota_no,
        UserId: newData.UserId,
        size: newData.size,
        SizeTypeId: newData.SizeTypeId,
        MediumId: mediaId.toString(),
        model: newData.model,
        CaseId: caseId.toString(),
        StatusId: newData.StatusId,
        cost: newData.cost,
        ProgressId: newData.ProgressId,
        ProgressTypeId: newData.ProgressTypeId,
        date: newData.date,
        data_priority: newData.data_priority,
      };
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      try {
        const response = await axios.put(url, data, config);
        console.log(response);
        await this.addHistoryProgress(newData,response.data.id);
        this.getListNota();
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListNota();
    this.getListUser();
    this.getListCaseType();
    this.getListCaseName();
    this.getListMediaInterface();
    this.getListMerk();
    this.getListProgress();
    this.getListSizeType();
    this.getListStatus();
    this.getListMediaType();
    this.getListProgressType();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">Data Table Nota</h2>
    <div v-if="this.dataCustomer != NULL">
      <TableNota
        :User="this.User"
        :SizeType="this.SizeType"
        :CaseName="this.CaseName"
        :CaseType="this.CaseType"
        :Status="this.Status"
        :Progress="this.Progress"
        :MediaInterface="this.MediaInterface"
        :MediaType="this.MediaType"
        :ProgressType="this.ProgressType"
        :Merk="this.Merk"
        :data="this.dataCustomer"
        @editnota="editNota"
        @addnota="addNota"
        @deletenota="deleteNotaByID"
      ></TableNota>
    </div>

    <!-- <table-nota :data="this.CustomerData"></table-nota> -->
  </div>
</template>

<style scoped></style>
