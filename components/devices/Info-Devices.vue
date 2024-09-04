<template>
  <!-- if -->
  <div v-if="props.device " >
        <div class="grid grid-cols-3   gap-5   mt-5">
          <div class="grid grid-cols-2 p-5 gap-5 col-span-2 rounded-md bg-gray-100 w-full shadow-md shadow-gray-500">
            <div class="flex flex-col  gap-2 ">
                <h1 class="text-sky-950 text-xl font-bold  p-2    ">
                  Device Information
                    <template v-if="isOnline(device._lastInform)">
                      <div class="text-white badge bg-green-600 border-none rounded-md shadow-sm shadow-gray-950">
                        Online
                      </div>
                    </template>
                    <template v-else>
                      <div class="text-white badge bg-red-600 border-none rounded-md shadow-sm shadow-gray-950">
                        Offline
                      </div>
                    </template>
                </h1>
              <div class="flex flex-col  ">
                <div class="flex flex-col items-center">
                  <div class="flex flex-col items-center">
                    <div class="flex flex-col justify-center items-center p-2 shadow-sm shadow-gray-950 w-40 mt-4  rounded-md bg-white
                      hover:scale-105 transform transition duration-300 ease-in-out">
                      <svg xmlns="http://www.w3.org/2000/svg" class="text-sky-950" width="60" height="60"
                           viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21" opacity="0">
                          <animate id="svgSpinnersWifi0" fill="freeze" attributeName="opacity"
                                   begin="0;svgSpinnersWifi1.end+0.2s" calcMode="discrete" dur="0.25s" values="0;1"/>
                          <animate id="svgSpinnersWifi1" fill="freeze" attributeName="opacity"
                                   begin="svgSpinnersWifi3.end+0.5s" dur="0.001s" values="1;0"/>
                        </path>
                        <path fill="currentColor"
                              d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z"
                              opacity="0">
                          <animate id="svgSpinnersWifi2" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi0.end"
                                   calcMode="discrete" dur="0.25s" values="0;1"/>
                          <animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s"
                                   values="1;0"/>
                        </path>
                        <path fill="currentColor"
                              d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3"
                              opacity="0">
                          <animate id="svgSpinnersWifi3" fill="freeze" attributeName="opacity" begin="svgSpinnersWifi2.end"
                                   calcMode="discrete" dur="0.25s" values="0;1"/>
                          <animate fill="freeze" attributeName="opacity" begin="svgSpinnersWifi3.end+0.5s" dur="0.001s"
                                   values="1;0"/>
                        </path>
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" class="text-sky-950" width="60" height="60"
                           viewBox="0 0 48 48">
                        <g fill="none">
                          <rect width="40" height="14" x="4" y="28" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="4" rx="2"/>
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M14 35h8"/>
                          <rect width="4" height="4" x="30" y="33" fill="currentColor" rx="2"/>
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                d="M12 28V8m24 20V8"/>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div class=" w-full pt-10">
                    <div class="grid grid-cols-3 text-sky-950  ">
                      <div>
                        <h1 class="font-bold ">Serial</h1>
                      </div>
                      <div class="col-span-2 text-gray-500 ">
                        : {{ device._deviceId?._SerialNumber }}
                      </div>
                    </div>
                    <div class="grid grid-cols-3 text-sky-950  ">
                      <div>
                        <h1 class="font-bold">LastBoot</h1>
                      </div>
                      <div class="col-span-2 text-gray-500 ">
                        : {{ getLastBootTime(device._lastBoot) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative flex flex-col gap-2 justify-center bg-white rounded-md shadow-sm shadow-gray-950 p-5 space-y-4">
              <div class="absolute right-5 top-2   rounded-md bg-gradient-to-t from-sky-950 to-sky-900  p-2 px-3 shadow-sm shadow-gray-950">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="text-white " viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z"/><path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"/></g></svg>
              </div>
              <div class="pt-5 grid-cols-2 grid border-b-[1px] border-sky-950 ">
                <div class="font-bold text-sky-950">
                  Site Code:
                </div>
                <p class="ml-auto">
                  Unknown
                </p>
              </div>
              <div class="grid-cols-2 grid border-b-[1px] border-sky-950 ">
                <div class="font-bold text-sky-950">
                  Site Name:
                </div>
                <p class="ml-auto">
                  Unknown
                </p>
              </div>
              <div class="grid-cols-2 grid border-b-[1px] border-sky-950 ">
                <div class="font-bold text-sky-950">
                  จังหวัด:
                </div>
                <p class="ml-auto ">
                  Unknown
                </p>
              </div>
              <div class="grid-cols-2 grid border-b-[1px] border-sky-950 ">
                <div class="font-bold text-sky-950">
                  VLAN:
                </div>
                <p class="ml-auto">
                  Unknown
                </p>
              </div>
              <div class="grid-cols-2 grid border-b-[1px] border-sky-950 ">
                <div class="font-bold text-sky-950">
                  INFO:
                </div>
                <p class="ml-auto ">
                  Unknown
                </p>
              </div>
            </div>
          </div>
          <ConfigDevices/>
        </div>
<!--     ตรวจสอบว่า `device.InternetGatewayDevice` มีอยู่หรือไม่-->
    <div
        v-if="props.device?.InternetGatewayDevice?.LANDevice?.[1]?.Hosts?.Host && Object.keys(props.device.InternetGatewayDevice.LANDevice[1].Hosts.Host).length > 0"
        class="mt-5 rounded-md bg-gray-100 shadow-sm shadow-gray-950">
        <!-- ถ้ามี InternetGatewayDevice จะแสดงเนื้อหาในนี้ -->
        <LanDevices :device="props.device"  />
      </div>
    <!-- parameter   -->
      <ParameteDevices :device="props.device" class="mt-5"/>
  </div>
  <div v-else  class="flex flex-col items-center justify-center h-screen">
    <div>
      <span class="loading loading-spinner text-warning h-40 w-40"></span>
    </div>
    <p class="text-2xl text-sky-950">
      loading ...
    </p>
  </div>
</template>
<!--v-if=" props.device.InternetGatewayDevice && props.device.InternetGatewayDevice.LANDevice"-->
<script setup lang="ts">

import LanDevices from "~/components/devices/Lan-Devices.vue";

interface Device {
  _id: string;
  InternetGatewayDevice: any;
  Device: any;
  _deviceId: any;
  _lastInform: string;
  _registered: string;
  _lastBoot: string;
}

import {ref} from "vue";
import ConfigDevices from "~/components/devices/Config-Devices.vue";
import ParameteDevices from "~/components/devices/Paramete-Devices.vue";

const props = defineProps<{ device: Device }>();
const error = ref<string | null>(null);
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

// Function to check if the device is online
const isOnline = (lastInform: any) => {
  if (!lastInform) return false;
  const lastInformDate = new Date(lastInform);
  const currentDate = new Date();
  const differenceInMilliseconds = currentDate.getTime() - lastInformDate.getTime();
  const differenceInMinutes = Math.floor(differenceInMilliseconds / 1000 / 60);
  return differenceInMinutes <= 5; // Device is considered online if the last inform was within the last 5 minutes
};

</script>