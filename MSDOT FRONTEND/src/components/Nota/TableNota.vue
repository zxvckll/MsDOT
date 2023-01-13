<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import ModalDelete from "@/components/ModalDelete.vue";
import ModalNota from "@/components/Nota/ModalNota.vue";
import { mapGetters } from "vuex";
export default {
  props: [
    "data",
    "User",
    "SizeType",
    "CaseName",
    "CaseType",
    "Status",
    "Progress",
    "ProgressType",
    "MediaInterface",
    "Merk",
    "MediaType",
  ],
  components: { ModalNota, ModalDelete },
  computed: {
    ...mapGetters("auth", {
      getterLoginStatus: "getLoginStatus",
    }),
  },
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
        document.body.classList.add("modal-open");
        this.selectedData = {};
      } else {
        this.selectedData = this.data.filter((data) => data.id == id);
        this.showModal = true;  
        document.body.classList.add("modal-open");
      }
    },
    closeModal() {
      this.showModal = false
      document.body.classList.remove("modal-open");
      
    },
    openDeleteModal() {
      let id = event.srcElement.id;
      console.log(id);
      this.selectedData = this.data.filter((data) => data.id == id);
      this.showDeleteModal = true;
    },
    deleteNota(id) {
      this.$emit("deletenota", id);
      this.showDeleteModal = false;
    },
    editNota(newData) {
      console.log(newData);
      this.$emit("editnota", newData);
      this.showModal = false;
    },
    addNota(newData) {
      console.log(newData);
      this.$emit("addnota", newData);
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
          <th class="pt-2 pr-10">Nota no</th>
          <th class="pt-2 pr-10">User</th>
          <th class="pt-2 pr-10">Size</th>
          <th class="pt-2 pr-10">Size Type</th>
          <th class="pt-2 pr-10">Merk</th>
          <th class="pt-2 pr-10">Media Interface</th>
          <th class="pt-2 pr-10">Media Type</th>
          <th class="pt-2 pr-10">Model</th>
          <th class="pt-2 pr-10">Case Name</th>
          <th class="pt-2 pr-10">Case Type</th>
          <th class="pt-2 pr-10">Status</th>
          <th class="pt-2 pr-10"
            v-if="this.getterLoginStatus"
          >Cost</th>
          <th class="pt-2 pr-10">Progress Name</th>
          <th class="pt-2 pr-10">Progress Type</th>
          <th class="pt-2 pr-10">Date</th>
          <th class="pt-2 pr-10"
          v-if="this.getterLoginStatus"
          >Priority Data</th>
          <th class="pt-2 pr-10"
            v-if="this.getterLoginStatus"
          >ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(datta, index) in this.data"
          v-bind:key="index"
          class="border"
        >
          <td>{{ datta.nota_no ? datta.nota_no : "" }}</td>
          <td>{{ datta.User.name ? datta.User.name : "" }}</td>
          <td>{{ datta.size ? datta.size : "" }}</td>
          <td>{{ datta.SizeType.name ? datta.SizeType.name : "" }}</td>
          <td>{{ datta.Medium.Merk.name ? datta.Medium.Merk.name : "" }}</td>
          <td>
            {{
              datta.Medium.MediaInterface.name
                ? datta.Medium.MediaInterface.name
                : ""
            }}
          </td>
          <td>
            {{
              datta.Medium.MediaInterface.MediaType.name
                ? datta.Medium.MediaInterface.MediaType.name
                : ""
            }}
          </td>
          <td>{{ datta.model ? datta.model : "" }}</td>
          <td>
            {{ datta.Case.CaseName.name ? datta.Case.CaseName.name : "" }}
          </td>
          <td>
            {{ datta.Case.CaseType.name ? datta.Case.CaseType.name : "" }}
          </td>
          <td>{{ datta.Status.name ? datta.Status.name : "" }}</td>
          <td v-if="this.getterLoginStatus">{{ datta.cost ? datta.cost : "" }}</td>
          <td>{{ datta.Progress.Name ? datta.Progress.Name : "" }}</td>
          <td>
            {{
              datta.Progress.ProgressType.name
                ? datta.Progress.ProgressType.name
                : ""
            }}
          </td>
          <td>{{ datta.date ? datta.date.substring(0, 10) : "" }}</td>
          <td v-if="this.getterLoginStatus">{{ datta.data_priority ? datta.data_priority : "" }}</td>

          <td class="flex items-center justify-center" v-if="this.getterLoginStatus">
            <button
              class="bg-green-400 text-black rounded py-2 px-4 hover:bg-green-600"
              :id="datta.id"
              @click="openModal()"
            >
              Edit
            </button>
            <Teleport to="#Modal">
              <!-- use the modal component, pass in the prop -->
              <ModalNota
                :User="this.User"
                :SizeType="this.SizeType"
                :CaseName="this.CaseName"
                :CaseType="this.CaseType"
                :Status="this.Status"
                :Progress="this.Progress"
                :MediaInterface="this.MediaInterface"
                :MediaType="this.MediaType"
                :Merk="this.Merk"
                :ProgressType="this.ProgressType"
                :data="!this.selectedData ? 'null' :this.selectedData"
                :show="showModal"
                @close="closeModal()"
                @editnota="editNota"
                @addnota="addNota"
              >
              </ModalNota>
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
                @deleteprogress="deleteNota"
              >
              </ModalDelete>
            </Teleport>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center my-10"
    v-if="this.getterLoginStatus"
    >
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
