<script>
export default {
  props: ["show", "data"],
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask text-gray-700 h-full">
      <div class="modal-wrapper h-screen ">
        <div class="modal-container w-fit mx-auto ">
          <div
            class=" bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24 mb-24"
          >
            <div class="mb-6"><h2>Delete Data</h2></div>
            <div class="mb-6"><p>Are you sure you want delete this data ?</p></div>
            <div class="mb-6">
              <div class="mb-6">
                <button
                  class="bg-red-400 text-black rounded py-2 px-4 hover:bg-red-600"
                  @click="$emit('deleteprogress',this.data[0].id)"
                >
                  Delete
                </button>

                <button class="text-black ml-4 hover:text-gray-500 py-2 px-4" @click="$emit('close')">
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  /* max-height: calc(100vh - 210px); */
  overflow-y: auto;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
