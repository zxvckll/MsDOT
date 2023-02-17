<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  props: [],
  components: {},
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitForm() {
      var newData = {
        Email: this.$refs.Email.value,
        Password: this.$refs.Password.value,
      };
        this.$emit("login", newData);
    },
  },
};
</script>

<template>
  <div
    class="bg-white mx-auto mt-10 w-max h-max text-gray-700 min-h-screen bg-transparent"
  >
    <div
      class="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24 mb-24 border-2 border-black"
    >
      <header class="text-center">
        <h2 class="text-2xl font-bold mb-1">Log in</h2>
        <img
          src="https://penyelamatdata.com/wp-content/uploads/2017/08/logogerak1.gif"
          alt=""
          class="h-10 mx-auto mb-10 mt-5"
          
        />
      </header>
      <!-- <form method="POST" action="/products" enctype="multipart/form-data"> -->
      <div class="mb-6">
        <label for="Email" class="inline-block text-lg mb-2">Email</label>
        <input
          ref="Email"
          type="text"
          class="border border-gray-200 rounded p-2 w-full"
          name="Email"
         
        />
      </div>

      <div class="mb-6">
        <label for="Password" class="inline-block text-lg mb-2">Password</label>
        <input
          ref="Password"
          type="Password"
          class="border border-gray-200 rounded p-2 w-full"
          name="Password"
        />
      </div>

      <div class="mb-6">
        <button
          class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600"
          @click.prevent="submitForm()"
        >
          Log in
          
        </button>

        <button class="text-black ml-4" @click="goBack()">Back</button>
      </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<style scoped></style>
