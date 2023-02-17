<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableNota from "@/components/Nota/Table.vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: [],
  components: { Hero, TableNota },
  data() {
    return {
      dataCustomer: [],
      Progress: [],
      MediaInterface: [],
      User: [],
      CaseType: [],
      Status: [],
      MediaType: [],
      CaseName: [],
      ProgressType: [],
      Merk: [],
      SizeType: [],
      OperatingSistem: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListOperatingSistem() {
      var url = `http://localhost:5000/operatingSistem/`;
      try {
        const response = await axios.get(url);
        const data = await response;
        this.OperatingSistem = await data.data;
        console.log(response);
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
    async getListMediaInterface() {
      var url = `http://localhost:5000/mediaInterface/`;
      try {
        const response = await axios.get(url);
        const data = await response;
        this.MediaInterface = await data.data;
        console.log(data.data);
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
          Authorization: `Bearer ${this.getAccessToken}`,
        },
      };
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
          Authorization: `Bearer ${this.getAccessToken}`,
        },
      };
      try {
        const response = await axios.post(url, data, config);
        console.log(response);
        return response.data[0].id;
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
          Authorization: `Bearer ${this.getAccessToken}`,
        },
      };
      try {
        const response = await axios.delete(url, config);
        const data = response;

        this.getListNota();
      } catch (error) {
        console.error(error);
      }
    },
    async addNota(newData) {
      delete newData.id;
      var url = "http://localhost:5000/nota";
      var data = {
        nota_no: newData.nota_no,
        size: newData.size,
        SizeTypeId: newData.SizeTypeId,
        MerkId: newData.MerkId,
        MediaInterfaceId: newData.MediaInterfaceId,
        MediaTypeId: newData.MediaTypeId,
        model: newData.model,
        StatusId: newData.StatusId,
        CaseNameId: !newData.CaseNameId,
        CaseTypeId: newData.CaseTypeId,
        cost: newData.cost,
        ProgressId: newData.ProgressId,
        ProgressTypeId: newData.ProgressTypeId,
        SN: newData.SN,
        CN: newData.CN,
        damage: newData.damage,
        numberOfPartitions: newData.numberOfPartitions,
        warranty: newData.warranty,
        data_priority: newData.data_priority,
        //USER
        name: newData.name,
        address: newData.address,
        city: newData.city,
        office_phone: newData.office_phone,
        contact_person: newData.contact_person,
        home_phone: newData.home_phone,
        Email: newData.Email,
        UserId: newData.UserId,
        OperatingSistemId: newData.OperatingSistemId,
        //DATE
        create_nota: newData.create_nota,
        wait_confirmation_DP_cost: newData.wait_confirmation_DP_cost,
        wait_check_data: newData.wait_check_data,
        warranty_data: newData.warranty_data,
        //COST
        check_dp: newData.check_dp,
        recovery_data: newData.recovery_data,
        backup_data: newData.backup_data,
        sent_data: newData.sent_data,
        cancel_recovery: newData.cancel_recovery,
      
      };
      console.log(newData);
      console.log(data);
      

      
      var config = {
        headers: {
          Authorization: `Bearer ${this.getAccessToken}`,
        },
      };
      try {
        const response = await axios.post(url, data, config);
        console.log(response);
        this.getListNota();
      } catch (error) {
        console.error(error);
      }
    },
    async editNota(newData) {
      // var mediaId = await this.addMedia(newData);
      // var caseId = await this.addCase(newData);
      var url = `http://localhost:5000/nota/${newData.idNota}`;
      delete newData.id;

      

      var data = {
        //ID
        costId: newData.costId,
        dateId: newData.dateId,

        nota_no: newData.nota_no,
        size: newData.size,
        SizeTypeId: newData.SizeTypeId,
        MerkId: newData.MerkId,
        MediaInterfaceId: newData.MediaInterfaceId,
        MediaTypeId: newData.MediaTypeId,
        model: newData.model,
        StatusId: newData.StatusId,
        CaseNameId: !newData.CaseNameId,
        CaseTypeId: newData.CaseTypeId,
        cost: newData.cost,
        ProgressId: newData.ProgressId,
        ProgressTypeId: newData.ProgressTypeId,
        SN: newData.SN,
        CN: newData.CN,
        damage: newData.damage,
        numberOfPartitions: newData.numberOfPartitions,
        warranty: newData.warranty,
        data_priority: newData.data_priority,
        //USER
        name: newData.name,
        address: newData.address,
        city: newData.city,
        office_phone: newData.office_phone,
        contact_person: newData.contact_person,
        home_phone: newData.home_phone,
        Email: newData.Email,
        UserId: newData.UserId,
        OperatingSistemId: newData.OperatingSistemId,
        //DATE
        create_nota: newData.create_nota,
        wait_confirmation_DP_cost: newData.wait_confirmation_DP_cost,
        wait_check_data: newData.wait_check_data,
        warranty_data: newData.warranty_data,
        //COST
        check_dp: newData.check_dp,
        recovery_data: newData.recovery_data,
        backup_data: newData.backup_data,
        sent_data: newData.sent_data,
        cancel_recovery: newData.cancel_recovery,        //USER
        name: newData.name,
        address: newData.address,
        city: newData.city,
        office_phone: newData.office_phone,
        contact_person: newData.contact_person,
        home_phone: newData.home_phone,
        Email: newData.Email,
        UserId: newData.UserId,
        OperatingSistemId: newData.OperatingSistemId,
        //DATE
        create_nota: newData.create_nota,
        wait_confirmation_DP_cost: newData.wait_confirmation_DP_cost,
        wait_check_data: newData.wait_check_data,
        warranty_data: newData.warranty_data,
        //COST
        check_dp: newData.check_dp,
        recovery_data: newData.recovery_data,
        backup_data: newData.backup_data,
        sent_data: newData.sent_data,
        cancel_recovery: newData.cancel_recovery,
      };
      console.log(data);
      var config = {
        headers: {
          Authorization: `Bearer ${this.getAccessToken}`,
        },
      };
      try {
        const response = await axios.put(url, data, config);
        console.log(response);
        // await this.addHistoryProgress(newData,response.data.id);
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
    this.getListMerk();
    this.getListSizeType();
    this.getListStatus();
    this.getListMediaType();
    this.getListProgressType();
    this.getListOperatingSistem();
    this.getListMediaInterface();
    this.getListProgress();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">Data Table Nota</h2>
    <div v-if="this.dataCustomer != NULL">
      <TableNota
        :data="this.dataCustomer"
        :Progress = "this.Progress"
        :MediaInterface = "this.MediaInterface"
        :User = "this.User"
        :CaseType = "this.CaseType"
        :MediaType = "this.MediaType"
        :CaseName = "this.CaseName"
        :Status = "this.Status"
        :ProgressType = "this.ProgressType"
        :Merk = "this.Merk"
        :SizeType = "this.SizeType"
        :OperatingSistem = "this.OperatingSistem"
        @editnota="editNota"
        @addnota="addNota"
        @deletenota="deleteNotaByID"
      ></TableNota>
    </div>

    <!-- <table-nota :data="this.CustomerData"></table-nota> -->
  </div>
</template>

<style scoped></style>
