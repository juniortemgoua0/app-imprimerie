<template lang="html">
    <div>
        <h2 class="text-2xl">Liste de fichiers importees</h2>
        <div class="d-content my-16 p-5 rounded-md">
            <table class="bg-white rounded-md">
                <thead>
                    <tr>
                        <th class="border-collapse">Nom Titulaire</th>
                        <th class="">Libellé document</th>
                        <th>Quanté docs</th>
                        <th>Date Impression</th>
                        <th>Etat</th>
                        <th>Montans</th>
                        <th>
                             info<i class="fa-solid fa-circle-info text-xl px-2 text-blue-500"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="id in 7" :key="id">
                        <td class="flex items-center">
                            <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
                            Fomekong
                        </td>
                        <td class="">Control continue</td>
                        <td>60 <i class="fa-solid fa-list-ol text-yellow-400"></i></td>
                        <td>29/04/2022</td>
                        <td class="text-green-300">Imprimee</td>
                        <td class="flex gap-1">
                            <p class="text-gray-500 flex">
                                <span>300fca</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </p>
                        </td>
                        <td>
                            <button class="btn bg-blue-300 p-1 rounded-lg text-gray-600
                             focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                savoir
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import {ref} from 'vue';
export default {
    setup(){
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
<style lang="">
    
</style>