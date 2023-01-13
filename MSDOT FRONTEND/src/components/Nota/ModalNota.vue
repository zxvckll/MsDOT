<script>
import eye from "@/components/eye.vue";

export default {
  props: [
    "ProgressType",
    "show",
    "data",
    "User",
    "SizeType",
    "CaseName",
    "CaseType",
    "Status",
    "Progress",
    "MediaInterface",
    "User",
    "Merk",
    "MediaType",
  ],
  components: { eye },

  data() {
    return {
      ProgressFiltered: [],
      MediaInterfaceFiltered: [],
      nota_no: "",
    };
  },

  methods: {
    filteredMediaInterface() {
      this.MediaInterfaceFiltered = this.MediaInterface.filter(
        (data) => data.MediaTypeId == this.$refs.MediaType.value
      );
    },
    filteredProgress() {
      this.ProgressFiltered = this.Progress.filter(
        (data) => data.ProgressTypeId == this.$refs.ProgressType.value
      );
    },
    submitForm() {
      var Id = 0;
      if (this.data[0]) {
        Id = this.data[0].id;
      }
      var newData = {
        idNota: Id,
        nota_no: this.$refs.Nota.value,
        UserId: this.$refs.User.value,
        size: this.$refs.Size.value,
        SizeTypeId: this.$refs.SizeType.value,
        MerkId: this.$refs.Merk.value,
        MediaInterfaceId: this.$refs.MediaInterface.value,
        MediaTypeId: this.$refs.MediaType.value,
        model: this.$refs.model.value,
        CaseNameId: this.$refs.CaseName.value,
        CaseTypeId: this.$refs.CaseType.value,
        StatusId: this.$refs.Status.value,
        cost: this.$refs.cost.value,
        ProgressId: this.$refs.Progress.value,
        ProgressTypeId: this.$refs.ProgressType.value,
        date: this.$refs.date.value,
        data_priority: this.$refs.data_priority.value,
      };

      if (!this.data[0]) {
        console.log(newData);

        this.$emit("addnota", newData);
      } else {
        console.log(newData);
        this.$emit("editnota", newData);
      }
    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="mask fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 text-gray-700"
    >
      <div
        class="flex items-start justify-center min-h-screen pt-24 text-center"
      >
        <div
          class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2"
        >
          <div class="">
            <header class="text-center">
              <h2 class="text-2xl font-bold mb-1">
                {{ !this.data[0] ? "Add Data " : "Edit Data " }}
              </h2>
              <img
                src="https://penyelamatdata.com/wp-content/uploads/2017/08/logogerak1.gif"
                alt=""
                class="h-10 mx-auto mb-10 mt-5"
              />
            </header>
            <!-- <form method="POST" action="/products" enctype="multipart/form-data"> -->
            <div class="mb-6">
              <label for="MediaType" class="inline-block text-lg mb-2"
                >Media Type</label
              >
              <div class="flex">
                <select
                  ref="MediaType"
                  name="MediaType"
                  @change.prevent="filteredMediaInterface()"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(mediaType, index) in this.MediaType"
                    v-bind:key="index"
                    :value="mediaType.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].Medium.MediaInterface.MediaTypeId ==
                          MediaType.id
                        ? true
                        : false
                    "
                  >
                    {{ mediaType.name }}
                  </option>
                </select>
                <eye :url="'/MediaType'"> </eye>
              </div>
            </div>
            <div class="mb-6">
              <label for="MediaInterface" class="inline-block text-lg mb-2"
                >Media Interface</label
              >
              <div class="flex">
                <select
                  ref="MediaInterface"
                  name="MediaInterface"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(mediaInterface, index) in this
                      .MediaInterfaceFiltered"
                    v-bind:key="index"
                    :value="mediaInterface.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].Medium.MediaInterfaceId ==
                          MediaInterface.id
                        ? true
                        : false
                    "
                  >
                    {{ mediaInterface.name }}
                  </option>
                  <option
                    v-if="
                      this.MediaInterfaceFiltered.length == 0 &&
                      this.data[0] != null
                    "
                    :value="this.data[0].Medium.MediaInterfaceId"
                    selected="selected"
                  >
                    {{ this.data[0].Medium.MediaInterface.name }}
                  </option>
                </select>
                <eye :url="'/MediaInterface'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="ProgressType" class="inline-block text-lg mb-2"
                >Progress Type</label
              >
              <div class="flex">
                <select
                  ref="ProgressType"
                  @change.prevent="filteredProgress()"
                  name="ProgressType"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(progressType, index) in this.ProgressType"
                    v-bind:key="index"
                    :value="progressType.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].Progress.ProgressTypeId ==
                          ProgressType.id
                        ? true
                        : false
                    "
                  >
                    {{ progressType.name }}
                  </option>
                </select>
                <eye :url="'/ProgressType'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="Progress" class="inline-block text-lg mb-2"
                >Progress</label
              >
              <div class="flex">
                <select
                  ref="Progress"
                  name="Progress"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(progress, index) in this.ProgressFiltered"
                    v-bind:key="index"
                    :value="progress.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].ProgressId == Progress.id
                        ? true
                        : false
                    "
                  >
                    {{ progress.Name }}
                  </option>

                  <option
                    v-if="
                      this.ProgressFiltered.length == 0 && this.data[0] != null
                    "
                    :value="this.data[0].ProgressId"
                    selected="selected"
                  >
                    {{ this.data[0].Progress.Name }}
                  </option>
                </select>
                <eye :url="'/Progress'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="Nota" class="inline-block text-lg mb-2"
                >Nota no</label
              >
              <input
                ref="Nota"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="Nota"
                :value="this.data[0] ? this.data[0].nota_no : ''"
              />
            </div>

            <div class="mb-6">
              <label for="User" class="inline-block text-lg mb-2">User </label>
              <div class="flex">
                <select
                  ref="User"
                  name="User"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(user, index) in this.User"
                    v-bind:key="index"
                    :value="user.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].UserId == user.id
                        ? true
                        : false
                    "
                  >
                    {{
                      !user.Nota[0]
                        ? user.name
                        : `${user.name} - ${user.Nota[0].nota_no}`
                    }}
                  </option>
                </select>
                <eye :url="'/User'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="Size" class="inline-block text-lg mb-2"
                >Size</label
              >
              <input
                ref="Size"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="Size"
                :value="this.data[0] ? this.data[0].size : ''"
              />
            </div>

            <div class="mb-6">
              <label for="SizeType" class="inline-block text-lg mb-2"
                >Size Type
              </label>
              <div class="flex">
                <select
                  ref="SizeType"
                  name="SizeType"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(sizeType, index) in this.SizeType"
                    v-bind:key="index"
                    :value="sizeType.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].SizeTypeId == sizeType.id
                        ? true
                        : false
                    "
                  >
                    {{ sizeType.name }}
                  </option>
                </select>
                <eye :url="'/SizeType'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="Merk" class="inline-block text-lg mb-2">Merk</label>
              <div class="flex">
                <select
                  ref="Merk"
                  name="Merk"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(merk, index) in this.Merk"
                    v-bind:key="index"
                    :value="merk.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].Medium.MerkId == merk.id
                        ? true
                        : false
                    "
                  >
                    {{ merk.name }}
                  </option>
                </select>
                <eye :url="'/Merk'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="model" class="inline-block text-lg mb-2">Model</label>
              <input
                ref="model"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="model"
                :value="this.data[0] ? this.data[0].model : ''"
              />
            </div>

            <div class="mb-6">
              <label for="CaseName" class="inline-block text-lg mb-2"
                >Case Name
              </label>
              <div class="flex">
                <select
                  ref="CaseName"
                  name="CaseName"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(caseName, index) in this.CaseName"
                    v-bind:key="index"
                    :value="caseName.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].Case.CaseNameId == CaseName.id
                        ? true
                        : false
                    "
                  >
                    {{ caseName.name }}
                  </option>
                </select>
                <eye :url="'/CaseName'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="CaseType" class="inline-block text-lg mb-2"
                >Case Type</label
              >
              <div class="flex">
                <select
                  ref="CaseType"
                  name="CaseType"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(caseType, index) in this.CaseType"
                    v-bind:key="index"
                    :value="caseType.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].Case.CaseTypeId == CaseType.id
                        ? true
                        : false
                    "
                  >
                    {{ caseType.name }}
                  </option>
                </select>
                <eye :url="'/CaseType'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="Status" class="inline-block text-lg mb-2"
                >Status</label
              >
              <div class="flex">
                <select
                  ref="Status"
                  name="Status"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option
                    v-for="(status, index) in this.Status"
                    v-bind:key="index"
                    :value="status.id"
                    :selected="
                      !this.data[0]
                        ? false
                        : this.data[0].StatusId == Status.id
                        ? true
                        : false
                    "
                  >
                    {{ status.name }}
                  </option>
                </select>
                <eye :url="'/Status'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="cost" class="inline-block text-lg mb-2">Cost</label>
              <input
                ref="cost"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="cost"
                :value="this.data[0] ? this.data[0].cost : ''"
              />
            </div>

            <div class="mb-6">
              <label for="date" class="inline-block text-lg mb-2">Date</label>
              <input
                ref="date"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="date"
                :value="this.data[0] ? this.data[0].date : ''"
              />
            </div>

            <div class="mb-6">
              <label for="data_priority" class="inline-block text-lg mb-2"
                >Data Priority</label
              >
              <input
                ref="data_priority"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="data_priority"
                :value="this.data[0] ? this.data[0].data_priority : ''"
              />
            </div>

            <div class="mb-6">
              <button
                class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600"
                @click.prevent="submitForm()"
              >
                {{ this.data[0] ? "Edit" : "Tambah" }}
              </button>
              <button class="text-black ml-4" @click="$emit('close')">
                Back
              </button>
            </div>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.mask {
  transition: opacity 0.3s ease;
}
.modal-container {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
