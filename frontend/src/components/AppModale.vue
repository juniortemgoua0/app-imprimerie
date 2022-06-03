<template lang="">
    <div>
        <div class="overlay" v-if="modale">
             <li class="close">X</li>
            <div class="wrapper">
                <header>Télèverser votre fichier ici</header>
                <form action="#">
                    <input class="file-input" type="file" name="file" hidden>
                    <i class="fas fa-cloud-upload-alt"></i>
                    <p>Browse File to Upload</p>
                </form>
                <section class="progress-area"></section>
                <section class="uploaded-area"></section>
                <div>
                    <div class="d-input">
                        <label for="">Intitulé du docs</label>
                        <input type="text" class="focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
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
export default {
    name: "AppModale",
    props: ['revele', 'toggleModale']
}
</script>
<style scoped>
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
.wrapper form{
  height: 167px;
  display: flex;
  cursor: pointer;
  margin: 30px 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  border: 2px dashed #6990F2;
}
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


</style>