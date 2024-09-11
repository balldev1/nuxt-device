<template>
  <!-- header -->
  <div class="  pl-70   px-10 py-5  ">
    <div class="  rounded-md  pb-8 pt-4 px-5  bg-white shadow-sm shadow-gray-500  ">
      <div class="pl-4   pb-2">
        <div class="flex items-center  ">
          <div
              class=" flex p-2 px-4 gap-5 items-center rounded-md bg-gradient-to-t from-sky-950 to-sky-900 shadow-md shadow-gray-400">
            <div
                class=" p-2 rounded-md bg-yellow-400 shadow-gray-950 shadow-sm hover:scale-105 transform transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" class="text-sky-950"
                   viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01c.1-.7.3-1.37.59-1.98c-.22-.02-.44-.03-.67-.03c-2.42 0-4.68.67-6.61 1.82c-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2zm10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01l-1-1.73l-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49l-1 1.73l1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01l1 1.73l1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49l1-1.73l-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"/>
              </svg>
            </div>
            <div class="flex flex-col w-36 ">
              <h1 class="text-white font-bold text-xl ">Setting Config </h1>
              <div v-if="modelData"
                  v-for="item in modelData" class="text-[14px] badge bg-yellow-400 text-sky-950 border-none">
                {{item.munufacturer}} {{item.name}}
              </div>
              <span class="text-[12px]  text-white"> {{ device[0]?.model }}</span>
            </div>
          </div>
        </div>
        <div
            class="border-b-2 border-sky-950  pt-2"/>
        <!--     isLoading     -->
        <div v-if="isLoading && device" class="flex flex-col items-center justify-center h-screen">
          <div>
            <span class="loading loading-spinner text-warning h-40 w-40"></span>
          </div>
          <p class="text-2xl text-sky-950">
            loading ...
          </p>
        </div>
        <!--    Dashboard    -->
        <div class="mt-5 ">
          <DashboardSetting :device="device" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import DashboardSetting from "~/components/setting/Dashboard-Setting.vue";
import {onMounted, ref} from "vue";
import axios from 'axios';

interface Device {
  _id: string;
  name: any;
  model: any;
  parent_group: any;
  group: any;
}

interface Model {
  _id: string;
  name: any;
  munufacturer: any;
  softwareversion: any;
}

const device = ref<Device[]>([]);
const modelData = ref<Model>([]);
const route = useRoute();
const id = route.params.id
const error = ref<string | null>(null);
const isLoading = ref(true);

const fetchData = async () => {
  try {
    // ใช้ Promise.all ในการดึงข้อมูลจากทั้งสอง API พร้อมกัน
    const [responseParameter, responseModel] = await Promise.all([
      axios.get(`/api/parameter/${id}`), // ใช้ axios
      axios.get(`/api/model/${id}`),
    ]);

    // เช็คสถานะ responseModel และแปลงข้อมูลเป็น JSON
    if (responseModel.status !== 200) {
      throw new Error(`Model error! Status: ${responseModel.status}`);
    }
    device.value = responseParameter.data;
    modelData.value = responseModel.data;
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
