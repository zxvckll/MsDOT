<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import ModalDelete from '@/components/ModalDelete.vue';
import ModalCaseType from '@/components/CaseType/ModalCaseType.vue';

export default {
  props: ["data"],
  components: {ModalCaseType,ModalDelete},
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
      if (id == "lol" ) {
        this.showModal = true;
        this.selectedData = {};
        
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
    deleteCaseType(id) {
      this.$emit('deletecaseType', id );
      this.showDeleteModal = false;
    },
    editCaseType (newData) {
      console.log(newData);
      this.$emit('editcaseType', newData );
      this.showModal = false;
    },
    addCaseType (newData) {
      console.log(newData);
      this.$emit('addcaseType',newData);
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
  
          <th class="pt-2 pr-10">CaseType</th>
          <th class="pt-2 pr-10">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(datta, index) in this.data"
          v-bind:key="index"
          class="border"  
        >
      
          <td>{{ datta.name ? datta.name : '' }}</td>

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
              <ModalCaseType
               :data="!this.selectedData ? 'null' :this.selectedData"
                :show="showModal"
                @close="showModal = false"
                @editcaseType="editCaseType"
                @addcaseType="addCaseType"
              >
              </ModalCaseType>
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
                @deleteprogress="deleteCaseType"
                
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
        class=" bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-700 hover:text-white">Add New Data</button>
    </div>
  </div>
</template>

<style scoped></style>
