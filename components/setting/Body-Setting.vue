<template>
  <div v-if="props.device.length > 0 ">
  <div
      class="mt-2  relative  ">
    <div
        class="  bg-gray-200 shadow-sm shadow-sky-950 text-sky-950 ">
      <table class="table ">
        <thead class=" text-[14px] text-md text-center  text-white">
        <!-- _deviceId -->
        <tr >
          <th class="bg-sky-950  rounded-l-md"></th>
          <th  class="bg-sky-950 ">Prodauct</th>
          <th  class="bg-sky-950">Model</th>
          <th  class="bg-sky-950">Software</th>
          <th class="bg-sky-950"></th>
          <th class=" bg-sky-950 rounded-r-md">Confaig</th>
        </tr>
        </thead>
        <tbody class="shadow-sm text-center">
        <tr  v-for="(item,index) in props.device"
             :key="item._id"
            class="text-sky-950 font-semibold  ">
          <td class="">{{ index +1 }}</td>
          <td>{{ item.munufacturer }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.softwareversion }}</td>
          <td></td>
          <td class="relative cursor-pointer ">
            <div class="dropdown dropdown-hover">
              <div
                  tabIndex={-1}
                  role="button"
                  class="btn btn-sm    bg-yellow-400 border-none text-black shadow-sm shadow-sky-950 pointer-events-none"
              >
                Manage
              </div>
              <ul
                  tabIndex={0}
                  class="dropdown-content text-white menu bg-gradient-to-t from-sky-950 to-sky-800 rounded-box z-[1]  shadow-sm shadow-sky-950 absolute top-0 left-20 pointer-events-auto"
              >
                <li class="hover:bg-yellow-400 shadow-sm hover:shadow-sky-950 hover:text-black rounded-md">
                  <NuxtLink :href="`/setting/${item.id}`">Config</NuxtLink>
                </li>
                <li class="hover:bg-yellow-400 shadow-sm hover:shadow-sky-950 hover:text-black rounded-md"><a>Rename</a></li>
                <li class="hover:bg-yellow-400 shadow-sm hover:shadow-sky-950 hover:text-black rounded-md"><a>Delete</a></li>
              </ul>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
  <div class="join mt-3 flex">
    <button class="join-item btn bg-sky-950 text-white ml-auto">1</button>
    <button class="join-item btn btn-active bg-gray-100 text-sky-950">..</button>
    <button class="join-item btn bg-sky-950 text-white">3</button>
    <button class="join-item btn bg-sky-950 text-white">4</button>
  </div>
  </div>
  <div v-else class="flex flex-col items-center justify-center h-screen">
    <div>
      <span class="loading loading-spinner text-warning h-40 w-40"></span>
    </div>
    <p class="text-2xl text-sky-950">
      loading ...
    </p>
  </div>
</template>

<script setup lang="ts">
interface Device {
  _id: any;
  name: any;
  munufacturer: any;
  softwareversion: any;
}

const props = defineProps<{
  device: Device[];
}>();

</script>
