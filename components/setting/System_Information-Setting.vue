<template>
  <div class="bg-gray-200 rounded-md shadow-sm shadow-gray-950">
    <div
        class="flex gap-2 items-center justify-center text-white mb-5 bg-gradient-to-t from-sky-950 to-sky-800 py-2 rounded-t-md shadow-sm shadow-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
        <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
          <path stroke-linecap="round"
                d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"/>
          <path stroke-linecap="round" d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"/>
          <path fill="currentColor"
                d="m11.691 11.829l-7.8-4.334A.6.6 0 0 0 3 8.02v8.627a.6.6 0 0 0 .309.525l7.8 4.333A.6.6 0 0 0 12 20.98v-8.627a.6.6 0 0 0-.309-.524Z"/>
        </g>
      </svg>
      <!-- ตรวจสอบว่า device มีค่าหรือไม่ก่อนที่จะแสดง name -->
      <div v-if="props.device">
        {{ props.device.name }}
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
    <div class="px-5 pb-4 space-y-5 pt-2">
      asdsaasd
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Device {
  _id: string;
  name: string;
  model: string;
  gateway: string;
  group: string;
  parent_group: string;
}

const props = defineProps<{
  device: Device | null;
}>();
</script>

<style>
/* Add any additional styling here */
</style>
