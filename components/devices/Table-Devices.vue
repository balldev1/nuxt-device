<template>
  <div class="relative scale-75">
    <div class="mt-8 flex  gap-5  items-center justify-center">
      <div class="relative">
        <div class="absolute top-[-20px] left-1 text-md py-2 badge rounded-sm bg-yellow-400 text-black font-bold border-none shadow-sm shadow-gray-950">
          Device
        </div>
        <input
            type="text"
            placeholder=""
            v-model="filters.device"
            class="input border-2 border-sky-950 w-44 text-md font-semibold bg-gray-200 focus:outline-none text-sky-950 focus:border-sky-950"
        />
      </div>
      <div class="relative">
        <div class="absolute top-[-20px] left-1 text-md py-2 badge rounded-sm bg-yellow-400 text-black font-bold border-none shadow-sm shadow-gray-950">
          SERIAL
        </div>
        <input
            type="text"
            placeholder=""
            v-model="filters.serial"
            class="input border-2 border-sky-950 w-44 text-md font-semibold bg-gray-200 focus:outline-none text-sky-950 focus:border-sky-950"
        />
      </div>
      <div class="relative">
        <div class="absolute top-[-20px] left-1 text-md py-2  badge rounded-sm bg-yellow-400 text-black font-bold border-none shadow-sm shadow-gray-950">
          SITE NAME
        </div>
        <input
            type="text"
            placeholder=""
            class="input   border-2 border-sky-950  w-44 text-md font-semibold bg-gray-200   focus:outline-none text-sky-950 focus:border-sky-950"
        />
      </div>
      <div class="relative">
        <div class="absolute top-[-20px] left-1 text-md py-2  badge rounded-sm bg-yellow-400 text-black font-bold border-none shadow-sm shadow-gray-950">
          LOCATION
        </div>
        <input
            type="text"
            placeholder=""
            class="input   border-2 border-sky-950  w-44 text-md font-semibold bg-gray-200   focus:outline-none text-sky-950 focus:border-sky-950"
        />
      </div>
      <div class="relative">
        <div class="absolute top-[-20px] left-1 text-md py-2 badge rounded-sm bg-yellow-400 text-black font-bold border-none shadow-sm shadow-gray-950">
          STATUS
        </div>
        <select v-model="filters.filter"
                class="input border-2 border-sky-950 w-32 text-md font-semibold bg-gray-200 focus:outline-none text-sky-950 focus:border-sky-950">
          <option value="">All</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>
      <button @click="filterDevices"
              class="btn btn-square bg-lime-400 border-none hover:bg-lime-300 shadow-sm shadow-gray-950">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sky-950" viewBox="0 0 1664 1664">
          <path fill="currentColor" d="M1152 704q0-185-131.5-316.5T704 256T387.5 387.5T256 704t131.5 316.5T704 1152t316.5-131.5T1152 704zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124q-143 0-273.5-55.5t-225-150t-150-225T0 704t55.5-273.5t150-225t225-150T704 0t273.5 55.5t225 150t150 225T1408 704q0 220-124 399l343 343q37 37 37 90z"/>
        </svg>
      </button>

      <button @click="resetFilters"
              class="btn btn-square bg-red-600 hover:bg-red-500  border-none  shadow-sm shadow-gray-950">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg>      </button>
      <button @click="exportToExcel"
              class="btn btn-square bg-sky-200 border-none hover:bg-sky-100 shadow-sm shadow-gray-950">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-lime-950" viewBox="0 0 512 512"><path fill="currentColor" d="M453.547 273.449H372.12v-40.714h81.427v40.714zm0 23.264H372.12v40.714h81.427v-40.714zm0-191.934H372.12v40.713h81.427V104.78zm0 63.978H372.12v40.713h81.427v-40.713zm0 191.934H372.12v40.714h81.427V360.69zm56.242 80.264c-2.326 12.098-16.867 12.388-26.58 12.796H302.326v52.345h-36.119L0 459.566V52.492L267.778 5.904h34.548v46.355h174.66c9.83.407 20.648-.291 29.197 5.583c5.991 8.608 5.41 19.543 5.817 29.43l-.233 302.791c-.29 16.925 1.57 34.2-1.978 50.892zm-296.51-91.256c-16.052-32.57-32.395-64.909-48.39-97.48c15.82-31.698 31.408-63.512 46.937-95.327c-13.203.64-26.406 1.454-39.55 2.385c-9.83 23.904-21.288 47.169-28.965 71.888c-7.154-23.323-16.634-45.774-25.3-68.515c-12.796.698-25.592 1.454-38.387 2.21c13.493 29.78 27.86 59.15 40.946 89.104c-15.413 29.081-29.837 58.57-44.785 87.825c12.737.523 25.475 1.047 38.212 1.221c9.074-23.148 20.357-45.424 28.267-69.038c7.096 25.359 19.135 48.798 29.023 73.051c14.017.99 27.976 1.862 41.993 2.676zM484.26 79.882H302.326v24.897h46.53v40.713h-46.53v23.265h46.53v40.713h-46.53v23.265h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v23.264h46.53v40.714h-46.53v26.897H484.26V79.882z"/></svg>
      </button>
    </div>
  </div>
  <div class="mt-5  relative shadow-sm shadow-gray-500 bg-gray-200 rounded-lg">
    <div class="overflow-x-auto rounded-md text-sky-950">
      <table class="table ">
        <thead class="text-[14px] text-md bg-sky-950 text-white">
        <tr>
          <th></th>
          <th>DEVICE</th>
          <th>SERIAL</th>
          <th>SITE NAME</th>
          <th>LOCATION</th>
          <th>STATUS</th>
          <th>LASTBOOT</th>
          <th>ACTION</th>
        </tr>
        </thead>
        <tbody >
        <tr v-if="filteredDevices.length"
            v-for="(item,index) in filteredDevices"
            :key="item._id"
            class="text-sky-950 font-semibold"
        >
          <td>{{ index +1 }}</td>
          <td>{{ item._deviceId?._Manufacturer || 'No description available' }}</td>
          <td>{{ item._deviceId?._SerialNumber || 'No description available' }}</td>
          <td>-</td>
          <td>-</td>
          <td>
            <template v-if="isOnline(item._lastInform)" >
              <div class="text-white badge bg-green-600 border-none rounded-md shadow-sm shadow-gray-950">
                Online
              </div>
            </template>
            <template v-else>
              <div class="text-white badge bg-red-600 border-none rounded-md  shadow-sm shadow-gray-950">
                Offline
              </div>
            </template>
          </td>
          <td>{{ getLastBootTime(item._lastBoot) }}</td>
          <td>
            <NuxtLink :to="`/devices/${encodeURIComponent(item._id)}`"
                      class="text-white badge flex items-center   bg-sky-950 hover:bg-sky-900 py-4 border-none rounded-md shadow-sm shadow-gray-950">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  class="text-white" viewBox="0 0 24 24"><g fill="none"><path fill="currentColor" d="M3 3V2H2v1zm9.293 10.707a1 1 0 0 0 1.414-1.414zM4 11V3H2v8zM3 4h8V2H3zm-.707-.293l10 10l1.414-1.414l-10-10z"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 15v0c0 1.87 0 2.804.402 3.5A3 3 0 0 0 5.5 19.598C6.196 20 7.13 20 9 20h5c2.828 0 4.243 0 5.121-.879C20 18.243 20 16.828 20 14V9c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 18.5 4.402C17.804 4 16.87 4 15 4v0"/></g></svg>
            </NuxtLink>
          </td>
        </tr>
        <tr v-else>
          <td colspan="7" class="text-center text-gray-950 py-10 font-bold">ไม่มีข้อมูล</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="join mt-3 flex ">
    <button class="join-item btn bg-sky-950 text-white  ml-auto">1</button>
    <button class="join-item btn btn-active bg-gray-100 text-sky-950">..</button>
    <button class="join-item btn bg-sky-950 text-white">3</button>
    <button class="join-item btn bg-sky-950 text-white">4</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import * as XLSX from 'xlsx';

interface Device {
  _id: any;
  _lastInform: any;
  _lastBoot: any;
  _deviceId?: {
    _Manufacturer: string;
    _SerialNumber: string;
  };
}

const props = defineProps<{
  device: Device[];
}>();

// Search query states
const filters = ref({
  device: '',
  serial: '',
  filter: '', // To hold filter status before searching
});

// State to hold the search query after clicking the search button
const searching = ref({
  device: '',
  serial: '',
  filter: '', // Filter for online/offline status
});


// State to determine if search has been triggered
const searchTriggered = ref(false);

// Function to reset filters
const resetFilters = () => {
  filters.value = {
    device: '',
    serial: '',
    filter: '', // Reset filter to empty
  };
  searching.value = {
    device: '',
    serial: '',
    filter: '', // Reset filter to empty
  };
  searchTriggered.value = false; // Reset search trigger
};

// Function to apply search criteria
const filterDevices = () => {
  searching.value = { ...filters.value };
  searchTriggered.value = true; // Indicate that search has been triggered
};

// Computed property for filtering devices
const filteredDevices = computed(() => {
  if (!searchTriggered.value) {
    return props.device; // Return all devices if search has not been triggered
  }

  return props.device.filter((item) => {
    const deviceMatch = item._deviceId?._Manufacturer.toLowerCase().includes(searching.value.device.toLowerCase());
    const serialMatch = item._deviceId?._SerialNumber.toLowerCase().includes(searching.value.serial.toLowerCase());
    const statusMatch = searching.value.filter ? (isOnline(item._lastInform) ? searching.value.filter === 'online' : searching.value.filter === 'offline') : true;

    return deviceMatch && serialMatch && statusMatch;
  });
});

// Function to convert UTC time to Thailand time (GMT+7) and format it
const convertToThailandTime = (utcDateString: string) => {
  if (!utcDateString) return ''; // Handle null or undefined values

  const date = new Date(utcDateString);
  // Adjust the time zone to GMT+7 (Thailand Time)
  const thailandOffset = 7 * 60 * 60 * 1000;
  const thailandDate = new Date(date.getTime() + thailandOffset);

  // Format date to DD/MM/YYYY HH:mm:ss
  const day = String(thailandDate.getDate()).padStart(2, '0');
  const month = String(thailandDate.getMonth() + 1).padStart(2, '0');
  const year = thailandDate.getFullYear();
  const hours = String(thailandDate.getHours()).padStart(2, '0');
  const minutes = String(thailandDate.getMinutes()).padStart(2, '0');
  const seconds = String(thailandDate.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

// Function to export data to Excel
const exportToExcel = () => {
  const data = filteredDevices.value.map(device => ({
    'Manufacturer': device._deviceId?._Manufacturer,
    'Serial Number': device._deviceId?._SerialNumber,
    'Last Inform': convertToThailandTime(device._lastInform),
    'Last Boot': convertToThailandTime(device._lastBoot)
  }));

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Devices');

  XLSX.writeFile(wb, 'devices.xlsx');
};

// Helper function to check online status
const isOnline = (lastInform: any) => {
  const lastInformDate = new Date(lastInform);
  const today = new Date();
  const removeTime = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return removeTime(lastInformDate).getTime() === removeTime(today).getTime();
};

// Helper function to format last boot time
const getLastBootTime = (lastBoot: any) => {
  const lastBootDate = new Date(lastBoot);
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate.getTime() - lastBootDate.getTime();
  if (isNaN(differenceInMilliseconds)) {
    return '';
  }
  const differenceInMinutes = Math.floor(differenceInMilliseconds / 1000 / 60);
  const days = Math.floor(differenceInMinutes / 60 / 24);
  const hours = Math.floor((differenceInMinutes % (60 * 24)) / 60);
  const minutes = differenceInMinutes % 60;
  if (days > 0) {
    return `${days} days`;
  } else if (differenceInMinutes >= 60) {
    return `${hours} hours ${minutes} minutes`;
  } else {
    return `${minutes} minutes`;
  }
};
</script>
