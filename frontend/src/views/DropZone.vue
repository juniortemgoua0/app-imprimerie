<template lang="html">
    <div>
       <div class="dropzone border-2 border-blue-500 border-dashed" id="dropzone"
            @dragenter.prevent="toggleActive"
            @dragleave.prevent="toggleActive"
            dragover.prevent
            @drop.prevent="toggleActive"
            :class="{'active-dropzon': active}"
        >
           <div class="dz-message">
               <div class="icon text-center py-4 cursor-pointer">
                   <label for="dropzoneFile" >
                       <i class="fa-solid fa-cloud-upload-alt fa-2x text-blue-400 cursor-pointer"></i>
                   </label>
                   <input type="file" id="dropzoneFile" class="dropzoneFile" multiple />
               </div>
               <div class="text-center">
                   <span>Glissez le fichier ici <br> ou <br> cliquez pour télécharger</span>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
export default {
    name: "DropZone",
    setup() {
        const active = ref(false);

        const toggleActive = () => {
            active.value = !active.value;
        };

        return {
            active,
            toggleActive
        };
    },
};
</script>
<style scoped>
    .dropzone{
        width: 100%;
        padding: 40px;
    }
    input{
        display: none;
    }
    .active-dropzon{
        color: #fff;
        border-color: #fff;
        background-color: dodgerblue;
    }
</style>