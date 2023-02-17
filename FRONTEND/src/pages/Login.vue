<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FormLogin from "@/components/FormLogin.vue";
import HeroSlide from "@/components/HeroSlide.vue";
import { mapGetters, mapActions } from "vuex";


export default {
  props: [],
  components: {
    FormLogin,
    HeroSlide,
  },
  data() {
    return {
      token : ''
    };
  },
  computed: {
    ...mapGetters("auth", {
      getterLoginStatus: "getLoginStatus",
      getAccessToken: "getAccessToken",
    }),
  },
  methods: {
    logout(){
      this.actionlogout();
    },
    ...mapActions("auth", {
      actionLogin: "login",
      actionlogout: "logout"
    }),
    async login(data) {
      var config = {
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      };

      await this.actionLogin(
        {
          email: data.Email,
          password: data.Password,
        },
        config
      );
      if (this.getterLoginStatus === true) {
        alert("login sucess");
      } else {
        alert("failed to login");
      }
    },
  },
};
</script>

<template>
  <div class="text-black p-10 mb-10 mx-20 w-screen a">
    <FormLogin v-if="!this.getterLoginStatus" @login="login"></FormLogin>
    <P class="text-center text-7xl">You Already Log In</P>
  </div>
</template>

<style scoped></style>
