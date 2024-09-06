<template>
  <div class="grid grid-cols-4 gap-5  text-sky-950 ">
    <!--  sidebar  -->
    <div class=" bg-gray-200 h-96 shadow-sm shadow-gray-950 rounded-md">
      <div class="bg-gradient-to-t from-sky-950 to-sky-900 flex gap-2 justify-center p-4 rounded-t-md">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-white"
             viewBox="0 0 24 24">
          <path fill="currentColor" d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21"
                opacity="0">
            <animate id="svgSpinnersWifi0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersWifi1.end+0.2s"
                     calcMode="discrete" dur="0.25s" values="0;1"/>
            <animate id="svgSpinnersWifi1" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s"
                     dur="0.001s" values="1;0"/>
          </path>
          <path fill="currentColor"
                d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z"
                opacity="0">
            <animate id="svgSpinnersWifi2" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi0.end"
                     calcMode="discrete" dur="0.25s" values="0;1"/>
            <animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/>
          </path>
          <path fill="currentColor"
                d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3"
                opacity="0">
            <animate id="svgSpinnersWifi3" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi2.end"
                     calcMode="discrete" dur="0.25s" values="0;1"/>
            <animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/>
          </path>
        </svg>
        <h1 class="  text-white   ">Config Paramete </h1>
      </div>
      <div class="p-4 flex w-full gap-5 flex-col">
        <NuxtLink :to="`/setting`"
                  class="flex text-white z-20 hover:text-yellow-400  btn  bg-gradient-to-t from-sky-950 to-sky-800 shadow-gray-400 shadow-sm border-none ">
          <div class=" w-full flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><g fill="currentColor"><path d="M5.05 14.95a1 1 0 1 1 1.414-1.414A5 5 0 0 0 15 10a1 1 0 1 1 2 0a7 7 0 0 1-11.95 4.95Z"/><path d="M13.559 12.832a1 1 0 1 1-1.11-1.664l3-2a1 1 0 1 1 1.11 1.664l-3 2Z"/><path d="M18.832 12.445a1 1 0 0 1-1.664 1.11l-2-3a1 1 0 1 1 1.664-1.11l2 3Zm-3.975-7.594a1 1 0 1 1-1.414 1.414a5 5 0 0 0-8.536 3.536a1 1 0 1 1-2 0a7 7 0 0 1 11.95-4.95Z"/><path d="M6.349 6.969a1 1 0 0 1 1.11 1.664l-3.001 2a1 1 0 1 1-1.11-1.664l3-2Z"/><path d="M1.075 7.356a1 1 0 1 1 1.664-1.11l2 3a1 1 0 1 1-1.664 1.11l-2-3Z"/></g></svg>
            <h1>Back Setting Device</h1>
          </div>
        </NuxtLink>
        <button @click="selectParameter('Addmodel')"
                class="flex text-white  hover:text-yellow-400  btn z-10 bg-gradient-to-t from-sky-950 to-sky-800 shadow-gray-400 shadow-sm border-none ">
          <div class=" w-full flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25"
                 viewBox="0 0 56 56"><path fill="currentColor" d="M10.785 20.723c0-6.657 3.516-10.102 10.195-10.102h21.047v-.586c0-4.828-2.46-7.265-7.36-7.265H9.638c-4.899 0-7.36 2.437-7.36 7.265v24.656c0 4.852 2.461 7.266 7.36 7.266h1.148Zm10.57 32.508h25.032c4.875 0 7.336-2.415 7.336-7.243V21.074c0-4.828-2.461-7.265-7.336-7.265H21.356c-4.922 0-7.36 2.437-7.36 7.265v24.914c0 4.828 2.438 7.243 7.36 7.243m12.563-9.165c-1.078 0-1.945-.867-1.945-2.039v-6.515h-6.586c-1.078 0-2.063-.938-2.063-2.016c0-1.031.985-1.992 2.063-1.992h6.586v-6.492c0-1.149.867-2.016 1.945-2.016s1.922.867 1.922 2.016v6.492h6.375c1.195 0 2.18.914 2.18 1.992c0 1.102-.985 2.016-2.18 2.016H35.84v6.515c0 1.172-.844 2.04-1.922 2.04"/></svg>            <h1 >Add Model</h1>
          </div>
        </button>
        <button @click="selectParameter('Addgroup')"
                class="flex text-white  hover:text-yellow-400  btn z-10 bg-gradient-to-t from-sky-950 to-sky-800 shadow-gray-400 shadow-sm border-none ">
          <div class=" w-full flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                 viewBox="0 0 24 24"><g fill="none"><circle cx="9" cy="9" r="4" fill="currentColor"/><path fill="currentColor" fill-rule="evenodd" d="M14.864 18.813c.021.105.11.187.218.187h1.785c.602 0 1.054-.529.853-1.096C17.3 16.72 16.295 15 14 15c-.126 0-.247.005-.365.015c-.376.032-.472.494-.22.774c.905 1.005 1.285 2.203 1.449 3.024m-1.336-.98c.243.583-.236 1.167-.868 1.167h-1.527c-.602 0-1.054-.529-.853-1.096c.19-.536.5-1.181.995-1.728a.75.75 0 0 1 1.058-.055c.572.506.948 1.122 1.195 1.712" clip-rule="evenodd"/><path fill="currentColor" d="M9 15c3.572 0 4.592 2.551 4.883 4.009c.109.541-.33.991-.883.991H5c-.552 0-.992-.45-.883-.991C4.408 17.55 5.428 15 9 15"/><path fill="currentColor" fill-rule="evenodd" d="M12.482 12.588A4.985 4.985 0 0 0 14 9c0-.7-.144-1.368-.404-1.973a3 3 0 1 1-1.114 5.561m-.77-.648A3.99 3.99 0 0 0 13 9c0-.597-.13-1.163-.365-1.672a3 3 0 0 0-.923 4.612" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 3v4m2-2h-4"/></g></svg>
            <h1 >Add Group</h1>
          </div>
        </button>

        <div
            class="dropdown border-2 flex z-50  text-white">
          <div tabIndex={0} role="button"
               class="btn text-white z-50  hover:text-yellow-400 bg-gradient-to-t from-sky-950 to-sky-800 shadow-gray-400  shadow-sm border-none w-full">
            <div class=" w-full flex items-center   gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height=""
                   viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
                  <path stroke-linecap="round"
                        d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"/>
                  <path stroke-linecap="round" d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"/>
                  <path fill="currentColor"
                        d="m11.691 11.829l-7.8-4.334A.6.6 0 0 0 3 8.02v8.627a.6.6 0 0 0 .309.525l7.8 4.333A.6.6 0 0 0 12 20.98v-8.627a.6.6 0 0 0-.309-.524Z"/>
                </g>
              </svg>
              <h1 class="">Selete Parameter</h1>
            </div>
          </div>
          <ul tabIndex={0} class="dropdown-content menu
             bg-gradient-to-t from-sky-950 z-50 to-sky-800 shadow-gray-950 shadow-sm border-none  w-52 p-2
              rounded-md text-white">
            <li v-for="(item,index) in parameter" :key="item.index"
                @click="selectParameter(item.name)"
                class="rounded-md hover:bg-yellow-300 p-2 hover:text-black">
                {{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--  setting  -->
    <div class=" col-span-3  rounded-md">
      <SetParamSetting :selectedParameter="selectedParameter"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import axios from 'axios';
import SetParamSetting from '~/components/setting/SetParam-Setting.vue';
import {useRoute} from "vue-router";

interface Device {
  _id: string;
  name: any;
  device: any;
  parent_group:any;
  group: any;
}

const route = useRoute();
const id = route.params.id
const selectedParameter = ref<string | null>('Manufacturer');


function selectParameter(parameter: string) {
  selectedParameter.value = parameter;
}
interface Device {
  _id: string;
  name: any;
  model: any;
}
const parameter = ref<Device[]>([]);
const props = defineProps<{ device: Device }>();

const fetchData = async () => {
  try {
    // ใช้ axios ในการดึงข้อมูล
    const response = await axios.get(`/api/group`);
    parameter.value = response.data;
  } catch (err: any) {
    error.value = err.message;
    console.error('Error fetching data:', err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>