<template lang="html">
  <div>
    <div class="bg-white dark:bg-gray-900">
      <div class="flex justify-center h-screen">
        <div class="hidden bg-cover lg:block lg:w-2/3"
             style="background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
          <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-4xl md:text-6xl font-bold text-white">Bievenue sur AIE</h2>

              <p class="max-w-xl mt-3 text-gray-300">Votre application vous permettant de réaliser vos impressions sans
                toute fois vous deplacer.
                Ainsi vous avez un contact direct avec votre service d'imprimerie de la ou vous etes.</p>
            </div>
          </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="text-center">
              <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">AIE</h2>

              <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
            </div>

            <div class="mt-8">
              <form>
                <div class="relative inline-block w-full">
                  <label for="email"
                         class="absolute -top-1 left-2 bg-white block mb-2 text-sm text-gray-600 dark:text-gray-200">Email
                    Address</label>
                  <input type="email" name="email" id="email" placeholder="example@example.com" v-model="data.email"
                         class="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                </div>

                <div class="mt-6 relative inline-block w-full">
                  <div class="flex justify-between mb-2">
                    <label for="password"
                           class="absolute -top-1 left-2 bg-white text-sm text-gray-600 dark:text-gray-200">Password</label>
                  </div>

                  <input type="password" name="password" id="password" placeholder="Your Password"
                         v-model="data.password"
                         class="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"/>
                  <div class="my-2">
                    <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot
                      password?</a>
                  </div>
                </div>

                <div class="mt-2">
                </div>

              </form>

              <!--                  <router-link to="/DashBoard">-->
              <button
                  @click="onsubmit()"
                  style="display: flex; justify-content: center; align-items: center "
                  class="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <div class="lds-facebook" v-if="load">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div v-else>Sign in</div>
              </button>
              <!--                  </router-link>-->

              <p class="mt-6 text-sm text-center text-gray-400">Don't have an account yet?
                <a href="#"
                   class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign
                  up</a>.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
// import axios from 'axios'
// import {computed} from "vue";

export default {
  data() {
    return {
      data: {
        email: '',
        password: ''
      },
      load: false
    }
  },
  // provide(){
  //   return {
  //     user: computed(()=> this.data)
  //   }
  // },
  // mounted() {
  // },
  // methods: {
  //   async onsubmit() {
  //     this.load = true
  //     await axios.post('http://localhost:3000/auth/signin', this.data)
  //         .then((response) => {
  //           console.log(response.data)
  //           this.load = false
  //           this.$router.push("/DashBoard/" + response.data._id)
  //         }).catch(() => {
  //           this.load = false
  //         })
  //   }
  // }
}
</script>
<style lang="css">
.lds-facebook {
  display: flex;
  align-items: center;
  position: relative;
  width: 80px;
  height: 30px;
}

.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}

.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}

.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}

.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}

@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 30px;
  }
  50%, 100% {
    top: 24px;
    height: 16px;
  }
}

</style>