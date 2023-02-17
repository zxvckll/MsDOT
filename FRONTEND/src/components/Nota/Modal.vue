<script>
import eye from "@/components/eye.vue";
import axios from "axios";

export default {
  props: [
    "show",
    "data",
    "Progress",
    "MediaInterface",
    "User",
    "CaseType",
    "MediaType",
    "CaseName",
    "Status",
    "ProgressType",
    "Merk",
    "SizeType",
    "OperatingSistem",
  ],
  components: { eye },
  computed: {
    warranty: {
      get() {
        if (this.warranty_) {
          return 1;
        } else {
          return 0;
        }
      },
      set(newValue) {
        if (newValue == 1) {
          this.warranty_ = true;
        } else {
          this.warranty_ = false;
        }
      },
    },
  },
  //   nota_no: {
  //     get() {
  //       return !!this.data[0]?.nota_no ? this.data[0].nota_no : this.nota_no_;
  //     },
  //     set(newValue) {
  //       this.nota_no_ = newValue;
  //     },
  //   },
  //   size: {
  //     get() {
  //       return !!this.data[0]?.size ? this.data[0].size : this.size_;
  //     },
  //     set(newValue) {
  //       this.size_ = newValue;
  //     },
  //   },
  //   SizeTypeId: {
  //     get() {
  //       return !!this.data[0]?.SizeTypeId ? this.data[0].SizeTypeId : this.SizeTypeId_;
  //     },
  //     set(newValue) {
  //       this.SizeTypeId_ = newValue;
  //     },
  //   },
  //   MediaTypeId: {
  //     get() {
  //       return !!this.data[0]?.Medium?.MediaInterface?.MediaTypeId
  //         ? this.data[0]?.Medium?.MediaInterface?.MediaTypeId
  //         : this.MediaTypeId_;
  //     },
  //     set(newValue) {
  //       this.MediaTypeId_ = newValue;
  //     },
  //   },
  //   UserEmail: {
  //     get() {
  //       return !!this.User?.Email ? this.User.Email : this.UserEmail_;
  //     },
  //     set(newValue) {
  //       this.UserEmail_ = newValue;
  //     },
  //   },
  //   name: {
  //     get() {
  //       return !!this.User?.name ? this.User.name : this.name_;
  //     },
  //     set(newValue) {
  //       this.name_ = newValue;
  //     },
  //   },
  //   city: {
  //     get() {
  //       return !!this.User?.name ? this.User.name : this.city_;
  //     },
  //     set(newValue) {
  //       this.city_ = newValue;
  //     },
  //   },
  //   office_phone: {
  //     get() {
  //       return !!this.User?.office_phone
  //         ? this.User.office_phone
  //         : this.office_phone_;
  //     },
  //     set(newValue) {
  //       this.office_phone_ = newValue;
  //     },
  //   },
  //   contact_person: {
  //     get() {
  //       return !!this.User?.contact_person
  //         ? this.User.contact_person
  //         : this.contact_person_;
  //     },
  //     set(newValue) {
  //       this.contact_person_ = newValue;
  //     },
  //   },
  //   home_phone: {
  //     get() {
  //       return !!this.User?.home_phone
  //         ? this.User.home_phone
  //         : this.home_phone_;
  //     },
  //     set(newValue) {
  //       this.home_phone_ = newValue;
  //     },
  //   },
  //   address: {
  //     get() {
  //       return !!this.User?.address ? this.User.address : this.address_;
  //     },
  //     set(newValue) {
  //       this.address_ = newValue;
  //     },
  //   },
  //   create_nota: {
  //     get() {
  //       return !!this.data[0]?.createdAt ? this.data[0]?.createdAt : this.create_nota;
  //     },
  //     set(newValue) {
  //       this.create_nota = newValue;
  //     },
  //   },
  //   StatusId: {
  //     get() {
  //       return !!this.data[0]?.StatusId ? this.data[0].StatusId : this.StatusId_;
  //     },
  //     set(newValue) {
  //       this.StatusId_ = newValue;
  //     },
  //   },

  //   MerkId: {
  //     get() {
  //       return !!this.data[0]?.Medium?.MerkId
  //         ? this.data[0].Medium.MerkId
  //         : this.MerkId_;
  //     },
  //     set(newValue) {
  //       this.MerkId_ = newValue;
  //     },
  //   },
  //   SN: {
  //     get() {
  //       return !!this.data[0]?.SN ? this.data[0].SN : this.SN_;
  //     },
  //     set(newValue) {
  //       this.SN_ = newValue;
  //     },
  //   },
  //   model: {
  //     get() {
  //       return !!this.data[0]?.model ? this.data[0].model : this.model_;
  //     },
  //     set(newValue) {
  //       this.model_ = newValue;
  //     },
  //   },
  //   CN: {
  //     get() {
  //       return !!this.data[0]?.CN ? this.data[0].CN : this.CN_;
  //     },
  //     set(newValue) {
  //       this.CN_ = newValue;
  //     },
  //   },
  //   MediaInterfaceId: {
  //     get() {
  //       return !!this.data[0]?.Medium?.MediaInterfaceId
  //         ? this.data[0].Medium.MediaInterfaceId
  //         : this.MediaInterfaceId_;
  //     },
  //     set(newValue) {
  //       this.MediaInterfaceId_ = newValue;
  //     },
  //   },

  //   OperatingSistemId: {
  //     get() {
  //       return !!this.data[0]?.OperatingSistemId
  //         ? this.data[0].OperatingSistemId
  //         : this.OperatingSistemId_;
  //     },
  //     set(newValue) {
  //       this.OperatingSistemId_ = newValue;
  //     },
  //   },

  //   numberOfPartitions: {
  //     get() {
  //       return !!this.data[0]?.numberOfPartitions
  //         ? this.data[0].numberOfPartitions
  //         : this.numberOfPartitions_;
  //     },
  //     set(newValue) {
  //       this.numberOfPartitions_ = newValue;
  //     },
  //   },
  //   damage: {
  //     get() {
  //       return !!this.data[0]?.damage ? this.data[0].damage : this.damage_;
  //     },
  //     set(newValue) {
  //       this.damage_ = newValue;
  //     },
  //   },
  //   data_priority: {
  //     get() {
  //       return !!this.data[0]?.data_priority
  //         ? this.data[0].data_priority
  //         : this.data_priority_;
  //     },
  //     set(newValue) {
  //       this.data_priority_ = newValue;
  //     },
  //   },
  //   ProgressTypeId: {
  //     get() {
  //       return !!this.data[0]?.Progress?.ProgressTypeId
  //         ? this.data[0].Progress.ProgressTypeId
  //         : this.ProgressTypeId_;
  //     },
  //     set(newValue) {
  //       this.ProgressTypeId_ = newValue;
  //     },
  //   },
  //   ProgressId: {
  //     get() {
  //       return !!this.data[0]?.ProgressId ? this.data[0].ProgressId : this.ProgressId_;
  //     },
  //     set(newValue) {
  //       this.ProgressId_ = newValue;
  //     },
  //   },
  //   CaseNameId: {
  //     get() {
  //       return !!this.data[0]?.Case?.CaseNameId
  //         ? this.data[0].Case.CaseNameId
  //         : this.CaseNameId_;
  //     },
  //     set(newValue) {
  //       this.CaseNameId_ = newValue;
  //     },
  //   },
  //   CaseTypeId: {
  //     get() {
  //       return !!this.data[0]?.Case?.CaseTypeId
  //         ? this.data[0].Case.CaseTypeId
  //         : this.CaseTypeId_;
  //     },
  //     set(newValue) {
  //       this.CaseTypeId_ = newValue;
  //     },
  //   },
  //   cost: {
  //     get() {
  //       return !!this.data[0]?.cost ? this.data[0].cost : this.cost_;
  //     },
  //     set(newValue) {
  //       this.cost_ = newValue;
  //     },
  //   },
  // },

  data() {
    return {
      MediaInterfaceFiltered: [],
      MediaInterface: [],
      Progress: [],
      User: null,
      UserEmail_: null,
      isOpen: false,
      isOpen1: false,
      isOpen2: false,

      //cost
      check_dp: "",
      recovery_data: "",
      backup_data: "",
      sent_data: "",
      cancel_recovery: "",

      //date
      create_nota: "",
      wait_confirmation_DP_cost: "",
      wait_check_data: "",
      warranty_data: "",

      //user
      name_: "",
      address_: "",
      city_: "",
      office_phone_: "",
      contact_person_: "",
      home_phone_: "",

      OperatingSistemId_: "",
      nota_no_: "",
      size_: "",
      SizeTypeId_: "",
      MerkId_: "",
      MediaInterfaceId_: "",
      MediaTypeId_: "",
      model_: "",
      StatusId_: "",
      CaseNameId_: "",
      CaseTypeId_: "",
      cost_: "",
      ProgressId_: "",
      ProgressTypeId_: "",
      SN_: "",
      CN_: "",
      damage_: "",
      numberOfPartitions_: "",
      warranty_: "",
      data_priority_: "",
    };
  },

  methods: {
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
    async getListMediaInterfaceFiltered(Id) {
      var url = `http://localhost:5000/mediaInterfaceFiltered/`;
      var data = {
        MediaTypeId: Id,
      };
      var config = {
        headers: {
          Authorization: `Bearer ${this.getAccessToken}`,
        },
      };
      try {
        const response = await axios.post(url, data, config);
        this.MediaInterface = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async getListProgressFiltered(Id) {
      var url = `http://localhost:5000/progressFiltered/`;
      var data = {
        ProgressTypeId: Id,
      };
      var config = {
        headers: {
          Authorization: `Bearer ${this.getAccessToken}`,
        },
      };
      try {
        const response = await axios.post(url, data, config);
        this.Progress = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    filteredMediaInterface() {
      this.getListMediaInterfaceFiltered(this.MediaTypeId_);
    },
    filteredProgress() {
      this.getListProgressFiltered(this.ProgressTypeId_);
    },
    submitForm() {
      var Id = 0;
      if (this.data[0]) {
        Id = this.data[0].id;
      }

      const newData = {
        idNota: Id,
        nota_no: this.nota_no_,
        size: this.size_,
        SizeTypeId: this.SizeTypeId_,
        MerkId: this.MerkId_,
        MediaInterfaceId: this.MediaInterfaceId_,
        MediaTypeId: this.MediaTypeId_,
        model: this.model_,
        StatusId: this.StatusId_,
        CaseNameId: !this.CaseNameId_,
        CaseTypeId: this.CaseTypeId_,
        cost: this.cost_,
        ProgressId: this.ProgressId_,
        ProgressTypeId: this.ProgressTypeId_,
        SN: this.SN_,
        CN: this.CN_,
        damage: this.damage_,
        numberOfPartitions: this.numberOfPartitions_,
        warranty: this.warranty_,
        data_priority: this.data_priority_,
        name: this.name_,
        address: this.address_,
        city: this.city_,
        office_phone: this.office_phone_,
        contact_person: this.contact_person_,
        home_phone: this.home_phone_,
        OperatingSistemId: this.OperatingSistemId_,
        // ID

        //cost
        check_dp: this.check_dp,
        recovery_data: this.recovery_data,
        backup_data: this.backup_data,
        sent_data: this.sent_data,
        cancel_recovery: this.cancel_recovery,
        //date
        create_nota: this.create_nota,
        wait_confirmation_DP_cost: this.wait_confirmation_DP_cost,
        wait_check_data: this.wait_check_data,
        warranty_data: this.warranty_data,
      };
      if (!!this.User) {
        const userId = {
          UserId: this.User.id,
          Email: this.UserEmail_,
        };
        Object.assign(newData, userId);
      } else {
        const userId = {
          UserId: null,
          Email: this.UserEmail_,
        };
        Object.assign(newData, userId);
      }

      if (!this.data[0]) {
        this.$emit("addnota", newData);
      } else {
        const temp = {
          costId: !!this.data[0].Cost?.id ? this.data[0].Cost.id : '',
          dateId: !!this.data[0].Date?.id ? this.data[0].Date.id : '',
        };
        Object.assign(newData, temp);

        this.$emit("editnota", newData);
      }
      this.User = null;
    },
    async getUserByEmail(emailClient) {
      var url = "http://localhost:5000/user/email";
      var data = {
        Email: emailClient,
      };
      var config = {
        headers: {
          Authorization: `Bearer ${this.getAccessToken}`,
        },
      };
      try {
        const response = await axios.post(url, data, config);
        this.User = response.data;
        this.name_ = this.User?.name;
        this.UserEmail_ = this.User?.Email;
        this.address_ = this.User?.address;
        this.city_ = this.User?.city;
        this.office_phone_ = this.User?.office_phone;
        this.contact_person_ = this.User?.contact_person;
        this.home_phone_ = this.User?.home_phone;
        console.log(this.User);
      } catch (error) {
        console.log(error);
      }
    },
    resetUser() {
      this.User = null;
      this.UserEmail_ = null;
      this.name_ = null;
      this.address_ = null;
      this.city_ = null;
      this.office_phone_ = null;
      this.contact_person_ = null;
      this.home_phone_ = null;
    },
    checkUserByEmail() {
      if (!!this.User) {
        this.resetUser();
      } else {
        this.getUserByEmail(this.UserEmail_);
      }
    },
  },
  watch: {
    show(newValue, oldValue) {
      if (newValue == true) {
        if (!!this.data[0]) {
          this.getListProgressFiltered(this.data[0]?.Progress?.ProgressTypeId);
          this.getListMediaInterfaceFiltered(
            this.data[0]?.Medium?.MediaInterface?.MediaTypeId
          );
          this.getUserByEmail(this.data[0]?.User?.Email);
          // this.filteredMediaInterface();
          // this.filteredProgress();
        }
        //COST

        this.check_dp = !!this.data[0]?.Cost?.check_dp
          ? this.data[0]?.Cost.check_dp
          : "";
        this.recovery_data = !!this.data[0]?.Cost?.recovery_data
          ? this.data[0]?.Cost.recovery_data
          : "";
        this.backup_data = !!this.data[0]?.Cost?.backup_data
          ? this.data[0]?.Cost.backup_data
          : "";
        this.sent_data = !!this.data[0]?.Cost?.sent_data
          ? this.data[0]?.Cost.sent_data
          : "";
        this.cancel_recovery = !!this.data[0]?.Cost?.cancel_recovery
          ? this.data[0]?.Cost.cancel_recovery
          : "";

        //DATE
        this.create_nota = !!this.data[0]?.Date?.create_nota
          ? this.data[0]?.Date.create_nota
          : "";
        this.wait_confirmation_DP_cost = !!this.data[0]?.Date?.wait_confirmation_DP_cost
          ? this.data[0]?.Date.wait_confirmation_DP_cost
          : "";
        this.wait_check_data = !!this.data[0]?.Date?.wait_check_data
          ? this.data[0]?.Date.wait_check_data
          : "";
        this.warranty_data = !!this.data[0]?.Date?.warranty_data
          ? this.data[0]?.Date.warranty_data
          : "";

        this.nota_no_ = !!this.data[0]?.nota_no ? this.data[0]?.nota_no : "";
        this.size_ = !!this.data[0]?.size ? this.data[0]?.size : "";
        this.model_ = this.data[0]?.model ? this.data[0]?.model : "";
        this.cost_ = !!this.data[0]?.cost ? this.data[0]?.cost : "";
        this.SN_ = !!this.data[0]?.SN ? this.data[0]?.SN : "";
        this.ProgressId_ = !!this.data[0]?.ProgressId
          ? this.data[0]?.ProgressId
          : "";
        this.CN_ = !!this.data[0]?.CN ? this.data[0]?.CN : "";
        this.damage_ = !!this.data[0]?.damage ? this.data[0]?.damage : "";
        this.numberOfPartitions_ = this.data[0]?.numberOfPartitions
          ? this.data[0]?.numberOfPartitions
          : "";
        this.warranty_ = !!this.data[0]?.warranty ? this.data[0]?.warranty : "";
        this.data_priority_ = !!this.data[0]?.data_priority
          ? this.data[0]?.data_priority
          : "";
        this.CaseNameId_ = !!this.data[0]?.Case?.CaseNameId
          ? this.data[0]?.Case?.CaseNameId
          : "";
        this.CaseTypeId_ = !!this.data[0]?.Case?.CaseTypeId
          ? this.data[0]?.Case?.CaseTypeId
          : "";
        this.ProgressTypeId_ = !!this.data[0]?.Progress?.ProgressTypeId
          ? this.data[0]?.Progress?.ProgressTypeId
          : "";
        this.OperatingSistemId_ = !!this.data[0]?.OperatingSistemId
          ? this.data[0]?.OperatingSistemId
          : "";
        this.SizeTypeId_ = !!this.data[0]?.SizeTypeId
          ? this.data[0]?.SizeTypeId
          : "";
        this.MerkId_ = !!this.data[0]?.Medium?.MerkId
          ? this.data[0]?.Medium.MerkId
          : "";
        this.StatusId_ = !!this.data[0]?.StatusId ? this.data[0]?.StatusId : "";
        this.MediaInterfaceId_ = !!this.data[0]?.Medium?.MediaInterfaceId
          ? this.data[0]?.Medium?.MediaInterfaceId
          : "";
        this.MediaTypeId_ = !!this.data[0]?.Medium?.MediaInterface?.MediaTypeId
          ? this.data[0]?.Medium?.MediaInterface?.MediaTypeId
          : "";
      }
      if (newValue == false) {
        this.resetUser();
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
                {{ this.data[0] ? "Edit Data" : "Add Data" }}
              </h2>
              <img
                src="https://penyelamatdata.com/wp-content/uploads/2017/08/logogerak1.gif"
                alt=""
                class="h-10 mx-auto mb-10 mt-5"
              />
            </header>

            <!-- <form method="POST" action="/products" enctype="multipart/form-data"> -->

            <div class="mb-6">
              <label for="Nota" class="inline-block text-lg mb-2"
                >No Nota</label
              >
              <input
                type="number"
                class="border border-gray-200 rounded p-2 w-full"
                name="Nota"
                v-model="nota_no_"
              />
            </div>

            <div class="mb-6">
              <label for="create_nota" class="inline-block text-lg mb-2"
                >Tanggal</label
              >
              <input
                type="date"
                class="border border-gray-200 rounded p-2 w-full"
                name="create_nota"
                v-model="create_nota"
              />
            </div>

            <div class="mb-6">
              <label for="Status" class="inline-block text-lg mb-2"
                >Prioritas</label
              >
              <div class="flex">
                <select
                  name="Status"
                  class="border border-gray-200 rounded p-2 w-full"
                  v-model="StatusId_"
                >
                  <option value="">~ Select One ~</option>
                  <option
                    v-for="(status, index) in this.Status"
                    v-bind:key="index"
                    :value="status.id"
                  >
                    {{ status.name }}
                  </option>
                </select>
                <eye :url="'/Status'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="Email" class="inline-block text-lg mb-2"
                >Email Client</label
              >
              <div class="flex">
                <input
                  v-if="!this.User"
                  type="text"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="Email"
                  v-model="UserEmail_"
                />

                <button
                  class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600"
                  type="button"
                  @click.prevent="checkUserByEmail()"
                >
                  {{ !this.User ? "Check Client" : "Reset Email" }}
                </button>
                <span class="ml-2 text-center">
                  {{ !!this.User ? "User Ditemukan" : "User Tidak Ditemukan" }}
                </span>
              </div>
              <div class="mx-1 px-2 my-3 border">
                <div class="mb-6">
                  <label for="Nama" class="inline-block text-lg mb-2"
                    >Name</label
                  >
                  <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    name="Nama"
                    v-model="name_"
                  />
                </div>
              </div>

              <div class="mx-1 px-2 my-3 border">
                <div class="mb-6">
                  <label for="address" class="inline-block text-lg mb-2"
                    >Address</label
                  >
                  <input
                    id="address"
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    name="address"
                    v-model="address_"
                  />
                </div>

                <div class="mb-6">
                  <label for="City" class="inline-block text-lg mb-2"
                    >City</label
                  >
                  <input
                    type="text"
                    class="border border-gray-200 rounded p-2 w-full"
                    name="City"
                    v-model="city_"
                  />
                </div>
                <div class="mb-6">
                  <label for="OfficePhone" class="inline-block text-lg mb-2"
                    >Office Phone</label
                  >
                  <input
                    type="number"
                    class="border border-gray-200 rounded p-2 w-full"
                    name="OfficePhone"
                    v-model="office_phone_"
                  />
                </div>
                <div class="mb-6">
                  <label for="ContactPerson" class="inline-block text-lg mb-2"
                    >Contact Person</label
                  >
                  <input
                    type="number"
                    class="border border-gray-200 rounded p-2 w-full"
                    name="ContactPerson"
                    v-model="contact_person_"
                  />
                </div>
                <div class="mb-6">
                  <label for="HomePhone" class="inline-block text-lg mb-2"
                    >Home Phone</label
                  >
                  <input
                    type="number"
                    class="border border-gray-200 rounded p-2 w-full"
                    name="HomePhone"
                    v-model="home_phone_"
                  />
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label for="MediaType" class="inline-block text-lg mb-2"
                >Media Interface</label
              >
              <div class="flex">
                <select
                  name="MediaType"
                  @change="filteredMediaInterface()"
                  class="border border-gray-200 rounded p-2 w-full"
                  v-model="MediaTypeId_"
                >
                  <option value="">~ Select One ~</option>
                  <option
                    v-for="(mediaType, index) in this.MediaType"
                    v-bind:key="index"
                    :value="mediaType.id"
                  >
                    {{ mediaType.name }}
                  </option>
                </select>
                <eye :url="'/MediaType'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="Merk" class="inline-block text-lg mb-2">Merk</label>
              <div class="flex">
                <select
                  name="Merk"
                  class="border border-gray-200 rounded p-2 w-full"
                  v-model="MerkId_"
                >
                  <option value="">~ Select One ~</option>
                  <option
                    v-for="(merk, index) in this.Merk"
                    v-bind:key="index"
                    :value="merk.id"
                  >
                    {{ merk.name }}
                  </option>
                </select>
                <eye :url="'/Merk'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="SN" class="inline-block text-lg mb-2">S/N</label>
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="SN"
                v-model="SN_"
              />
            </div>

            <div class="mb-6">
              <label for="Size" class="inline-block text-lg mb-2">Size</label>
              <input
                type="number"
                class="border border-gray-200 rounded p-2 w-full"
                name="Size"
                v-model="size_"
              />
            </div>
            <div class="mb-6">
              <label for="SizeType" class="inline-block text-lg mb-2"
                >Size Type
              </label>
              <div class="flex">
                <select
                  name="SizeType"
                  class="border border-gray-200 rounded p-2 w-full"
                  v-model="SizeTypeId_"
                >
                  <option value="">~ Select One ~</option>
                  <option
                    v-for="(sizeType, index) in this.SizeType"
                    v-bind:key="index"
                    :value="sizeType.id"
                  >
                    {{ sizeType.name }}
                  </option>
                </select>
                <eye :url="'/SizeType'"> </eye>
              </div>
            </div>
            <div class="mb-6">
              <label for="model" class="inline-block text-lg mb-2">Model</label>
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="model"
                v-model="model_"
              />
            </div>
            <div class="mb-6">
              <label for="CN" class="inline-block text-lg mb-2">C/N</label>
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="CN"
                v-model="CN_"
              />
            </div>

            <div class="mb-6">
              <label for="MediaInterface" class="inline-block text-lg mb-2"
                >Media Type</label
              >
              <div class="flex">
                <select
                  name="MediaInterface"
                  class="border border-gray-200 rounded p-2 w-full"
                  v-model="MediaInterfaceId_"
                >
                  <option value="">~ Select One ~</option>
                  <option
                    v-for="(mediaInterface, index) in this.MediaInterface"
                    v-bind:key="index"
                    :value="mediaInterface.id"
                  >
                    {{ mediaInterface.name }}
                  </option>
                </select>
                <eye :url="'/MediaInterface'"> </eye>
              </div>
            </div>
            <div class="mb-6">
              <p class="inline-block text-lg mb-2">
                Apakah media penyimpanan masih bergaransi?
              </p>
              <div class="flex">
                <label for="ya"
                  ><input
                    id="ya"
                    type="radio"
                    name="warranty"
                    class="inline"
                    v-model="warranty"
                    :value="1"
                  />
                  Ya</label
                >
                <label for="tidak"
                  ><input
                    id="tidak"
                    type="radio"
                    name="warranty"
                    class="inline ml-4"
                    v-model="warranty"
                    :value="0"
                  />
                  Tidak</label
                >
              </div>
            </div>
            <div class="mb-6">
              <label for="OperatingSistem" class="inline-block text-lg mb-2"
                >Operating Sistem</label
              >
              <div class="flex">
                <select
                  v-model="OperatingSistemId_"
                  name="OperatingSistem"
                  class="border border-gray-200 rounded p-2 w-full"
                >
                  <option value="">~ Select One ~</option>
                  <option
                    v-for="(operatingSistem, index) in this.OperatingSistem"
                    v-bind:key="index"
                    :value="operatingSistem.id"
                  >
                    {{ operatingSistem.name }}
                  </option>
                </select>
                <eye :url="'/OperatingSistem'"> </eye>
              </div>
            </div>

            <div class="mb-6">
              <label for="numberOfPartitions" class="inline-block text-lg mb-2"
                >Number Of Partitions</label
              >
              <input
                type="number"
                class="border border-gray-200 rounded p-2 w-full"
                name="numberOfPartitions"
                v-model="numberOfPartitions_"
              />
            </div>

            <div class="mb-6">
              <label for="damage" class="inline-block text-lg mb-2"
                >Damage</label
              >
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="damage"
                v-model="damage_"
              />
            </div>

            <div class="mb-6">
              <label for="data_priority" class="inline-block text-lg mb-2"
                >Data Priority</label
              >
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="data_priority"
                v-model="data_priority_"
              />
            </div>
            <button
              class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600 my-5"
              type="button"
              @click.prevent="isOpen = !isOpen"
            >
              {{ !isOpen ? "Load Progress" : "Hide Progress" }}
            </button>
            <div v-show="isOpen">
              <div class="mb-6">
                <label for="ProgressType" class="inline-block text-lg mb-2"
                  >Progress Type</label
                >
                <div class="flex">
                  <select
                    v-model="ProgressTypeId_"
                    @change="filteredProgress()"
                    name="ProgressType"
                    class="border border-gray-200 rounded p-2 w-full"
                  >
                    <option value="">~ Select One ~</option>
                    <option
                      v-for="(progressType, index) in this.ProgressType"
                      v-bind:key="index"
                      :value="progressType.id"
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
                    v-model="ProgressId_"
                    name="Progress"
                    class="border border-gray-200 rounded p-2 w-full"
                  >
                    <option value="">~ Select One ~</option>
                    <option
                      v-for="(progress, index) in this.Progress"
                      v-bind:key="index"
                      :value="progress.id"
                    >
                      {{ progress.Name }}
                    </option>
                  </select>
                  <eye :url="'/Progress'"> </eye>
                </div>
              </div>

              <div class="mb-6">
                <label for="CaseName" class="inline-block text-lg mb-2"
                  >Case Name
                </label>
                <div class="flex">
                  <select
                    v-model="CaseNameId_"
                    name="CaseName"
                    class="border border-gray-200 rounded p-2 w-full"
                  >
                    <option value="">~ Select One ~</option>
                    <option
                      v-for="(caseName, index) in this.CaseName"
                      v-bind:key="index"
                      :value="caseName.id"
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
                    name="CaseType"
                    class="border border-gray-200 rounded p-2 w-full"
                    v-model="CaseTypeId_"
                  >
                    <option value="">~ Select One ~</option>
                    <option
                      v-for="(caseType, index) in this.CaseType"
                      v-bind:key="index"
                      :value="caseType.id"
                    >
                      {{ caseType.name }}
                    </option>
                  </select>
                  <eye :url="'/CaseType'"> </eye>
                </div>
              </div>
            </div>
            <button
              class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600 my-5"
              type="button"
              @click.prevent="isOpen1 = !isOpen1"
            >
              {{ !isOpen1 ? "Load Date" : "Hide Date" }}
            </button>

            <div v-show="isOpen1">
              <div class="mb-6">
                <label
                  for="wait_confirmation_DP_cost"
                  class="inline-block text-lg mb-2"
                  >Tanggal Konfirmasi Harga DP</label
                >
                <input
                  type="date"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="wait_confirmation_DP_cost"
                  v-model="wait_confirmation_DP_cost"
                />
              </div>

              <div class="mb-6">
                <label for="wait_check_data" class="inline-block text-lg mb-2"
                  >Tanggal tunggu user cek data
                </label>
                <input
                  type="date"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="wait_check_data"
                  v-model="wait_check_data"
                />
              </div>

              <div class="mb-6">
                <label for="warranty_data" class="inline-block text-lg mb-2"
                  >Tanggal garansi data backup</label
                >
                <input
                  type="date"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="warranty_data"
                  v-model="warranty_data"
                />
              </div>
            </div>
            <button
              class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600 my-5"
              type="button"
              @click.prevent="isOpen2 = !isOpen2"
            >
              {{ !isOpen2 ? "Load Cost" : "Hide Cost" }}
            </button>
            <div v-show="isOpen2">
              <div class="mb-6">
                <label for="check_dp" class="inline-block text-lg mb-2"
                  >Biaya Check(DP)</label
                >
                <input
                  type="number"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="check_dp"
                  v-model="check_dp"
                />
              </div>

              <div class="mb-6">
                <label for="recovery_data" class="inline-block text-lg mb-2"
                  >Biaya Data Recovery</label
                >
                <input
                  type="number"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="recovery_data"
                  v-model="recovery_data"
                />
              </div>

              <div class="mb-6">
                <label for="backup_data" class="inline-block text-lg mb-2"
                  >Biaya Backup CD</label
                >
                <input
                  type="number"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="backup_data"
                  v-model="backup_data"
                />
              </div>
              <div class="mb-6">
                <label for="sent_data" class="inline-block text-lg mb-2"
                  >Biaya Kirim</label
                >
                <input
                  type="number"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="sent_data"
                  v-model="sent_data"
                />
              </div>
              <div class="mb-6">
                <label for="cancel_recovery" class="inline-block text-lg mb-2"
                  >Biaya Pembatalan</label
                >
                <input
                  type="number"
                  class="border border-gray-200 rounded p-2 w-full"
                  name="cancel_recovery"
                  v-model="cancel_recovery"
                />
              </div>
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
