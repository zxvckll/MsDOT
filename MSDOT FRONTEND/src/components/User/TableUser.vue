<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import ModalDelete from "@/components/ModalDelete.vue";
import ModalUser from "@/components/User/ModalUser.vue";

export default {
  props: ["data"],
  components: { ModalUser, ModalDelete },
  data() {
    return {
      showModal: false,
      deleteModal: false,
      showDeleteModal: false,
      lol: "lol",
      selectedData: {},
    };
  },
  methods: {
    openModal() {
      let id = event.srcElement.id;
      console.log(id);

      if (id == "lol") {
        this.selectedData = {};
        this.showModal = true;
      } else {
        this.selectedData = this.data.filter((data) => data.id == id);
        this.showModal = true;
      }
    },
    openDeleteModal() {
      let id = event.srcElement.id;
      console.log(id);
      this.selectedData = this.data.filter((data) => data.id == id);
      this.showDeleteModal = true;
    },
    deleteUser(id) {
      this.$emit("deleteuser", id);
      this.showDeleteModal = false;
    },
    editUser(newData) {
      this.$emit("edituser", newData);
      this.showModal = false;
    },
    addUser(newData) {
      this.$emit("adduser", newData);
      this.showModal = false;
    },
  },
};
</script>

<template>
  <div class="text-black mx-10">
    <table
      class="border-collapse mx-auto table-auto overflow-hidden shadow-md bg-white"
    >
      <thead>
        <tr class="bg-blue-500 text-center font-bold uppercase">
          <th class="pt-2 pr-10">name</th>
          <th class="pt-2 pr-10">address</th>
          <th class="pt-2 pr-10">city</th>
          <th class="pt-2 pr-10">office phone</th>
          <th class="pt-2 pr-10">contact person</th>
          <th class="pt-2 pr-20">home phone</th>
          <th class="pt-2 pr-10">Email</th>
          <th class="pt-2 pr-10">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(datta, index) in this.data"
          v-bind:key="index"
          class="border"
        >
          <td>{{ datta.name ? datta.name : "" }}</td>
          <td>{{ datta.address ? datta.address : "" }}</td>
          <td>{{ datta.city ? datta.city : "" }}</td>
          <td>{{ datta.office_phone ? datta.office_phone : "" }}</td>
          <td>{{ datta.contact_person ? datta.contact_person : "" }}</td>
          <td>{{ datta.home_phone ? datta.home_phone : "" }}</td>
          <td>{{ datta.Email ? datta.Email : "" }}</td>

          <td class="flex items-center justify-center">
            <button
              class="bg-green-400 text-black rounded py-2 px-4 hover:bg-green-600"
              :id="datta.id"
              @click="openModal()"
            >
              Edit
            </button>
            <Teleport to="#Modal">
              <!-- use the modal component, pass in the prop -->
              <ModalUser
              :data="!this.selectedData ? 'null' :this.selectedData"
                :show="showModal"
                @close="showModal = false"
                @edituser="editUser"
                @adduser="addUser"
              >
              </ModalUser>
            </Teleport>

            <button
              class="bg-red-400 text-black rounded py-2 px-4 hover:bg-red-600"
              :id="datta.id"
              @click="openDeleteModal()"
            >
              Delete
            </button>
            <Teleport to="#Modal">
              <!-- use the modal component, pass in the prop -->
              <ModalDelete
                :data="selectedData"
                :show="showDeleteModal"
                @close="showDeleteModal = false"
                @deleteprogress="deleteUser"
              >
              </ModalDelete>
            </Teleport>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center my-10">
      <button
        @click="openModal()"
        :id="lol"
        class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-700 hover:text-white"
      >
        Add New Data
      </button>
    </div>
  </div>
</template>

<style scoped></style>
