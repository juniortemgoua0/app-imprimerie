<template lang="html">
  <div class="container-box">
    <h2 class="uppercase text-3xl font-medium py-6 px-32">Evaluer vos statistique de l'annéé <i
        class="fa-solid fa-arrow-trend-up text-green-600"></i></h2>
    <div class="flex justify-center gap-8">
      <div class="p-8 bg-white flex gap-8 justify-between i-card">
        <div class="leading-6">
          <h4 class="text-gray-400">Total imprimé</h4>
          <h2 class="font-bold text-2xl py-3">564</h2>
        </div>
        <div class="text-center">
          <h4 class="text-gray-400">14% incremente</h4>
          <p class="w-14 h-14 rounded-full flex items-center justify-center bg-green-200 m-auto">
            <i class="fa-solid fa-arrow-trend-up text-green-600"></i>
          </p>
        </div>
      </div>
      <div class="p-8 bg-white flex gap-8 justify-between i-card">
        <div class="leading-6">
          <h4 class="text-gray-400">Total Cout</h4>
          <h2 class="font-bold text-2xl py-3">564$</h2>
        </div>
        <div class="text-center">
          <h4 class="text-gray-400">5% incremente</h4>
          <p class="w-14 h-14 rounded-full flex items-center justify-center bg-yellow-200 m-auto">
            <i class="fa-solid fa-money-bill-trend-up text-yellow-600"></i>
          </p>
        </div>
      </div>
      <div class="p-8 bg-white flex gap-8 justify-between i-card">
        <div class="leading-6">
          <h4 class="text-gray-400">Non éffectué</h4>
          <h2 class="font-bold text-2xl py-3">200</h2>
        </div>
        <div class="text-center">
          <h4 class="text-gray-400">2% incremente</h4>
          <p class="w-14 h-14 rounded-full flex items-center justify-center bg-red-200 m-auto">
            <i class="fa-solid fa-arrow-trend-up text-red-600"></i>
          </p>
        </div>
      </div>
      <div class="p-8 bg-white flex gap-8 justify-between i-card">
        <div class="leading-6">
          <h4 class="text-gray-400">Total Annuel</h4>
          <h2 class="font-bold text-2xl py-3">2000$</h2>
        </div>
        <div class="text-center">
          <h4 class="text-gray-400">5% incremente</h4>
          <p class="w-14 h-14 rounded-full flex items-center justify-center bg-green-200 m-auto">
            <i class="fa-solid fa-money-bill-trend-up text-green-600"></i>
          </p>
        </div>
      </div>
    </div>
    <div class="py-6 flex justify-center gap-8">
      <img src="@/assets/img/GroupBg.svg" alt="">
      <div class="bg-white p-4 rounded-md">
        <DropZone @drop.prevent="drop" @change="selectedFile"/>
        <span class="file-info">Nom doc: {{ dropzoneFile.name }}</span><br>
        <input type="text" placeholder="Nom du propriètaire"
               CLASS="w-full py-2 pl-4 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        />
        <button
            class="my-2 w-full text-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Enregister
        </button>
      </div>
    </div>

  </div>
</template>
<script>
import DropZone from "../views/DropZone.vue";

import {ref} from 'vue';

export default {
  components: {
    DropZone,
  },
  setup() {
    let dropzoneFile = ref("");

    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };

    const selectedFile = () => {
      dropzoneFile.value = document.querySelector('.dropzoneFile').files[0];
    };

    return {
      dropzoneFile,
      drop,
      selectedFile
    };
  },
}
</script>
<style lang="css">

.i-card {
  max-width: 350px;
  border-radius: 8px;
}
</style>