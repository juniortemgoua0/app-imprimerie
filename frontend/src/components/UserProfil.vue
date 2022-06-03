<template lang="">
    <div class="py-12"> 
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
            <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>
            
            <form>
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="username">Username</label>
                        <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                        <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="password">Password</label>
                        <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </div>

                    <div>
                        <label class="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                        <input id="passwordConfirmation" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                    </div>
                </div>

                <div class="flex justify-end mt-6">
                    <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                </div>
            </form>
            <div class="d-content mt-8 p-5 rounded-md">
            <table class="bg-white rounded-md">
                <thead>
                    <tr>
                        <th class="border-collapse">Profil</th>
                        <th class="">Noms</th>
                        <th>Matière</th>
                        <th>Type</th>
                        <th>Date ajout</th>
                        <th>Etat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="id in 5" :key="id">
                        <td><img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/></td>
                        <td class="">FomeKong Sandra</td>
                        <td>Developpementweb</td>
                        <td>Enseignant</td>
                        <td>29/04/2022</td>
                        <td class="text-green-300">Imprimee</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </section>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>