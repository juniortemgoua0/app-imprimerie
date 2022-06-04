<template lang="html">
    <div class="d-card-h grid grid-cols-2">
        <diV class="form_card flex justify-center items-center">
            <form class="" >
                <div class="register absolute top-4" v-if="mode == 'login'">Pas de compte ? <a href="#" class="text-blue-600" @click="switchToCreateAccount()">S'inscrire</a></div>
                <div class="register absolute top-4" v-else>Deja un compte ? <a href="#" class="text-blue-600" @click="switchToLogin()">Se Connecter</a></div>
                <h2 class="title text-3xl font-semibold my-3" v-if="mode == 'login'">Connectez-vous sur AIE</h2>
                <h2 class="title text-3xl font-semibold my-3" v-else>Inscrivez-vous sur AIE</h2>
                <p class="my-6">Note that the development build is not optimized.
                To create a production build, run npm run build.</p>
                <div class="alert bg-red-300 px-10 py-3 text-gray-100 text-center">information incorrect</div>
                <div class="alert bg-green-300 px-10 py-3 text-gray-100 text-center">information correct</div>
                <div class="card_input my-4" v-if="mode == 'create'">
                    <input type="text" id="nom" class="form_input"/>
                    <label for="nom" class="form_label" >Votre Nom</label>
                    <i class="fa-solid fa-user absolute top-4 right-2 text-gray-400"></i>
                </div>
                <div class="card_input my-4">
                    <input type="text" id="email" class="form_input"/>
                    <label for="email" class="form_label">Email</label>
                    <i class="fa-solid fa-at absolute top-4 right-2 text-gray-400"></i>
                    
                </div>
                <div class="card_input my-4">
                    <input type="password" id="password" class="form_input"/>
                    <label for="password" class="form_label">Password</label>
                    <i class="fa-solid fa-key absolute top-4 right-2 text-gray-400"></i>
                </div>
                <div class="card_btn my-4 " v-if="mode == 'login'">
                    <router-link to="/DashBoard">
                        <button class="btn bg-blue-600 text-gray-100 text-2xl">Se Connecter</button>
                    </router-link>
                </div>
                <div class="card_btn my-4" v-else>
                    <button class="btn bg-blue-600 text-gray-100 text-2xl">S'inscrire</button>
                </div>
            </form>
        </div>
        <div class="d_card relative inline-block bg-blue-400">
            <img src="@/assets/img/Group6.svg" />
            <div class="d-text absolute top-1/4 mx-11 w-4/5">
                <h1 class="text-gray-50 font-bold text-5xl uppercase">Bienvenue sur votre application de gestion d'impression</h1>
                <ul>
                    <li>A1</li>
                    <li>A2</li>
                    <li>A3</li>
                    <li>A4</li>
                    <li>A5</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AppLogin',
    data: function() {
        return {
            mode: 'login'
        }
    },
    methods: {
        switchToCreateAccount: function() {
            this.mode = 'create';
        },
        switchToLogin: function() {
            this.mode = 'login';
        }
    },
}
</script>
<style scoped>
    .d-card-h{
        height: 100vh;
    }
    form{
        width: 360px;
    }
    .card_input{
        position: relative;
        width: 360px;
        height: 45px;
        transition: all .5s ease;
    }

    .card_btn{
        width: 360px;
    }

    input{
        width: 100%;
        height: 100%;
        padding: 0 12px;
        border: 1px solid black;
        border-radius: 4px;
        outline: none;
        background: none;
        transition: all .5s ease;
    }
    .form_label{
        position: absolute;
        top: -20%;
        left: 6%;
        background: #fff;
    }

    .alert{
        height: 45px;
    }
    button{
        width: 100%;
        height: 50px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        outline: none;
    }
</style>