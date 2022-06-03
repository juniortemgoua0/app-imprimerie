<template lang="">
    <div class="mx-12" > 
        <div class="overlay-dialog transition ease-in-out delay-150 -translate-y-1 hover:scale-110 duration-300" v-if="dialog" @click="closeDialog">
            <div class="bg-white flex items-center justify-center p-8 rounded-md modal-dialog ">
                <div>
                    <p class="text-center"><i class="fa-solid fa-circle-exclamation text-red-400 fa-2x"></i></p>
                    <h2 class="text-2xl">Voulez vous vraiment Supprimer</h2>
                    <div class="flex justify-center py-4 gap-8 text-white">
                        <button class="bg-blue-500 rounded-sm px-4 py-2 focus:outline-none focus:ring focus:ring-r-300 focus:ring-opacity-80" @click="closeDialog">Annuler</button>
                        <button class="px-4 py-2 rounded-sm bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80" @click="closeDialog">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="text-2xl">Liste de fichiers importees</h2>
        <div class="d-content my-16 p-5 rounded-md">
            <table class="bg-white rounded-md">
                <thead>
                    <tr>
                        <th class="border-collapse">Intitule</th>
                        <th class="">Type document</th>
                        <th>Taille document</th>
                        <th>Nombre de photocopie</th>
                        <th>Date ajout</th>
                        <th>Etat</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="id in 7" :key="id">
                        <td>Math</td>
                        <td class="">Control continue</td>
                        <td>220ko</td>
                        <td>60</td>
                        <td>29/04/2022</td>
                        <td class="text-green-300">Imprimee</td>
                        <td class="flex gap-1">
                            <button class="text-blue-300 focus:outline-none focus:ring focus:ring-blue-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button @click="openDialog()" class="text-red-300 focus:outline-none focus:ring focus:ring-red-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return{
            dialog: false
        }
    },
    methods: {
        openDialog: function() {
            this.dialog = true
        },
        closeDialog: function() {
            this.dialog = false
        }
    }
}
</script>
<style lang="css">
    .modal-dialog {
        max-width: 500px;
        height: 200px;
    }
    .overlay-dialog{
    z-index: 5;
    position: fixed;
    top: 0%;
    left: 0%;
    right: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgba(80, 81, 82, 0.342);
    transition: .5s all ease-in-out;
    animation: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>