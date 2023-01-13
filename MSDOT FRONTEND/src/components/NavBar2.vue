<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <nav class="bg-gray-100 uppercase">
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
                class="h-10"
              />
            </router-link>
          </div>
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1 text-gray-700">
            <router-link to="/" class="py-5 px-4 hover:text-teal-400">
              .
            </router-link>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                ABOUT US
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
              <div class="dropdown-content text-sm">
                <a class="py-1 text-xs" href="#">profile company</a>
                <a class="py-1 text-xs" href="#">contact us</a>
                <a class="py-1 text-xs" href="#">location map</a>
                <a class="py-1 text-xs" href="#">history company</a>
              </div>
            </div>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                DATA RECOVERY
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
                <a class="py-1 text-xs" href="#">procedure</a>
                <a class="py-1 text-xs" href="#">pricelist</a>
                <router-link class="py-1 text-xs" to="/FormDataRecovery"
                  >form data recovery</router-link
                >
                <div class="relative">
                  <a class="py-1 text-xs block" href="#"
                  >customers progres
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
                  <div class="absolute left-full top-0 bg-white">
                    <a class="py-1 text-xs">Sidoarjo</a>
                    <a class="py-1 text-xs">Surabaya</a>
                  </div>
                </a>
                </div>



                <div class="relative">
                  <a class="py-1 text-xs block" href="#">testimonial</a>
                </div>
                <div class="relative">
                  <a class="py-1 text-xs block" href="#">customers comment</a>
                </div>
                
              </div>
            </div>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                TRAINING
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
                <a class="py-1 text-xs" href="#"
                  >hdd & data recovery training</a
                >
                <a class="py-1 text-xs" href="#">form training participants</a>
                <a class="py-1 text-xs" href="#">training participants</a>
              </div>
            </div>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                PRODUCTS
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
                <a class="py-1 text-xs" href="#">software</a>
                <a class="py-1 text-xs" href="#">hardware</a>
              </div>
            </div>
            <div class="dropdown">
              <button
                to="/"
                class="text-sm dropbtn py-2 px-2 hover:text-teal-400"
              >
                EVENTS
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
                <a class="py-1 text-xs" href="#">lottery winner</a>
                <a class="py-1 text-xs" href="#">workshop and seminar</a>
              </div>
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
    <!-- mobile nav -->
    <div
      class="mobile-menu md:hidden block text-center"
      :class="[isActive ? 'hidden' : '']"
    >
      <div class="relative">
        <button class="block py-2 px-4 text-sm hover:bg-gray-200">
          Jadwal Praktek
        </button>
        <!-- <ul class="absolute">
                <li v-for="(menu,index) in this.menus" v-bind:key="index">
                    <h1>{{ menu.title }}</h1> 
                </li>
            </ul> -->
      </div>
      <a href="" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Pendaftaran Pasien</a
      >
      <a href="" class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Data antrian</a
      >
      <a href="" class="block py-2 px-4 text-sm hover:bg-gray-200">Login</a>
      <a
        href=""
        class="block py-2 px-4 text-sm bg-green-400 hover:bg-green-600 hover:text-teal-400 transition duration-300"
        >Signup</a
      >
    </div>
  </nav>
</template>
<style scoped>

</style>
