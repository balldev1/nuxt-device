<template>
  <div class="rounded-md">
    <!-- Check if the device has data -->
    <div v-if="Object.keys(device).length > 0">
      <!-- Loop to display main groups like System Information, WAN -->
      <div v-for="(parent, parentName) in device" :key="parentName" class="mb-6 pb-5 flex flex-col gap-4 rounded-md shadow-sm shadow-gray-950  bg-gray-200">
        <!-- Each iteration is now wrapped in a new div -->
        <div class="bg-gradient-to-t from-sky-950 to-sky-900 flex gap-2 items-center   rounded-t-md ">
          <div class=" flex items-center gap-2 ">
            <div class=" m-2 ml-6 p-1 rounded-full shadow-sm shadow-sky-950 bg-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" class="text-sky-950" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12.084 3.5a4.752 4.752 0 0 0-4.39 2.934a.75.75 0 1 1-1.387-.574a6.252 6.252 0 0 1 11.553 0a.75.75 0 0 1-1.386.574a4.752 4.752 0 0 0-4.39-2.934Z"/><path d="M12.085 6a2.251 2.251 0 0 0-2.16 1.618a.75.75 0 0 1-1.44-.42a3.751 3.751 0 0 1 7.2 0a.75.75 0 0 1-1.44.42A2.251 2.251 0 0 0 12.085 6Z"/><path d="M13.084 7.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/><path fill-rule="evenodd" d="M3.651 4.378a.75.75 0 0 0-1.302.744l3.787 6.628H6c-1.886 0-2.828 0-3.414.586C2 12.922 2 13.864 2 15.75c0 1.886 0 2.828.586 3.414c.586.586 1.528.586 3.414.586h12c1.886 0 2.828 0 3.414-.586c.586-.586.586-1.528.586-3.414c0-1.886 0-2.828-.586-3.414c-.586-.586-1.528-.586-3.414-.586h-.136l3.787-6.628a.75.75 0 0 0-1.302-.744l-4 7l-.22.372H7.88l-.23-.372l-4-7ZM6 16.75a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-4Z" clip-rule="evenodd"/></g></svg>
            </div>
            <h2 class="font-bold text-lg text-white">{{ parentName }}</h2>
          </div>
        </div>
        <!-- Loop through sub-groups like system, system1, wandev -->
        <div v-for="(children, childrenName) in parent" :key="childrenName" class="px-5   text-sm flex flex-col gap-2">
          <div class=" flex ">
            <div class=" flex items-center gap-2 bg-lime-400 px-2 py-1 rounded-md shadow-sm shadow-sky-950">
                <h3 class="font-bold text-sky-950 text-md  "> {{ childrenName }}</h3>
            </div>
          </div>

          <!-- Loop through data items like 5555, ProductClass, Manufacturer, balldev -->
          <div v-for="(item, itemName) in children" :key="itemName" class=" bg-white   rounded-md shadow-sm shadow-gray-950">
            <div class="   grid grid-cols-5 items-center p-2 ">
              <div>
                <p class=" font-bold">{{ itemName }}</p>
              </div>
              <div class="col-span-3">
                <p class=" font-bold">{{ item.gateway }}{{ itemName }}</p>
              </div>
              <div class="   ml-auto flex gap-2 items-center justify-center ">
                <button class="py-1 px-2 bg-sky-900 rounded-md shadow-sm shadow-gray-950">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"/></svg>
                </button>
                <button class="py-1 px-2 bg-red-600 rounded-md shadow-sm shadow-gray-950  ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M17.751 3h3.067l-6.7 7.625L22 21h-6.172l-4.833-6.293L5.464 21h-3.07l7.167-8.155L2 3h6.328l4.37 5.752zm-1.076 16.172h1.7L7.404 4.732H5.58z"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div class="flex gap-4 items-center justify-center mt-5">
            <span class="loading loading-dots text-rose-600 loading-sm"></span>
            <span class="loading loading-dots text-purple-500 loading-sm"></span>
            <span class="loading loading-dots text-green-600 loading-sm"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Display this message if there is no data in the device -->
    <div v-else>
      <p class="text-red-500 font-bold">No data available.</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

// Define interface for the device data structure
interface DeviceItem {
  id: string;
  name: string;
  model: string;
  gateway: string;
  group: string;
  groupParams: string;
}

// Define the main structure for devices
const device = ref<Record<string, Record<string, Record<string, DeviceItem>>>>({});

const route = useRoute();
const id = route.params.id as string;
const error = ref<string | null>(null);
const isLoading = ref(true);

const fetchData = async () => {
  try {
    const response = await axios.get(`/api/parameter/${id}`);
    device.value = response.data;
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
