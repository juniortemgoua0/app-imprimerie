<template lang="html">
    <div>
        <!-- header -->
                <div class="bg-white shadow px-2 py-4">
                    <nav class="flex justify-between">
                        <button class="text-blue-200 d-btn" @click="showSideBar = !showSideBar">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <div class="flex items-center border-2 rounded-md px-2 w-72 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            <input type="text" id="search" class=" outline-none h-11" placeholder="search...."/>
                            <button class="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            </button>
                        </div>
                        <div class="flex gap-6">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <span class="absolute top-6 right-20 flex">
                                    <span class="h-3 w-3 rounded-full bg-green-400"></span>
                                    <span class="animate-ping absolute h-3 w-3 text-sm text-gray-200 bg-green-400 rounded-full flex items-center justify-center"></span>
                                </span>
                            </button>
                            <button class="h-12 w-12 bg-indigo-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300  text-white rounded-full flex justify-center items-center">
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            </button>
                        </div>
                    </nav>
                </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
   @media screen and (min-width: 768px) {
        .d-btn{
            display: none;
        }
    }
    input{
        width:100%;
    } 
</style>