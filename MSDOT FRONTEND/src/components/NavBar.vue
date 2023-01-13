<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { mapGetters, mapActions } from "vuex";

export default {
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapGetters("auth", {
      getterLoginStatus: "getLoginStatus",
    }),
  },
  methods: {
    ...mapActions("auth", {
      actionlogout: "logout",
    }),
    logout() {
      this.actionlogout();
    },
  },
};
</script>

<template>
  <nav class="bg-white text-sm border-b text-black">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between">
        <!-- LEFT SIDE -->
        <div class="flex space-x-1">
          <!-- logo -->
          <div>
            <router-link to="/" class="flex items-center mr-3 py-5 px-3">
              <img
                src="https://penyelamatdata.com/wp-content/uploads/2017/08/logogerak1.gif"
                alt=""
                class="h-10 mr-20 pr-10 inline-block"
              />
            </router-link>
          </div>
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <router-link to="/Login" class="py-5 px-4 hover:text-teal-400">
              .
            </router-link>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
                v-if="this.getterLoginStatus"
              >
                List Page
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="inline w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div class="dropdown-content">
                <router-link class="px-1 py-1 text-xs" to="/Case"
                  >Case</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/CaseName"
                  >Case Name</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/CaseType"
                  >Case Type</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/HistoryProgress"
                  >History Progress</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/Media"
                  >Media</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/MediaInterface"
                  >Media Interface</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/MediaType"
                  >Media Type</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/Merk"
                  >Merk</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/Nota"
                  >Nota</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/Progress"
                  >Progress</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/ProgressType"
                  >Progress Type</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/SizeType"
                  >Size Type</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/Status"
                  >Status</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/User"
                  >User</router-link
                >
              </div>
            </div>

            <div class="dropdown">
              <button class="text-sm dropbtn py-2 px-2 hover:text-teal-400">
                About Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="inline w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div class="dropdown-content">
                <router-link class="px-1 py-1 text-xs" to="/ProfilePerusahaan"
                  >Profile Company</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/ContactUs"
                  >Contact Us</router-link
                >
                <router-link
                  class="px-1 hover:text-teal-400 py-1 text-xs"
                  to="/LocationMap"
                  >Location Map</router-link
                >
                <router-link
                  class="px-1 hover:text-teal-400 py-1 text-xs"
                  to="/History"
                  >History Company</router-link
                >
              </div>
            </div>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                Data Recovery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="inline w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div class="dropdown-content">
                <router-link
                  class="px-1 hover:text-teal-400 py-1 text-xs"
                  to="/Procedure"
                  >Procedure</router-link
                >
                <router-link
                  class="px-1 hover:text-teal-400 py-1 text-xs"
                  to="/PriceList"
                  >Pricelist</router-link
                >
                <router-link class="px-1 py-1 text-xs" to="/FormDataRecovery"
                  >Form Data Recovery</router-link
                >
                <div class="menu relative">
                  <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                    >Customers Progres
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-3 h-3 inline"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                  <div class="absolute left-full top-0 absolute hidden submenu">
                    <router-link
                      to="/CustomerProgress/Sidoarjo"
                      class="px-1 hover:text-teal-400 py-1 text-xs"
                      >Sidoarjo (Pusat-Wage)</router-link
                    >
                    <router-link
                      to="/CustomerProgress/Surabaya"
                      class="px-1 hover:text-teal-400 py-1 text-xs"
                      >Surabaya (Cabang-THR IT Mall)</router-link
                    >
                  </div>
                </div>

                <router-link
                  class="px-1 hover:text-teal-400 py-1 text-xs"
                  to="/Testimoni "
                  >Testimonial</router-link
                >
                <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                  >Customers Comment</a
                >
              </div>
            </div>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                Training
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="inline w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div class="dropdown-content">
                <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                  >HDD & Data Recovery Training</a
                >
                <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                  >Form Training Participants</a
                >
                <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                  >Training Participants</a
                >
              </div>
            </div>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="inline w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div class="dropdown-content">
                <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                  >Software</a
                >
                <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                  >Hardware</a
                >
              </div>
            </div>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                Events
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="inline w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div class="dropdown-content">
                <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                  >Lottery Winner</a
                >
                <a class="px-1 hover:text-teal-400 py-1 text-xs" href="#"
                  >Workshop And Seminar</a
                >
              </div>
            </div>
            <div v-if="this.getterLoginStatus">
              <button
                class="ml-10 bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600"
                @click="logout()"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
        <!--Mobile Button  -->
        <div class="md:hidden flex items-center">
          <button class="mobile-menu-button" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- mobile nav
    <div
      class="mobile-menu md:hidden block text-center"
      :class="[isActive ? 'hidden' : '']"
    >
      <div class="relative">
        <button class="block  py-1 px-2 text-sm hover:bg-gray-200">asdas</button>
      </div>
      <a href="" class="block  py-1 px-2 text-sm hover:bg-gray-200">asda</a>
      <a href="" class="block  py-1 px-2 text-sm hover:bg-gray-200">dasd</a>
      <a href="" class="block  py-1 px-2 text-sm hover:bg-gray-200">asdas</a>
    </div> -->
  </nav>
</template>
<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.submenu a {
  min-width: 100px;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.menu:hover .submenu {
  display: block;
}
</style>
