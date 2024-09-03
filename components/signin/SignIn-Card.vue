<template>
  <div >
    <div class="flex flex-col  gap-5 sm:mt-0  p-4 bg-sky-950 bg-opacity-70 shadow-sm shadow-gray-300 rounded-xl
      sm:mx-0 mx-5
">
      <div class="flex items-center justify-center p-2
         ">
        <NuxtImg src="/nt.webp" class="w-[30rem] "/>
      </div>
      <div class="flex items-center  mt-10 justify-center flex-col  ">
        <!--    input    -->
        <label class=" w-96   relative ">
          <div
              class="label mt  badge  rounded absolute top-[-35px]  bg-gradient-to-t from-lime-700 to-lime-500
               border-none shadow-md shadow-black   p-4 ">
            <span class="  font-bold text-md text-white ">What is your username ?</span>
          </div>
          <input type="text" placeholder="username"
                 class="input  text-black input-bordered border-none shadow-md shadow-black   w-full bg-white placeholder:text-sm "/>
        </label>
        <!--    input    -->
        <label class=" w-96  mt-16 relative ">
          <div
              class="label  badge  rounded absolute top-[-35px]  bg-gradient-to-t from-lime-700 to-lime-500
               border-none shadow-md shadow-black   p-4 ">
            <span class="  font-bold text-md text-white ">What is your password ?</span>
          </div>
          <input type="password" placeholder="password"
                 class="input  text-black input-bordered border-none  shadow-md shadow-black  w-full bg-white placeholder:text-sm "/>
        </label>
        <NuxtLink href="/dashboard" class=" mt-5 w-96 btn text-white border-none
          bg-blue-600 hover:bg-blue-400
          ">
          <span class="  font-bold text-xl text-white ">Sign In</span>
        </NuxtLink>
      </div>
      <div class="flex items-center justify-center gap-2">
        <span class="loading text-red-500 loading-dots loading-lg"></span>
        <span class="loading text-yellow-400 loading-dots loading-lg"></span>
        <span class="loading text-lime-400 loading-dots loading-lg"></span>
      </div>
      <div class=" pb-5 text-center text-balance  flex flex-col gap-5   ">
        <h1 class="text-4xl text-white font-bold">Modern Enterprise Gateway</h1>
        <span
            class="text-[14px] text-white ">The network management system (TR069) by National Telecom (NT) for SAMART</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>