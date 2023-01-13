<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import ModalDelete from "@/components/ModalDelete.vue";
import ModalHistoryProgress from "@/components/HistoryProgress/ModalHistoryProgress.vue";

export default {
  props: ["data", "Progress", "ProgressType", "Nota"],
  components: { ModalHistoryProgress, ModalDelete },
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
    deleteHistoryProgress(id) {
      this.$emit("deletehistoryProgress", id);
      this.showDeleteModal = false;
    },
    editHistoryProgress(newData) {
      console.log(newData);
      this.$emit("edithistoryProgress", newData);
      this.showModal = false;
    },
    addHistoryProgress(newData) {
      console.log(newData);
      this.$emit("addhistoryProgress", newData);
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
          <th class="pt-2 pr-10">No Nota</th>
          <th class="pt-2 pr-10">Name</th>
          <th class="pt-2 pr-10">Progress</th>
          <th class="pt-2 pr-10">Progress Type</th>
          <th class="pt-2 pr-10">Date</th>
          <th class="pt-2 pr-10">createdAt</th>
          <th class="pt-2 pr-10">updatedAt</th>
          <th class="pt-2 pr-10">ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(datta, index) in this.data"
          v-bind:key="index"
          class="border"
        >
          <td>{{ datta.Notum.nota_no ? datta.Notum.nota_no : "" }}</td>
          <td>{{ datta.Notum.User.name ? datta.Notum.User.name : "" }}</td>
          <td>{{ datta.Progress.Name ? datta.Progress.Name : "" }}</td>
          <td>
            {{
              datta.Progress.ProgressType.name
                ? datta.Progress.ProgressType.name
                : ""
            }}
          </td>

          <td>{{ datta.deadline ? datta.deadline.substring(0, 10) : "" }}</td>
          <td>{{ datta.createdAt ? datta.createdAt.substring(0, 10) : "" }}</td>
          <td>{{ datta.updatedAt ? datta.updatedAt.substring(0, 10) : "" }}</td>

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
              <ModalHistoryProgress
                :Progress="this.Progress"
                :ProgressType="this.ProgressType"
                :Nota="this.Nota"
                :data="!this.selectedData ? 'null' : this.selectedData"
                :show="showModal"
                @close="showModal = false"
                @edithistoryProgress="editHistoryProgress"
                @addhistoryProgress="addHistoryProgress"
              >
              </ModalHistoryProgress>
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
                @deleteprogress="deleteHistoryProgress"
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
