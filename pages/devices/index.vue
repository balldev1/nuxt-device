<template>
  <!-- header -->
  <div class=" h-full pl-70   px-10 py-5 ">
    <div class="min-h-screen rounded-md  pb-8 pt-4 px-5 bg-white shadow-sm shadow-gray-500  ">
      <div class="pl-4  pb-2">
        <div class="flex items-center  ">
          <div
              class=" flex p-2 px-4 gap-3 items-center rounded-md bg-gradient-to-t from-sky-950 to-sky-900 shadow-md shadow-gray-400">
            <div
                class=" p-2 rounded-md bg-yellow-400 shadow-gray-950 shadow-sm hover:scale-105 transform transition duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="text-sky-950" viewBox="0 0 16 16">
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
            </div>
            <div class="flex flex-col ">
              <h1 class="text-white font-bold text-xl ">Device </h1>
              <span  class="text-sm  text-gray-300">InternetGatewayDevice DeviceInfo</span>
            </div>
          </div>
        </div>
        <div class="border-b-2 border-sky-950 pt-2"/>
      </div>
      <div v-if="isLoading" class="flex flex-col items-center justify-center h-screen">
          <div>
            <span class="loading loading-spinner text-warning h-40 w-40"></span>
          </div>
          <p class="text-2xl text-sky-950">
            loading ...
          </p>
      </div>
      <div v-else>
        <TableDevices :device="device"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TableDevices from "~/components/devices/Table-Devices.vue";

interface Device {
  _id: string;
  _deviceId?: {
      _Manufacturer: any;
      _OUI: any;
      _ProductClass: any;
      _SerialNumber: any;
  };
}

const device = ref<Device[]>([]);
const error = ref<string | null>(null);
const isLoading = ref(true); // Track loading state

const fetchData = async () => {
  try {
    const response = await fetch('api/devices');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    device.value = data;
  } catch (err:any) {
    error.value = err.message;
    console.error('Error fetching data:', err);
  }finally {
    isLoading.value = false; // Set loading to false once data is fetched
  }
};

onMounted(() => {
  fetchData();
});
</script>
