<template lang="">
    <div>
        <h2 class="text-2xl">Vos data recentes</h2>
        <div class="flex justify-between items-center my-4">
            <div class="d-content p-2 rounded-md">
                <div class="h-24 px-4 bg-white rounded-md flex items-center justify-center">20 documents ajouter</div>
            </div>
            <button @click="openModal()" class="flex px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Nouveau document
            </button>
        </div>
        <div class="d-content mt-8 p-5 rounded-md">
            <table class="bg-white rounded-md">
                <thead>
                    <tr>
                        <th class="border-collapse">Intitule</th>
                        <th class="">Type document</th>
                        <th>Taille document</th>
                        <th>Nombre de photocopie</th>
                        <th>Date ajout</th>
                        <th>Etat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="id in 5" :key="id">
                        <td>Math</td>
                        <td class="">Control continue</td>
                        <td>220ko</td>
                        <td>60</td>
                        <td>29/04/2022</td>
                        <td class="text-green-300">Imprimee</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="overlay" v-if="modale">
             <li class="close" @click="closeModal()"><i class="fa-solid fa-xmark"></i></li>
            <div class="wrapper">
                <header>Télèverser votre fichier ici</header>
                <form action="#" class="py-4">
                    <!-- <input class="file-input" type="file" name="file" hidden>
                    <i class="fas fa-cloud-upload-alt"></i>
                    <p>Browse File to Upload</p> -->
                    <DropZone @drop.prevent="drop" @change="selectedFile"/>
                </form>
                <section class="progress-area"></section>
                <section class="uploaded-area"></section>
                <div>
                
                    <div class="">
                        <label for="">Intitulé du docs</label>
                        <input type="text" class="focus:outline-none focus:ring 
                        focus:ring-blue-300 focus:ring-opacity-80">
                    </div><br><br>
                    <div class="d-input">
                        <label for="">Nombre de photocopie</label>
                        <input type="text" class="focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    </div><br><br>
                    <fieldset>
                    <legend>Selectionner la coloration</legend>
                
                        <div>
                            <input type="radio" id="nb" name="color" value="noirblanc"
                                checked >
                            <label for="nb">Noir/Blanc</label>
                        </div>
                    
                        <div>
                            <input type="radio" id="color" name="color" value="color">
                            <label for="color">Couleur</label>
                        </div>
                    </fieldset><br>
                    <div class="d-btn">
                        <button class="focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"><i class="fa-solid fa-paper-plane mx-2"></i>Envoyer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DropZone from "../views/DropZone.vue";
export default {
    name: "HomeDashboard",
    components: {
        DropZone
    },
    data: function() {
        return{
            modale: false
        }
    },
    methods: {
        openModal: function() {
            this.modale = true
        },
        closeModal: function() {
            this.modale = false
        }
    }
}
</script>
<style lang="css">
    table{
        width: 100%;
    }
    th, td{
        padding: 12px 6px;
        text-align: left;
    }
    /* .d-card{
        background: #FFFFFF;
        box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
    } */
    .d-content{
        background: rgba(242, 243, 244, 0.7);
        backdrop-filter: blur(40px);
    }

    ::selection{
  color: #fff;
  background: #6990F2;
}
.wrapper{
  width: 430px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 7px 7px 12px rgba(0,0,0,0.05);
}
.wrapper header{
  color: #6990F2;
  font-size: 27px;
  font-weight: 600;
  text-align: center;
}
/* .wrapper form{
  height: 167px;
  display: flex;
  cursor: pointer;
  margin: 30px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  border: 2px dashed #6990F2;
} */
form :where(i, p){
  color: #6990F2;
}
form i{
  font-size: 50px;
}
form p{
  margin-top: 15px;
  font-size: 16px;
}

section .row{
  margin-bottom: 10px;
  background: #E9F0FF;
  list-style: none;
  padding: 15px 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
section .row i{
  color: #6990F2;
  font-size: 30px;
}
section .details span{
  font-size: 14px;
}
.progress-area .row .content{
  width: 100%;
  margin-left: 15px;
}
.progress-area .details{
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  justify-content: space-between;
}
.progress-area .content .progress-bar{
  height: 6px;
  width: 100%;
  margin-bottom: 4px;
  background: #fff;
  border-radius: 30px;
}
.content .progress-bar .progress{
  height: 100%;
  width: 0%;
  background: #6990F2;
  border-radius: inherit;
}
.uploaded-area{
  max-height: 232px;
  overflow-y: scroll;
}
.uploaded-area.onprogress{
  max-height: 150px;
}
.uploaded-area::-webkit-scrollbar{
  width: 0px;
}
.uploaded-area .row .content{
  display: flex;
  align-items: center;
}
.uploaded-area .row .details{
  display: flex;
  margin-left: 15px;
  flex-direction: column;
}
.uploaded-area .row .details .size{
  color: #404040;
  font-size: 11px;
}
.uploaded-area i.fa-check{
  font-size: 16px;
}

.d-input{
  width: 100%;
  position: relative;
  display: inline-block;
}
.d-input input{
  height: 45px;
  width: 100%;
  outline: none;
  border: 1px solid #6990F2;
  border-radius: 4px;
  padding: 0 8px;
}

.d-input label{
  padding:  2px;
  position: absolute;
  top: -30%;
  left: 2%;
  background-color: #fff;
}

fieldset{
  padding: 0 8px;
  border-radius: 4px;
  border: 1px solid #6990F2;
}

.d-btn button{
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 4px;
  background-color: #6990F2;
  color: #fff;
  font-size: 18px;
}

li{
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #fff;
  list-style: none;
  position: absolute;
  top: 2%;
  left: 95%;
  cursor: pointer;
}

.overlay{
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
    background: rgba(115, 182, 248, 0.397);
    backdrop-filter: blur(20px);
    transition: .5s all ease-in-out;
    animation: cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>