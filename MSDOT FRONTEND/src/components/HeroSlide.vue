<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  props: [],
  components: {},
  data() {
    return {
      imageSlide: [
        "https://www.shutterstock.com/image-photo/super-wide-panorama-new-york-260nw-525241378.jpg",
        "https://www.shutterstock.com/image-photo/wide-panorama-image-new-york-260nw-1740358448.jpg",
        "https://www.shutterstock.com/image-photo/new-york-city-december-5-260nw-1922039174.jpg",
        "https://thumbs.dreamstime.com/z/tall-buildings-manhattan-new-york-city-wide-angle-view-tall-buildings-manhattan-new-york-city-126824611.jpg",
        "https://www.shutterstock.com/image-photo/manhattan-skyline-new-york-city-260nw-285060905.jpg",
      ],
    };
  },
  methods: {
    nextRight () {
      this.imageSlide.push(this.imageSlide.shift());
    },
    nextLeft () {
      this.imageSlide.unshift(this.imageSlide.pop());
    }
  },
};
</script>

<template>
  <div class="h-max-screen w-max-screen">
    <div class="text-gray-700 relative mx-auto w-fit">
      <img
        class="w-min-72"
        :src="this.imageSlide[0]"
        alt=""
      />
      <button @click="nextRight()" class="absolute right-2 top-1/2 bottom-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 border-2 rounded"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button @click="nextLeft()" class="absolute left-2 top-1/2 bottom-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10 border-2 text-black rounded"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
