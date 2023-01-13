<script>
export default {
  props: ["show", "data"],
  methods: {},
  data() {
    return {};
  },
  methods: {
    submitForm() {
      if(this.data[0]){
        var Id = this.data[0].id;
      }
      else {
        var Id = '';
      }
      var newData = {
        id: Id,
        Nama: this.$refs.Nama.value,
        Address: this.$refs.Address.value,
        City: this.$refs.City.value,
        OfficePhone: this.$refs.OfficePhone.value,
        ContactPerson: this.$refs.ContactPerson.value,
        HomePhone: this.$refs.HomePhone.value,
        Email: this.$refs.Email.value,
      };

      if (!this.data[0]) {
        console.log(newData);
        
        this.$emit("adduser", newData);
      }
      else {
        console.log(newData);
      this.$emit("edituser", newData);
      }

    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="mask fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50 text-gray-700">
      <div class="flex items-start justify-center min-h-screen pt-24 text-center">
        <div class="bg-white rounded-lg text-left overflow-hidden shadow-xl p-8 w-1/2">
          <div
            class=""
          >
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
              <label for="Nama" class="inline-block text-lg mb-2">Nama</label>
              <input
                ref="Nama"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="Nama"
                :value="this.data[0] ? this.data[0].name : ''"
              />
            </div>

            <div class="mb-6">
              <label for="Address" class="inline-block text-lg mb-2">Address </label>
              <input
                ref="Address"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="Address"
                :value="this.data[0] ? this.data[0].address : ''"
              />
            </div>
            <div class="mb-6">
              <label for="City" class="inline-block text-lg mb-2">City</label>
              <input
                ref="City"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="City"
                :value="this.data[0] ? this.data[0].city : ''"
              />
            </div>
            <div class="mb-6">
              <label for="OfficePhone" class="inline-block text-lg mb-2">Office Phone</label>
              <input
                ref="OfficePhone"
                type="number"
                class="border border-gray-200 rounded p-2 w-full"
                name="OfficePhone"
                :value="this.data[0] ? this.data[0].office_phone : ''"
              />
            </div>
            <div class="mb-6">
              <label for="ContactPerson" class="inline-block text-lg mb-2">Contact Person</label>
              <input
                ref="ContactPerson"
                type="number"
                class="border border-gray-200 rounded p-2 w-full"
                name="ContactPerson"
                :value="this.data[0] ? this.data[0].contact_person : ''"
              />
            </div>
            <div class="mb-6">
              <label for="HomePhone" class="inline-block text-lg mb-2">Home Phone</label>
              <input
                ref="HomePhone"
                type="number"
                class="border border-gray-200 rounded p-2 w-full"
                name="HomePhone"
                :value="this.data[0] ? this.data[0].home_phone : ''"
              />
            </div>
            <div class="mb-6">
              <label for="Status" class="inline-block text-lg mb-2"
                >Email</label
              >
              <input
                type="text"
                ref="Email"
                class="border border-gray-200 rounded p-2 w-full"
                name="Email"
                :value="this.data[0] ? this.data[0].Email : ''"
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
