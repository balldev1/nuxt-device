<template>

  <div
      v-for="(item, index) in devicePaths"
      :key="index"
      class="rounded-md shadow-sm shadow-gray-950 mt-5 text-sky-950 p-2 bg-gray-100 mb-5"
  >
    <div class="flex text-sm">
      <div class="">
        index : {{ index }}
        <strong>{{ item.path }}</strong>
      </div>
      <div class="ml-20 flex gap-5 items-center">
        <div class="text-sm bg-red-200 text-sky-950">{{ item.value }}</div>
        <!-- Display icon if '_writable' is true and 'object' is true -->
        <template v-if="item.writable && item.object && !item.root">
          <div class="shadow-sm shadow-sky-950 bg-sky-950 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-white" viewBox="0 0 48 48">
              <mask id="ipSAdd0">
                <g fill="none" stroke-linejoin="round" stroke-width="4">
                  <rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"/>
                  <path stroke="#000" stroke-linecap="round" d="M24 16v16m-8-8h16"/>
                </g>
              </mask>
              <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAdd0)"/>
            </svg>
          </div>
        </template>
        <!-- Display icon if '_writable' is true and 'object' is true -->
        <template v-if="item.root">
          <div class="shadow-sm shadow-sky-950  rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 56 56">
              <path fill="currentColor"
                    d="M7.715 49.574h40.57c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H7.715C2.84 6.426.355 8.84.355 13.69v28.62c0 4.851 2.485 7.265 7.36 7.265m11.976-11.18c-1.101 0-2.015-.937-2.015-2.015c0-.492.234-1.008.61-1.36l6.937-6.937l-6.938-6.96c-.352-.352-.61-.845-.61-1.337c0-1.101.915-1.969 2.016-1.969c.492 0 .961.211 1.336.586l6.938 6.938l7.031-6.961c.398-.422.844-.61 1.313-.61c1.101 0 2.015.891 2.015 1.993c0 .492-.21.937-.633 1.336l-6.937 6.984l6.914 6.89c.398.352.633.891.633 1.407c0 1.078-.914 2.016-2.016 2.016c-.515 0-1.031-.282-1.36-.633l-6.96-6.938l-6.914 6.938c-.352.375-.867.633-1.36.633"/>
            </svg>
          </div>
        </template>
        <div class="shadow-sm shadow-sky-950 bg-sky-950 rounded-md">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="text-white"
              viewBox="0 0 24 24"
          >
            <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12Zm10.738-4.25c-2.287 0-4.04 1.532-4.243 3.334a.75.75 0 0 1-1.49-.168c.301-2.69 2.821-4.666 5.733-4.666c1.67 0 3.198.644 4.262 1.697V7.5a.75.75 0 0 1 1.5 0v1.622a1.35 1.35 0 0 1-1.35 1.35h-1.906a.75.75 0 0 1 0-1.5h.658c-.77-.74-1.89-1.222-3.164-1.222Zm.024 8.5c2.146 0 4.018-1.828 4.24-4.317a.75.75 0 0 1 1.495.134c-.28 3.126-2.682 5.683-5.735 5.683c-1.708 0-3.219-.807-4.262-2.062v.712a.75.75 0 0 1-1.5 0v-2.177c0-.746.604-1.35 1.35-1.35h1.906a.75.75 0 0 1 0 1.5h-.873c.79 1.158 2.027 1.877 3.38 1.877Z"
                clip-rule="evenodd"
            />
          </svg>
        </div>
        <!-- Display icon if 'writable' is true -->
        <template v-if="item.writable && !item.root">
          <div class="shadow-sm shadow-sky-950 bg-sky-950 rounded-md">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="text-white"
                viewBox="-0.5 -0.5 24 24"
            >
              <path
                  fill="currentColor"
                  d="m21.289.98l.59.59c.813.814.69 2.257-.277 3.223L9.435 16.96l-3.942 1.442c-.495.182-.977-.054-1.075-.525a.928.928 0 0 1 .045-.51l1.47-3.976L18.066 1.257c.967-.966 2.41-1.09 3.223-.276zM8.904 2.19a1 1 0 1 1 0 2h-4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4a1 1 0 0 1 2 0v4a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4v-12a4 4 0 0 1 4-4h4z"
              />
            </svg>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {defineProps, computed} from 'vue';

interface Device {
  _id: any;
  InternetGatewayDevice: any
  WANConnectionDevice: any
  DownloadDiagnostics: any
}

// Define your props
const props = defineProps<{ device: Device }>();

console.log(props)

// Define base paths and custom initializations
const basePaths = {
  DeviceInfo: 'InternetGatewayDevice.DeviceInfo',
  DeviceSummary: 'InternetGatewayDevice.DeviceSummary',
  ManagementServer: 'InternetGatewayDevice.ManagementServer',
  WANDevice: 'InternetGatewayDevice.WANDevice',
  Capabilities: 'InternetGatewayDevice.Capabilities',
  DeviceConfig: 'InternetGatewayDevice.DeviceConfig',
};
// Define custom initializations for different paths

// Initialize paths object  ,label: string;
const paths: { [key: string]: { value: any; writable: boolean, object: boolean, root: boolean } } = {};
const targetPaths = [
  '.DeviceInfo.FirstUseDate',
  '.DeviceInfo.VendorConfigFile.1.Date',
  '.ManagementServer.PeriodicInformTime',
  '.DownloadDiagnostics.BOMTime',
  '.DownloadDiagnostics.EOMTime',
  '.DownloadDiagnostics.ROMTime',
  '.DownloadDiagnostics.TCPOpenRequestTime',
  '.DownloadDiagnostics.TCPOpenResponseTime',
];

// Recursive function to add paths with custom initialization
const addPaths = (obj: any, currentPath: string) => {
  if (typeof obj === 'object' && obj !== null) {
    // Initialize the path if it doesn't exist
    if (!paths[currentPath]) {
      paths[currentPath] = {
        value: '',
        writable: false,
        object: false,
        root: false,
      };
    }

    // Check and add value for _value and other properties if they exist
    if (obj._value !== undefined) {
      paths[currentPath].value = obj._value;
    }
    if (obj._writable !== undefined) {
      paths[currentPath].writable = obj._writable;
    }
    if (obj._object !== undefined) {
      paths[currentPath].object = obj._object;
    }

    if (obj.test !== undefined) {
      paths[currentPath].object = obj.test;
    }

    // Loop through the target paths and check if the currentPath matches
    targetPaths.forEach(loopPath => {
      const fullPath = `InternetGatewayDevice${loopPath}`;
      if (currentPath === fullPath) {
        // Adding the additional paths
        paths[`${currentPath}._value`] = {
          value: obj._value || '',
          writable: false,
          object: false,
          root: false,
        };
        paths[`${currentPath}._value.$date`] = {
          value: obj._value ? obj._value.$date : '',
          writable: false,
          object: false,
          root: false,
        };
      }
    });

    // Check if the currentPath ends with a number greater than 0
    if (/\.\d+$/.test(currentPath)) {
      // Extract the number after the dot and convert it to an integer
      const number = parseInt(currentPath.split('.').pop() || '0', 10);

      // Add "root": true if the number is greater than 0
      if (number > 0) {
        paths[currentPath].root = true; // Set root to true when the number is greater than 0
      }
    }

    // Recursively add paths for child objects
    Object.keys(obj).forEach(key => {
      if (!['_object', '_timestamp', '_value', '_writable'].includes(key)) {
        addPaths(obj[key], `${currentPath}.${key}`);
      }
    });
  }
};


// Computed property to generate the device paths
const devicePaths = computed(() => {
  // Ensure that DeviceInfo and ManagementServer are processed if they exist
  if (props.device.InternetGatewayDevice.DeviceInfo) {
    addPaths(props.device.InternetGatewayDevice.DeviceInfo, basePaths.DeviceInfo);
  }

  if (props.device.InternetGatewayDevice.DeviceSummary) {
    addPaths(props.device.InternetGatewayDevice.DeviceSummary, basePaths.DeviceSummary);
  }

  if (props.device.InternetGatewayDevice.ManagementServer) {
    addPaths(props.device.InternetGatewayDevice.ManagementServer, basePaths.ManagementServer);
  }

  if (props.device.InternetGatewayDevice.WANDevice) {
    addPaths(props.device.InternetGatewayDevice.WANDevice, basePaths.WANDevice);
  }

  if (props.device.InternetGatewayDevice.Capabilities) {
    addPaths(props.device.InternetGatewayDevice.Capabilities, basePaths.Capabilities);
  }

  if (props.device.InternetGatewayDevice.DeviceConfig) {
    addPaths(props.device.InternetGatewayDevice.DeviceConfig, basePaths.DeviceConfig);
  }

  // Convert paths to an array of objects with label, path, value, and writable
  const entries = Object.keys(paths).map(key => ({
    path: key,
    root: paths[key].root,
    value: paths[key].value,
    writable: paths[key].writable,
    object: paths[key].object,
  }));
  // Sort entries to ensure that DeviceInfo comes first, then ManagementServer, and other paths
  console.log(entries)
  return entries;
});
</script>

<!-- now -->

