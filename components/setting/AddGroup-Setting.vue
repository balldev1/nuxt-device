<template>
  <div class="bg-gray-200 rounded-md  shadow-sm  shadow-gray-950">
    <div
        class="flex gap-2 items-center justify-center text-white  mb-5 bg-gradient-to-t from-sky-950 to-sky-800 py-2 rounded-t-md shadow-sm shadow-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
           viewBox="0 0 24 24"><g fill="none"><circle cx="9" cy="9" r="4" fill="currentColor"/><path fill="currentColor" fill-rule="evenodd" d="M14.864 18.813c.021.105.11.187.218.187h1.785c.602 0 1.054-.529.853-1.096C17.3 16.72 16.295 15 14 15c-.126 0-.247.005-.365.015c-.376.032-.472.494-.22.774c.905 1.005 1.285 2.203 1.449 3.024m-1.336-.98c.243.583-.236 1.167-.868 1.167h-1.527c-.602 0-1.054-.529-.853-1.096c.19-.536.5-1.181.995-1.728a.75.75 0 0 1 1.058-.055c.572.506.948 1.122 1.195 1.712" clip-rule="evenodd"/><path fill="currentColor" d="M9 15c3.572 0 4.592 2.551 4.883 4.009c.109.541-.33.991-.883.991H5c-.552 0-.992-.45-.883-.991C4.408 17.55 5.428 15 9 15"/><path fill="currentColor" fill-rule="evenodd" d="M12.482 12.588A4.985 4.985 0 0 0 14 9c0-.7-.144-1.368-.404-1.973a3 3 0 1 1-1.114 5.561m-.77-.648A3.99 3.99 0 0 0 13 9c0-.597-.13-1.163-.365-1.672a3 3 0 0 0-.923 4.612" clip-rule="evenodd"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 3v4m2-2h-4"/></g></svg>
      Add Group
    </div>
    <div
        class=" px-5 pb-4 space-y-5 pt-2  ">
      <label
          class="form-control grid grid-cols-2  gap-5  w-full">
        <div>
          <div
              class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
            <span class="text-white">What is Mode ?</span>
          </div>
          <div class=" shadow-sm shadow-sky-950 rounded-md w-sm">
            <select v-model="selectedMode"
                    class="select w-full  border-none focus:outline-none bg-white">
              <option value="" disabled selected>Selected Mode</option>
              <option
                  v-for="item in mode"
                  :key="item._id"
                  :value="item._id">
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>
        <div
             class="border-2 ">
          <div class="w-full ">
            <div
                class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
              <span class="text-white">What is Group Name ?</span>
            </div>
            <input
                v-model="group"
                type="text" placeholder="name"
                class="input border-none bg-white shadow-sm  shadow-sky-950 focus:outline-none focus:shadow-sky-950 focus:shadow w-full  placeholder:text-sm placeholder:bade"/>
          </div>
        </div>
      </label>
      <div class="flex flex-col items-center justify-center">
        <h1 class="badge bg-yellow-300 border-none px-4 py-4 mt-2 rounded-lg shadow-sm shadow-gray-950 text-md  text-black font-bold "> กรุณาตรวจสอบความเรียบร้อยก่อนกดยืนยัน </h1>
        <div class="flex  items-center justify-center gap-6 pt-6">
          <button :disabled="!group || !selectedMode"
                  @click="confirmSubmit"
                  className="btn bg-gradient-to-t from-sky-950 to-sky-800 hover:opacity-90 hover:text-yellow-400  w-44 border-none text-white shadow-sm shadow-gray-950">
            Confirm
          </button>
          <button :disabled="!group || !selectedMode "
                  @click="confirmReset"
                  className="btn bg-gradient-to-t from-sky-950 to-sky-800 hover:opacity-90 hover:text-yellow-400 w-44 border-none text-white shadow-sm shadow-gray-950">
            Reset
          </button>
        </div>
      </div>
      <div class="flex items-center gap-5 justify-center pt-7">
        <span class="loading loading-dots loading-lg"></span>
        <span class="loading loading-dots loading-lg"></span>
        <span class="loading loading-dots loading-lg"></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import Swal from 'sweetalert2';

const group = ref('');
const selectedMode = ref('');
const mode = ref<any>(null);
const error = ref<string | null>(null);
const isLoading = ref(true);

const fetchData = async () => {
  try {
    const response = await fetch(`/api/group/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log('Fetched device data:', data); // ตรวจสอบข้อมูลที่ได้รับ
    mode.value = data;
  } catch (err: any) {
    error.value = err.message;
    console.error('Error fetching data:', err);
  } finally {
    isLoading.value = false;
  }
};

const confirmReset = async () => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'This will reset the form fields.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, reset it!',
    cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
    group.value = '';
    selectedMode.value = '';

    Swal.fire('Reset!', 'The form has been reset.', 'success');
  }
};

const confirmSubmit = async () => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You are about to submit the form data.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, submit it!',
    cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
    if (!selectedMode.value || !group.value) {
      Swal.fire('Error', 'Please fill in all fields.', 'error');
      return;
    }

    try {
      const response = await axios.post('/api/group', {
        name: group.value,
        parentId: selectedMode.value,
      });
      console.log('Data submitted successfully:', response.data);
      Swal.fire('Success', 'Group created successfully!', 'success');
    } catch (err: any) {
      error.value = err.message;
      console.error('Error submitting data:', err);
      Swal.fire('Error', 'Error submitting data.', 'error');
    }
  }
};


onMounted(() => {
  fetchData();
});

</script>

<style>

</style>