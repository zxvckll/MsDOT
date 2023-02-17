<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import ModalDelete from '@/components/ModalDelete.vue';
import AddModal from "./AddModal.vue";
import EditModal from "./EditModal.vue";

export default {
  props: ["data","DataMediaInterface","DataMediaType"],
  components: {AddModal,ModalDelete,EditModal},
  data() {
    return {
      showAddModal: false,
      showEditModal: false,
      showDeleteModal: false,
      lol: "lol",
      selectedData: {},
    };
  },
  methods: {
    openEditModal() {
      let id = event.srcElement.id;
      this.selectedData = this.data.filter((data) => data.id == id);
      this.showEditModal = true;
    },
    openAddModal() {
      this.showAddModal = true;
      this.selectedData = {};
    },
    closeModal() {
      this.showAddModal = false;
      this.showEditModal = false;
    },
    openDeleteModal() {
      let id = event.srcElement.id;
      console.log(id);
      this.selectedData = this.data.filter((data) => data.id == id);
      this.showDeleteModal = true;
    },
    deleteMediaInterface(id) {
    
      this.$emit("deletemediaInterface", id);
      this.showDeleteModal = false;
    },
    editMediaInterface(newData) {
      console.log(newData);
      this.$emit("editmediaInterface", newData);
      this.closeModal();
    },
    addMediaInterface(newData) {
      console.log(newData);
      this.$emit("addmediaInterface", newData);
      this.closeModal();
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
  
          <th class="pt-2 pr-10">Media Interface</th>
          <th class="pt-2 pr-10">Media Type</th>
          <th class="pt-2 pr-10">ACTION </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(datta, index) in this.data"
          v-bind:key="index"
          class="border"  
        >
      
          <td>{{ datta.name ? datta.name : '' }}</td>
          <td>{{ datta.MediaType?.name ? datta.MediaType.name : '' }}</td>

          <td class="flex items-center justify-center">
            <button
              class="bg-green-400 text-black rounded py-2 px-4 hover:bg-green-600"
              :id="datta.id"
              @click="openEditModal()"
            >
              Edit
            </button>
            <Teleport to="#Modal">
              <!-- use the modal component, pass in the prop -->
              <EditModal
                :data="!this.selectedData ? 'null' : this.selectedData"
                :show="showEditModal"
                @close="closeModal"
                @editmediaInterface="editMediaInterface"
                @addmediaInterface="addMediaInterface"
                :MediaType="this.DataMediaType"
              >
              </EditModal>
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
                @deleteprogress="deleteMediaInterface"
              >
              </ModalDelete>
            </Teleport>
          </td>
         
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center my-10">
      <button
        @click="openAddModal()"
        :id="lol"
        class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-700 hover:text-white"
      >
        Add New Data 
      </button>
      <Teleport to="#Modal">
        <!-- use the modal component, pass in the prop -->
        <AddModal
          :data="!this.selectedData ? 'null' : this.selectedData"
          :show="showAddModal"
          @close="closeModal"
          @editmediaInterface="editMediaInterface"
          @addmediaInterface="addMediaInterface"
          :MediaType="this.DataMediaType"
        >
        </AddModal>
      </Teleport>
    </div>

  </div>
</template>

<style scoped></style>
