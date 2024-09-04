<template>
  <div class="h-full fixed">
    <div v-if="isSidebarVisible"
         class="relative flex  flex-col border-r-2  border-white   h-full text-lg   gap-6 text-white p-5   bg-sky-950  to-sky-700 mr-96 ">
      <!--  toggle  -->
      <div @click="toggleSidebar"
           class="absolute z-30 cursor-pointer text-yellow-400 right-[-18px]  hover:scale-105 transform transition duration-300 ease-in-out hover:text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" >
          <path fill="currentColor"
                d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM11 8.5v7L7 12z"/>
        </svg>
      </div>
      <div class="flex flex-col  gap-5 ">
        <div class=" w-52 flex    hover:scale-105 transform transition duration-300 ease-in-out">
          <NuxtLink href="/signin">
            <NuxtImg src="sidebar-nt.webp" class="rounded-2xl shadow-sm shadow-gray-950 " fill/>
          </NuxtLink>
        </div>
        <NuxtLink href="/dashboard" class="flex items-center   gap-2 bg-yellow-300 hover:bg-yellow-200 px-10 py-3 rounded-xl shadow-sm shadow-gray-950
      text-black font-semibold
      ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm6 0c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm9.32-11.34L12.9 1.45c-.56-.28-1.23-.28-1.79 0L2.68 5.66c-.42.21-.68.64-.68 1.1C2 7.45 2.55 8 3.24 8h17.53C21.45 8 22 7.45 22 6.76c0-.46-.26-.89-.68-1.1zM2 20c0 .55.45 1 1 1h11.4c-.21-.64-.32-1.31-.36-2H3c-.55 0-1 .45-1 1zm17-7.74V11c0-.55-.45-1-1-1s-1 .45-1 1v2.26l2-1zm.55 1.96l-3 1.5c-.34.17-.55.52-.55.9v1.93c0 2.52 1.71 4.88 4 5.45c2.29-.57 4-2.93 4-5.45v-1.93c0-.38-.21-.73-.55-.89l-3-1.5a.986.986 0 0 0-.9-.01zm-.97 6.08l-.8-.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.44.44l1.88-1.85c.29-.29.77-.29 1.06 0c.29.29.29.77 0 1.06l-2.23 2.21a.996.996 0 0 1-1.41 0z"/></svg>
          <h1 class="ml-2">Dashboard</h1>
        </NuxtLink>
        <NuxtLink href="/devices"  class="flex items-center  gap-2 bg-yellow-300 hover:bg-yellow-200 px-10 py-3 rounded-xl shadow-sm shadow-gray-950
    text-black font-semibold
    ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 16 16">
            <g fill="currentColor">
              <path
                  d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0a.5.5 0 1 0 .707-.707a4.5 4.5 0 0 0-6.364 0a.5.5 0 0 0 .707.707Z"/>
              <path
                  d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0a.5.5 0 0 0 .708-.708a2.5 2.5 0 0 0-3.536 0a.5.5 0 0 0 .707.707Z"/>
              <path
                  d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM2.5 11a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm4.5-.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm2.5.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm1.5-.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Z"/>
              <path d="M8.5 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"/>
            </g>
          </svg>
          <h1 class="ml-2">Devices</h1>
        </NuxtLink>
        <NuxtLink href="/config" class="flex items-center  gap-2 bg-yellow-300 hover:bg-yellow-200 px-10 py-3 rounded-xl shadow-sm shadow-gray-950
          text-black font-semibold ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m15.44.59l-3.18 3.18c-.78.78-.78 2.05 0 2.83l1.24 1.24l-.71.71l-1.24-1.25c-.78-.78-2.05-.78-2.83 0L7.3 8.72c-.78.78-.78 2.05 0 2.83l1.24 1.24l-.71.71l-1.23-1.25c-.78-.78-2.05-.78-2.83 0L.59 15.43c-.78.78-.78 2.05 0 2.83l3.54 3.54c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L8.9 14.55l.71-.71l1.24 1.24c.78.78 2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83L13.84 9.6l.71-.71l1.24 1.24c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L18.26.58c-.78-.78-2.04-.78-2.82.01zM6.6 19.32l-1.06 1.06L2 16.85l1.06-1.06l3.54 3.53zm2.12-2.12l-1.06 1.06l-3.54-3.54l1.06-1.06l3.54 3.54zm9.54-9.54L17.2 8.72l-3.54-3.54l1.06-1.06l3.54 3.54zm2.12-2.12L19.32 6.6l-3.54-3.54L16.85 2l3.53 3.54zM14 21v2a9 9 0 0 0 9-9h-2c0 3.87-3.13 7-7 7zm0-4v2c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/></svg>
          <h1 class="ml-2">Config</h1>
        </NuxtLink>
<!--        <NuxtLink href="/config" class="flex items-center  gap-2 bg-yellow-300 px-10 py-3 rounded-xl shadow-sm shadow-gray-950-->
<!--              text-black font-semibold-->
<!--    ">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-1.73L19 17.27V19zm0-3h-.85l-3 3h-1.62l3-3h-2.12l-3 3H9.8l3-3h-2.12l-3 3H5.84l3-3H6.72L5 17.72V5h14v11z"/><path fill="currentColor" d="m10.67 11l2 2l5.08-5.09l-1.41-1.41l-3.67 3.67l-2-2l-4.42 4.42L7.66 14z"/></svg>-->
<!--          <h1 class="ml-2">Pollings</h1>-->
<!--        </NuxtLink>-->
        <NuxtLink href="/setting" class="flex items-center  gap-2 bg-yellow-300 hover:bg-yellow-200 px-10 py-3 rounded-xl shadow-sm shadow-gray-950
      text-black font-semibold ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01c.1-.7.3-1.37.59-1.98c-.22-.02-.44-.03-.67-.03c-2.42 0-4.68.67-6.61 1.82c-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01l-1-1.73l-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49l-1 1.73l1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01l1 1.73l1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49l1-1.73l-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/></svg>
          <h1 class="ml-2">Setting</h1>
        </NuxtLink>
      </div>
      <div class="bg-gray-950/40 mt-auto absolute bottom-0 w-full right-0 p-2  ">
        <div class="flex gap-5 items-center ml-2  ">
          <div class="avatar w-14 online object-cover">
            <div class="  rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div class="flex flex-col ">
            <h1 >Balldev </h1>
            <span class="text-[12px] badge rounded-md bg-lime-400 py-3 text-lime-950 font-bold">Developer</span>
          </div>
          <div class="ml-auto mr-2">
            <NuxtLink href="/signin" class="btn btn-sm btn-square bg-red-600 hover:bg-red-500 shadow-sm shadow-gray-200 border-none">
              <svg class="text-white "
                  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M11 20a1 1 0 0 0-1-1H5V5h5a1 1 0 1 0 0-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1z" clip-rule="evenodd"/><path d="M21.714 12.7a.996.996 0 0 0 .286-.697v-.006a.997.997 0 0 0-.293-.704l-4-4a1 1 0 1 0-1.414 1.414L18.586 11H9a1 1 0 1 0 0 2h9.586l-2.293 2.293a1 1 0 0 0 1.414 1.414l4-4l.007-.007z"/></g></svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!--  else  -->
    <div v-else
         class=" flex flex-col h-full text-lg  border-r-2  border-white px-2 gap-6 text-white  bg-sky-950">
      <div @click="toggleSidebar"
           class="absolute z-30 cursor-pointer text-yellow-400 right-[-18px] top-5  hover:scale-105 transform transition duration-300 ease-in-out hover:text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM7 8.5l4 3.5l-4 3.5z"/></svg>
      </div>
      <div  class="flex flex-col items-center mt-5 h-full gap-10  px-5">
        <div class=" w-16 flex    hover:scale-105 transform transition duration-300 ease-in-out tooltip z-50 tooltip-right  tooltip-warning" data-tip="HOME">
          <NuxtLink href="/signin">
            <NuxtImg src="sidebar-nt.webp" class="rounded-md shadow-sm shadow-gray-950 " fill/>
          </NuxtLink>
        </div>
        <NuxtLink href="/dashboard"
            class="flex items-center justify-center  w-16 py-2 rounded-md shadow-sm shadow-gray-950 hover:scale-105 transform transition duration-300 ease-in-out bg-yellow-300 text-gray-950 tooltip z-30 tooltip-right  tooltip-warning" data-tip="DASHBOARD">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm6 0c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1zm9.32-11.34L12.9 1.45c-.56-.28-1.23-.28-1.79 0L2.68 5.66c-.42.21-.68.64-.68 1.1C2 7.45 2.55 8 3.24 8h17.53C21.45 8 22 7.45 22 6.76c0-.46-.26-.89-.68-1.1zM2 20c0 .55.45 1 1 1h11.4c-.21-.64-.32-1.31-.36-2H3c-.55 0-1 .45-1 1zm17-7.74V11c0-.55-.45-1-1-1s-1 .45-1 1v2.26l2-1zm.55 1.96l-3 1.5c-.34.17-.55.52-.55.9v1.93c0 2.52 1.71 4.88 4 5.45c2.29-.57 4-2.93 4-5.45v-1.93c0-.38-.21-.73-.55-.89l-3-1.5a.986.986 0 0 0-.9-.01zm-.97 6.08l-.8-.8a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.44.44l1.88-1.85c.29-.29.77-.29 1.06 0c.29.29.29.77 0 1.06l-2.23 2.21a.996.996 0 0 1-1.41 0z"/></svg>
        </NuxtLink>
        <NuxtLink href="/devices"
            class="flex items-center justify-center w-16 py-2  rounded-md shadow-sm shadow-gray-950 hover:scale-105 transform transition duration-300 ease-in-out bg-yellow-300 text-gray-950 tooltip z-30 tooltip-right  tooltip-warning" data-tip="DEVICES">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
          <g fill="currentColor">
            <path
                d="M5.525 3.025a3.5 3.5 0 0 1 4.95 0a.5.5 0 1 0 .707-.707a4.5 4.5 0 0 0-6.364 0a.5.5 0 0 0 .707.707Z"/>
            <path
                d="M6.94 4.44a1.5 1.5 0 0 1 2.12 0a.5.5 0 0 0 .708-.708a2.5 2.5 0 0 0-3.536 0a.5.5 0 0 0 .707.707Z"/>
            <path
                d="M2.974 2.342a.5.5 0 1 0-.948.316L3.806 8H1.5A1.5 1.5 0 0 0 0 9.5v2A1.5 1.5 0 0 0 1.5 13H2a.5.5 0 0 0 .5.5h2A.5.5 0 0 0 5 13h6a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5h.5a1.5 1.5 0 0 0 1.5-1.5v-2A1.5 1.5 0 0 0 14.5 8h-2.306l1.78-5.342a.5.5 0 1 0-.948-.316L11.14 8H4.86L2.974 2.342ZM2.5 11a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm4.5-.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm2.5.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Zm1.5-.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Z"/>
            <path d="M8.5 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"/>
          </g>
        </svg>
        </NuxtLink>
        <NuxtLink href="/config"
            class="flex items-center justify-center w-16 py-2  rounded-md shadow-sm shadow-gray-950 hover:scale-105 transform transition duration-300 ease-in-out bg-yellow-300 text-gray-950 tooltip z-30 tooltip-right  tooltip-warning" data-tip="CONFIG">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m15.44.59l-3.18 3.18c-.78.78-.78 2.05 0 2.83l1.24 1.24l-.71.71l-1.24-1.25c-.78-.78-2.05-.78-2.83 0L7.3 8.72c-.78.78-.78 2.05 0 2.83l1.24 1.24l-.71.71l-1.23-1.25c-.78-.78-2.05-.78-2.83 0L.59 15.43c-.78.78-.78 2.05 0 2.83l3.54 3.54c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L8.9 14.55l.71-.71l1.24 1.24c.78.78 2.05.78 2.83 0l1.41-1.41c.78-.78.78-2.05 0-2.83L13.84 9.6l.71-.71l1.24 1.24c.78.78 2.05.78 2.83 0l3.18-3.18c.78-.78.78-2.05 0-2.83L18.26.58c-.78-.78-2.04-.78-2.82.01zM6.6 19.32l-1.06 1.06L2 16.85l1.06-1.06l3.54 3.53zm2.12-2.12l-1.06 1.06l-3.54-3.54l1.06-1.06l3.54 3.54zm9.54-9.54L17.2 8.72l-3.54-3.54l1.06-1.06l3.54 3.54zm2.12-2.12L19.32 6.6l-3.54-3.54L16.85 2l3.53 3.54zM14 21v2a9 9 0 0 0 9-9h-2c0 3.87-3.13 7-7 7zm0-4v2c2.76 0 5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/></svg>
        </NuxtLink>
<!--        <NuxtLink href="/pollings"-->
<!--            class="flex items-center justify-center w-16 py-2  rounded-md shadow-sm shadow-gray-950 hover:scale-105 transform transition duration-300 ease-in-out bg-yellow-300 text-gray-950 tooltip z-30 tooltip-right  tooltip-warning" data-tip="POLLINGS">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-1.73L19 17.27V19zm0-3h-.85l-3 3h-1.62l3-3h-2.12l-3 3H9.8l3-3h-2.12l-3 3H5.84l3-3H6.72L5 17.72V5h14v11z"/><path fill="currentColor" d="m10.67 11l2 2l5.08-5.09l-1.41-1.41l-3.67 3.67l-2-2l-4.42 4.42L7.66 14z"/></svg>-->
<!--        </NuxtLink>-->
        <NuxtLink href="/setting"
            class="flex items-center justify-center w-16 py-2  rounded-md shadow-sm shadow-gray-950 hover:scale-105 transform transition duration-300 ease-in-out bg-yellow-300 text-gray-950 tooltip z-30 tooltip-right  tooltip-warning" data-tip="SETTING">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01c.1-.7.3-1.37.59-1.98c-.22-.02-.44-.03-.67-.03c-2.42 0-4.68.67-6.61 1.82c-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01l-1-1.73l-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49l-1 1.73l1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01l1 1.73l1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49l1-1.73l-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/></svg>
        </NuxtLink>
          <NuxtLink href="/signin" class="avatar mt-auto mb-5 w-14 online object-cover  ">
            <div class="  rounded-md shadow-sm shadow-gray-950 hover:scale-105 transform transition duration-300 ease-in-out ">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  toggleSidebar: Function,
  isSidebarVisible: Boolean
});
</script>

