<script>


export default {
  props: ["show", "data"],
  data() {
    return {};
  },

  methods: {
    submitForm() {
      if (this.data[0]) {
        var Id = this.data[0].id;
      } else {
        var Id = "";
      }
      var newData = {
        id: Id,
        Name: this.$refs.Name.value,
  
      };

      if (!this.data[0]) {
        console.log(newData);

        this.$emit("addData", newData);
      } else {
        console.log(newData);
        this.$emit("editData", newData);
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
              <label for="Name" class="inline-block text-lg mb-2">Nama</label>
              <input
                ref="Name"
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="Name"
                :value="this.data[0] ? this.data[0].name : ''"
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
