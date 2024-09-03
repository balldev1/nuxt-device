<template>
  <div v-for="(lanDevice, index) in device.InternetGatewayDevice.LANDevice" :key="index" class="  flex    ">
    <!--   layout   -->
      <div v-for="(host, hostIndex) in lanDevice.Hosts" :key="hostIndex" class="grid grid-cols-2    ">
        <div v-for="(hostItem, itemIndex) in host" :key="itemIndex" class="   py-2">
          <div v-if="hostItem.MACAddress" class="  ">
            <div
                class=" rounded-md  w-full  pt-5  ">
              <div class="relative flex flex-col    gap-2  w-full     px-5 ">
                <div class=" flex  items-center  relative ">
                  <h1
                      class="text-white text-sm font-bold  px-2 absolute z-50 left-0 top-[-5px]  shadow-sm shadow-gray-950 rounded-md bg-gradient-to-t from-sky-950 to-sky-900 ">
                    Lan Device
                  </h1>
                </div>
                <div class="grid grid-cols-3 items-center  w-full ">
                  <div class="flex flex-col   ">
                    <div class="flex  items-center">
                      <div class="flex flex-col justify-center  items-center p-2 shadow-sm shadow-gray-950 w-40   rounded-md bg-white
                                hover:scale-105 transform transition duration-300 ease-in-out py-10 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" class="text-sky-950"
                             viewBox="0 0 26 26">
                          <path fill="currentColor"
                                d="M23.934 18.947c-.598 1.324-.884 1.916-1.652 3.086c-1.073 1.634-2.588 3.673-4.461 3.687c-1.666.014-2.096-1.087-4.357-1.069c-2.261.011-2.732 1.089-4.4 1.072c-1.873-.017-3.307-1.854-4.381-3.485c-3.003-4.575-3.32-9.937-1.464-12.79C4.532 7.425 6.61 6.237 8.561 6.237c1.987 0 3.236 1.092 4.879 1.092c1.594 0 2.565-1.095 4.863-1.095c1.738 0 3.576.947 4.889 2.581c-4.296 2.354-3.598 8.49.742 10.132zM16.559 4.408c.836-1.073 1.47-2.587 1.24-4.131c-1.364.093-2.959.964-3.891 2.092c-.844 1.027-1.544 2.553-1.271 4.029c1.488.048 3.028-.839 3.922-1.99z"/>
                        </svg>
                        <div v-if="hostItem.HostName && hostItem.HostName._value"
                             class="absolute bottom-0 w-full   font-bold badge bg-sky-950 text-white border-none rounded-sm shadow-sm shadow-gray-950">
                          {{ hostItem.HostName._value }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col text-sky-950 mt-2 gap-5 col-span-2 ml-5">
                    <div class="grid grid-cols-3 ">
                      <div>
                        Mac Address
                      </div>
                      <div
                          class="w-full bg-white  text-center  shadow-sm shadow-sky-950 text-sky-950 p-1 px-2 rounded-md  col-span-2 ml-2 ">
                        {{ hostItem.MACAddress._value }}
                      </div>
                    </div>
                    <div class="grid grid-cols-3 ">
                      <div>
                        IP
                      </div>
                      <div
                          class="w-full bg-white  text-center  shadow-sm shadow-sky-950 text-sky-950 p-1 px-2 rounded-md  col-span-2 ml-2 ">
                        {{ hostItem.IPAddress._value }}
                      </div>
                    </div>
                    <div class="grid grid-cols-3 ">
                      <div>
                        Connection
                      </div>
                      <div
                          class="w-full bg-white  text-center  shadow-sm shadow-sky-950 text-sky-950 p-1 px-2 rounded-md  col-span-2 ml-2 ">
                        unknow
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Host {
  Active: any;
  AddressSource: any;
  ClientID: any;
  HostName: any;
  IPAddress: any;
  IPv6Address: any;
  IPv6LinkLocal: any;
  InterfaceType: any;
  Layer2Interface: any;
  LeaseTimeRemaining: any;
  MACAddress: any;
  UserClassID: any;
  VendorClassID: any;
}

interface Hosts {
  [key: string]: Host;
}

interface LANDevice {
  Hosts: Hosts;
}

interface InternetGatewayDevice {
  LANDevice: { [key: string]: LANDevice };
  // Add other properties as needed
}

interface Device {
  _id: string;
  InternetGatewayDevice: InternetGatewayDevice;
  _deviceId: any; // Adjust type based on your data
  _lastInform: string;
  _registered: string;
  // Add other properties as needed
}

import {ref} from "vue";
import ConfigDevices from "~/components/devices/Config-Devices.vue";


const props = defineProps<{ device: Device }>();

const error = ref<string | null>(null);


</script>