<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Hero from "@/components/HeroSlide.vue";
import TableUser from "@/components/User/TableUser.vue";
import axios from "axios";
import { mapGetters} from "vuex";

export default {
  props: [],
  components: { Hero, TableUser },
  data() {
    return {
      dataCustomer: [],
    };
  },
  computed: {
    ...mapGetters("auth", {
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    async getListUser() {
      var url = `http://localhost:5000/user/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.dataCustomer = await data.data;
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUserByID(id) {
      var config = {
        headers: {
          'Authorization' : `Bearer ${this.getAccessToken}`
        }
      }
      var url = `http://localhost:5000/user/${id}`
      try {
        const response = await axios.delete(url,config);
        const data = await response;
        console.log(data);
        this.getListUser();
      } catch (error) {
        console.error(error);
      }
    },
    async addUser(newData) {
      delete newData.id
      var url = "http://localhost:5000/user"
      var data = {
        address: newData.Address,
        city: newData.City,
        name: newData.Nama,
        office_phone: newData.OfficePhone,
        contact_person: newData.ContactPerson,
        home_phone: newData.HomePhone,
        Email: newData.Email,
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
        this.getListUser();
        
      } catch (error) {
        console.error(error);
      }
    },
    async editUser(newData) {
      var url = `http://localhost:5000/user/${newData.id}`
      delete newData.id
      var data = {
        
        address: newData.Address,
        city: newData.City,
        name: newData.Nama,
        office_phone: newData.OfficePhone,
        contact_person: newData.ContactPerson,
        home_phone: newData.HomePhone,
        Email: newData.Email,
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
        this.getListUser();
        
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getListUser();
  },
};
</script>

<template>
  <div class="text-black mb-10 mx-20">
    <hero></hero>
    <h2 class="text-5xl text-center text-bold my-3">
      Data Table User
    </h2>
    <div v-if="this.dataCustomer != NULL">
      <TableUser
        :data="this.dataCustomer"
        @edituser="editUser"
        @adduser="addUser"
        @deleteuser="deleteUserByID"
      ></TableUser>
    </div>

    <!-- <table-user :data="this.CustomerData"></table-user> -->
  </div>
</template>

<style scoped></style>
