<template>
  <div class="relative max-h-[500px] overflow-y-auto container w-full mx-auto px-1   overflow-x-hidden  ">
    <!-- Sticky input container -->
    <div class="sticky top-0   shadow-sm shadow-sky-950 rounded-md  bg-sky-50   p-2 z-10">
      <div
          class="absolute top-2  bg-gradient-to-t from-sky-950 to-sky-800 p-2 py-2 rounded-md shadow-sm shadow-sky-950">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" class="text-white"
             viewBox="0 0 14 14">
          <path fill="currentColor" fill-rule="evenodd"
                d="M1.75 1.5a.25.25 0 0 0-.25.25v1.5a.75.75 0 0 1-1.5 0v-1.5A1.75 1.75 0 0 1 1.75 0h1.5a.75.75 0 0 1 0 1.5zm11.5 8.5a.75.75 0 0 1 .75.75v1.5A1.75 1.75 0 0 1 12.25 14h-1.5a.75.75 0 0 1 0-1.5h1.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 .75-.75m-11.75.75a.75.75 0 0 0-1.5 0v1.5A1.75 1.75 0 0 0 1.75 14h1.5a.75.75 0 0 0 0-1.5h-1.5a.25.25 0 0 1-.25-.25zm8.5-10a.75.75 0 0 1 .75-.75h1.5A1.75 1.75 0 0 1 14 1.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.25.25 0 0 0-.25-.25h-1.5A.75.75 0 0 1 10 .75M6.25 4a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M2.5 6.25a3.75 3.75 0 1 1 6.879 2.068L11.03 9.97a.75.75 0 1 1-1.06 1.06L8.318 9.38A3.75 3.75 0 0 1 2.5 6.25"
                clip-rule="evenodd"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" class="absolute left-0 top-0 text-gray-50"
             viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="0" fill="currentColor">
            <animate attributeName="r" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite"
                     values="0;11"/>
            <animate attributeName="opacity" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99"
                     repeatCount="indefinite" values="1;0"/>
          </circle>
        </svg>
      </div>
      <input
          type="text"
          v-model="searchQuery"
          placeholder="Search InternetGatewayDevice... "
          class="p-2 rounded-md px-14 w-full bg-white shadow-sm shadow-sky-950  input-none input:border-none text-sky-950 focus:outline-none placeholder:text-sky-950"
      />
    </div>

    <div
        v-for="(item, index) in filteredItems"
        :key="index"
        class=" rounded-md shadow-sm shadow-gray-950 mt-5 text-sky-950 p-2 bg-gray-100 mb-5"
    >
      <div class="flex text-sm">
        <div class="">
          <strong>{{ item.path }}</strong>
        </div>
        <div class="ml-auto flex gap-5 items-center">
          <div v-if="item.value" class="text-sm bg-yellow-400 border-none rounded-sm shadow-sm shadow-sky-950 badge text-sky-950">
            {{ item.value ===
          'InternetGatewayDevice:1.4[](Baseline:2,EthernetLAN:2,WiFiLAN:2,WiFiWPS:1,ADSLWAN:1,ADSL2WAN:1,Time:2,IPPing:1,TraceRoute:1,Download:1,DownloadTCP:1,Upload:1,UploadTCP:1,UDPEcho:1,UDPEchoPlus:1,ATMLoopback:1,DSLDiagnostics:1,ADSL2DSLDiagnostics:1,DeviceAssociation:2,DHCPCondServing:1,DHCPOption:1)'
              ? 'InternetGatewayDevice:1.4' : item.value }}
          </div>
          <!-- icon + -->
          <template v-if="item.writable && item.object && !item.root">
            <div class="shadow-sm shadow-sky-950 bg-sky-ุ00 rounded-md bg-sky-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-white"
                   viewBox="0 0 16 16"><path fill="currentColor" d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"/></svg>
            </div>
          </template>
          <!-- Display icon if '_writable' is true and 'object' is true -->
          <template v-if="item.root">
            <div class="shadow-sm shadow-sky-950 bg-red-600 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-white"
                   viewBox="0 0 24 24"><path fill="currentColor" d="m16.192 6.344l-4.243 4.242l-4.242-4.242l-1.414 1.414L10.535 12l-4.242 4.242l1.414 1.414l4.242-4.242l4.243 4.242l1.414-1.414L13.364 12l4.242-4.242z"/></svg>
            </div>
          </template>
          <div class="shadow-sm shadow-sky-950 bg-lime-600 rounded-md">
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
            <div class="shadow-sm shadow-sky-950 bg-blue-600 rounded-md ">
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
  </div>
</template>


<script setup lang="ts">
import {defineProps, computed} from 'vue';
interface Device {
  _id: any;
  Device: any
  InternetGatewayDevice: any
  WANConnectionDevice: any
  DownloadDiagnostics: any
}

// Define your props
const props = defineProps<{ device: Device }>();
const searchQuery = ref('');

let basePaths:any = {};

// ตรวจสอบว่า InternetGatewayDevice มีอยู่หรือไม่
if (props.device.InternetGatewayDevice) {
  basePaths = {
    DeviceInfo: 'InternetGatewayDevice.DeviceInfo',
    DeviceSummary: 'InternetGatewayDevice.DeviceSummary',
    ManagementServer: 'InternetGatewayDevice.ManagementServer',
    WANDevice: 'InternetGatewayDevice.WANDevice',
    Capabilities: 'InternetGatewayDevice.Capabilities',
    DeviceConfig: 'InternetGatewayDevice.DeviceConfig',
    DownloadDiagnostics: 'InternetGatewayDevice.DownloadDiagnostics',
    IPPingDiagnostics: 'InternetGatewayDevice.IPPingDiagnostics',
    LANConfigSecurity: 'InternetGatewayDevice.LANConfigSecurity',
    LANDevice: 'InternetGatewayDevice.LANDevice',
    LANDeviceNumberOfEntries: 'InternetGatewayDevice.LANDeviceNumberOfEntries',
    LANInterfaces: 'InternetGatewayDevice.LANInterfaces',
    Layer3Forwarding: 'InternetGatewayDevice.Layer3Forwarding',
    QueueManagement: 'InternetGatewayDevice.QueueManagement',
    Services: 'InternetGatewayDevice.Services',
    Time: 'InternetGatewayDevice.Time',
    TraceRouteDiagnostics: 'InternetGatewayDevice.TraceRouteDiagnostics',
    UDPEchoConfig: 'InternetGatewayDevice.UDPEchoConfig',
    UploadDiagnostics: 'InternetGatewayDevice.UploadDiagnostics',
    'X_TRUE-COM_ALG': 'InternetGatewayDevice.X_TRUE-COM_ALG',
    'X_TRUE-COM_Security': 'InternetGatewayDevice.X_TRUE-COM_Security',
    'X_TRUE-COM_UPnP': 'InternetGatewayDevice.X_TRUE-COM_UPnP',
    'X_TRUE-COM_UserInterface': 'InternetGatewayDevice.X_TRUE-COM_UserInterface',
    'X_TRUE_EasyMesh': 'InternetGatewayDevice.X_TRUE_EasyMesh',
    'X_TRUE_UserInfo': 'InternetGatewayDevice.X_TRUE_UserInfo',
    'X_TRUE_WIFIMonitor': 'InternetGatewayDevice.X_TRUE_WIFIMonitor',
  };
}
// ตรวจสอบว่า Device มีอยู่หรือไม่
else if (props.device.Device) {
  basePaths = {
    DeviceInfo: 'Device.DeviceInfo',
    DeviceSummary: 'Device.DeviceSummary',
    ManagementServer: 'Device.ManagementServer',
    WANDevice: 'Device.WANDevice',
    Capabilities: 'Device.Capabilities',
    DeviceConfig: 'Device.DeviceConfig',
    DownloadDiagnostics: 'Device.DownloadDiagnostics',
    IPPingDiagnostics: 'Device.IPPingDiagnostics',
    LANConfigSecurity: 'Device.LANConfigSecurity',
    LANDevice: 'Device.LANDevice',
    LANDeviceNumberOfEntries: 'Device.LANDeviceNumberOfEntries',
    LANInterfaces: 'Device.LANInterfaces',
    Layer3Forwarding: 'Device.Layer3Forwarding',
    QueueManagement: 'Device.QueueManagement',
    Services: 'Device.Services',
    Time: 'Device.Time',
    TraceRouteDiagnostics: 'Device.TraceRouteDiagnostics',
    UDPEchoConfig: 'Device.UDPEchoConfig',
    UploadDiagnostics: 'Device.UploadDiagnostics',
    'X_TRUE-COM_ALG': 'Device.X_TRUE-COM_ALG',
    'X_TRUE-COM_Security': 'Device.X_TRUE-COM_Security',
    'X_TRUE-COM_UPnP': 'Device.X_TRUE-COM_UPnP',
    'X_TRUE-COM_UserInterface': 'Device.X_TRUE-COM_UserInterface',
    'X_TRUE_EasyMesh': 'Device.X_TRUE_EasyMesh',
    'X_TRUE_UserInfo': 'Device.X_TRUE_UserInfo',
    'X_TRUE_WIFIMonitor': 'Device.X_TRUE_WIFIMonitor',
  };
}

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
  '.Time.CurrentLocalTime',
  '.UDPEchoConfig.TimeFirstPacketReceived',
  '.UDPEchoConfig.TimeLastPacketReceived',
  '.UDPEchoConfig.BOMTime',
  '.UDPEchoConfig.EOMTime',
  '.UDPEchoConfig.ROMTime',
  '.UDPEchoConfig.TCPOpenRequestTime',
  '.UDPEchoConfig.TCPOpenResponseTime',
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

  if (props.device.InternetGatewayDevice) {
    if (props.device.InternetGatewayDevice.DeviceInfo) {
      addPaths(props.device.InternetGatewayDevice, basePaths.DeviceInfo);
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

    if (props.device.InternetGatewayDevice.DownloadDiagnostics) {
      addPaths(props.device.InternetGatewayDevice.DownloadDiagnostics, basePaths.DownloadDiagnostics);
    }

    if (props.device.InternetGatewayDevice.IPPingDiagnostics) {
      addPaths(props.device.InternetGatewayDevice.IPPingDiagnostics, basePaths.IPPingDiagnostics);
    }

    if (props.device.InternetGatewayDevice.LANConfigSecurity) {
      addPaths(props.device.InternetGatewayDevice.LANConfigSecurity, basePaths.LANConfigSecurity);
    }

    if (props.device.InternetGatewayDevice.LANDevice) {
      addPaths(props.device.InternetGatewayDevice.LANDevice, basePaths.LANDevice);
    }

    if (props.device.InternetGatewayDevice.LANDeviceNumberOfEntries) {
      addPaths(props.device.InternetGatewayDevice.LANDeviceNumberOfEntries, basePaths.LANDeviceNumberOfEntries);
    }

    if (props.device.InternetGatewayDevice.LANInterfaces) {
      addPaths(props.device.InternetGatewayDevice.LANInterfaces, basePaths.LANInterfaces);
    }

    if (props.device.InternetGatewayDevice.Layer3Forwarding) {
      addPaths(props.device.InternetGatewayDevice.Layer3Forwarding, basePaths.Layer3Forwarding);
    }

    if (props.device.InternetGatewayDevice.QueueManagement) {
      addPaths(props.device.InternetGatewayDevice.QueueManagement, basePaths.QueueManagement);
    }

    if (props.device.InternetGatewayDevice.Services) {
      addPaths(props.device.InternetGatewayDevice.Services, basePaths.Services);
    }

    if (props.device.InternetGatewayDevice.Time) {
      addPaths(props.device.InternetGatewayDevice.Time, basePaths.Time);
    }

    if (props.device.InternetGatewayDevice.TraceRouteDiagnostics) {
      addPaths(props.device.InternetGatewayDevice.TraceRouteDiagnostics, basePaths.TraceRouteDiagnostics);
    }

    if (props.device.InternetGatewayDevice.UDPEchoConfig) {
      addPaths(props.device.InternetGatewayDevice.UDPEchoConfig, basePaths.UDPEchoConfig);
    }

    if (props.device.InternetGatewayDevice.UploadDiagnostics) {
      addPaths(props.device.InternetGatewayDevice.UploadDiagnostics, basePaths.UploadDiagnostics);
    }

    if (props.device.InternetGatewayDevice['X_TRUE-COM_ALG']) {
      addPaths(props.device.InternetGatewayDevice['X_TRUE-COM_ALG'], basePaths['X_TRUE-COM_ALG']);
    }

    if (props.device.InternetGatewayDevice['X_TRUE-COM_Security']) {
      addPaths(props.device.InternetGatewayDevice['X_TRUE-COM_Security'], basePaths['X_TRUE-COM_Security']);
    }

    if (props.device.InternetGatewayDevice['X_TRUE-COM_UPnP']) {
      addPaths(props.device.InternetGatewayDevice['X_TRUE-COM_UPnP'], basePaths['X_TRUE-COM_UPnP']);
    }

    if (props.device.InternetGatewayDevice['X_TRUE-COM_UserInterface']) {
      addPaths(props.device.InternetGatewayDevice['X_TRUE-COM_UserInterface'], basePaths['X_TRUE-COM_UserInterface']);
    }

    if (props.device.InternetGatewayDevice['X_TRUE_EasyMesh']) {
      addPaths(props.device.InternetGatewayDevice['X_TRUE_EasyMesh'], basePaths['X_TRUE_EasyMesh']);
    }

    if (props.device.InternetGatewayDevice['X_TRUE_UserInfo']) {
      addPaths(props.device.InternetGatewayDevice['X_TRUE_UserInfo'], basePaths['X_TRUE_UserInfo']);
    }

    if (props.device.InternetGatewayDevice['X_TRUE_WIFIMonitor']) {
      addPaths(props.device.InternetGatewayDevice['X_TRUE_WIFIMonitor'], basePaths['X_TRUE_WIFIMonitor']);
    }
  }else if (props.device.Device) {
    if (props.device.Device.DeviceInfo) {
      addPaths(props.device.Device, basePaths.DeviceInfo);
    }

    if (props.device.Device.DeviceSummary) {
      addPaths(props.device.Device.DeviceSummary, basePaths.DeviceSummary);
    }

    if (props.device.Device.ManagementServer) {
      addPaths(props.device.Device.ManagementServer, basePaths.ManagementServer);
    }

    if (props.device.Device.WANDevice) {
      addPaths(props.device.Device.WANDevice, basePaths.WANDevice);
    }

    if (props.device.Device.Capabilities) {
      addPaths(props.device.Device.Capabilities, basePaths.Capabilities);
    }

    if (props.device.Device.DeviceConfig) {
      addPaths(props.device.Device.DeviceConfig, basePaths.DeviceConfig);
    }

    if (props.device.Device.DownloadDiagnostics) {
      addPaths(props.device.Device.DownloadDiagnostics, basePaths.DownloadDiagnostics);
    }

    if (props.device.Device.IPPingDiagnostics) {
      addPaths(props.device.Device.IPPingDiagnostics, basePaths.IPPingDiagnostics);
    }

    if (props.device.Device.LANConfigSecurity) {
      addPaths(props.device.Device.LANConfigSecurity, basePaths.LANConfigSecurity);
    }

    if (props.device.Device.LANDevice) {
      addPaths(props.device.Device.LANDevice, basePaths.LANDevice);
    }

    if (props.device.Device.LANDeviceNumberOfEntries) {
      addPaths(props.device.Device.LANDeviceNumberOfEntries, basePaths.LANDeviceNumberOfEntries);
    }

    if (props.device.Device.LANInterfaces) {
      addPaths(props.device.Device.LANInterfaces, basePaths.LANInterfaces);
    }

    if (props.device.Device.Layer3Forwarding) {
      addPaths(props.device.Device.Layer3Forwarding, basePaths.Layer3Forwarding);
    }

    if (props.device.Device.QueueManagement) {
      addPaths(props.device.Device.QueueManagement, basePaths.QueueManagement);
    }

    if (props.device.Device.Services) {
      addPaths(props.device.Device.Services, basePaths.Services);
    }

    if (props.device.Device.Time) {
      addPaths(props.device.Device.Time, basePaths.Time);
    }

    if (props.device.Device.TraceRouteDiagnostics) {
      addPaths(props.device.Device.TraceRouteDiagnostics, basePaths.TraceRouteDiagnostics);
    }

    if (props.device.Device.UDPEchoConfig) {
      addPaths(props.device.Device.UDPEchoConfig, basePaths.UDPEchoConfig);
    }

    if (props.device.Device.UploadDiagnostics) {
      addPaths(props.device.Device.UploadDiagnostics, basePaths.UploadDiagnostics);
    }

    if (props.device.Device['X_TRUE-COM_ALG']) {
      addPaths(props.device.Device['X_TRUE-COM_ALG'], basePaths['X_TRUE-COM_ALG']);
    }

    if (props.device.Device['X_TRUE-COM_Security']) {
      addPaths(props.device.Device['X_TRUE-COM_Security'], basePaths['X_TRUE-COM_Security']);
    }

    if (props.device.Device['X_TRUE-COM_UPnP']) {
      addPaths(props.device.Device['X_TRUE-COM_UPnP'], basePaths['X_TRUE-COM_UPnP']);
    }

    if (props.device.Device['X_TRUE-COM_UserInterface']) {
      addPaths(props.device.Device['X_TRUE-COM_UserInterface'], basePaths['X_TRUE-COM_UserInterface']);
    }

    if (props.device.Device['X_TRUE_EasyMesh']) {
      addPaths(props.device.Device['X_TRUE_EasyMesh'], basePaths['X_TRUE_EasyMesh']);
    }

    if (props.device.Device['X_TRUE_UserInfo']) {
      addPaths(props.device.Device['X_TRUE_UserInfo'], basePaths['X_TRUE_UserInfo']);
    }

    if (props.device.Device['X_TRUE_WIFIMonitor']) {
      addPaths(props.device.Device['X_TRUE_WIFIMonitor'], basePaths['X_TRUE_WIFIMonitor']);
    }
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

const filteredItems = computed(() => {
  return devicePaths.value.filter(item =>
      item.path.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

</script>


