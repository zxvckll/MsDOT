<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import ModalDelete from "@/components/ModalDelete.vue";
import ModalProgress from "@/components/Progress/ModalProgress.vue";

export default {
  props: ["data", "dataProgressType"],
  components: { ModalProgress, ModalDelete },
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
    deleteProgress(id) {
      this.$emit("deleteprogress", id);
      this.showDeleteModal = false;
    },
    editProgress(newData) {
      this.$emit("editprogress", newData);
      this.showModal = false;
    },
    addProgress(newData) {
      this.$emit("addprogress", newData);
      this.showModal = false;
    },
  },
};
</script>

<template>
  <!-- {{ this.dataProgressType }} -->
  <!-- {{ this.data }} -->
  <div class="text-black mx-10">
    <table
      class="border-collapse mx-auto table-auto overflow-hidden shadow-md bg-white"
    >
      <thead>
        <tr class="bg-blue-500 text-center font-bold uppercase">
          <th class="pt-2 pr-10">Progress Name</th>
          <th class="pt-2 pr-10">Progress Type</th>
          <th class="pt-2 pr-10">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(datta, index) in this.data"
          v-bind:key="index"
          class="border"
        >
          <td>{{ datta.Name ? datta.Name : "" }}</td>
          <td>{{ datta.ProgressType?.name ? datta.ProgressType.name : "" }}</td>

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
              <ModalProgress
                :ProgressType="this.dataProgressType"
                :data="!this.selectedData ? 'null' : this.selectedData"
                :show="showModal"
                @close="showModal = false"
                @editprogress="editProgress"
                @addprogress="addProgress"
              >
              </ModalProgress>
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
                @deleteprogress="deleteProgress"
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
      <Teleport to="#Modal">
        <!-- use the modal component, pass in the prop -->
        <ModalProgress
          :ProgressType="this.dataProgressType"
          :data="!this.selectedData ? 'null' : this.selectedData"
          :show="showModal"
          @close="showModal = false"
          @editprogress="editProgress"
          @addprogress="addProgress"
        >
        </ModalProgress>
      </Teleport>
    </div>
  </div>
</template>

<style scoped></style>
