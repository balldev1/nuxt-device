<template>
  <div class="bg-gray-200 rounded-md  shadow-sm  shadow-gray-950">
    <div
        class="flex gap-2 items-center justify-center text-white  mb-5 bg-gradient-to-t from-sky-950 to-sky-800 py-2 rounded-t-md shadow-sm shadow-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class=""
           viewBox="0 0 14 14">
        <path fill="currentColor" fill-rule="evenodd"
              d="M0 3.5A3.5 3.5 0 0 1 3.5 0h7A3.5 3.5 0 0 1 14 3.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 0 10.5zm7-.25a.75.75 0 0 1 .75.75v2.25H10a.75.75 0 0 1 0 1.5H7.75V10a.75.75 0 0 1-1.5 0V7.75H4a.75.75 0 0 1 0-1.5h2.25V4A.75.75 0 0 1 7 3.25"
              clip-rule="evenodd"/>
      </svg>
      Add Group
    </div>
    <div
        class=" px-5 pb-4 space-y-5  ">
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
        <div v-if="selectedMode"
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
      <div class="flex flex-col items-center justify-center  ">
        <h1 class="badge bg-yellow-300 border-none px-4 py-3 rounded-lg shadow-sm shadow-gray-950 text-md  text-black font-bold "> กรุณาตรวจสอบความเรียบร้อยก่อนกดยืนยัน </h1>
        <div class="flex  items-center justify-center gap-6 pt-4">
          <button :disabled="!group"
                  @click="confirmSubmit"
                  className="btn bg-gradient-to-t from-sky-950 to-sky-800 hover:opacity-90 hover:text-yellow-400  w-36 border-none text-white shadow-sm shadow-gray-950">
            Confirm
          </button>
          <button :disabled="!group"
                  @click="confirmReset"
                  className="btn bg-gradient-to-t from-sky-950 to-sky-800 hover:opacity-90 hover:text-yellow-400 w-36 border-none text-white shadow-sm shadow-gray-950">
            Reset
          </button>
        </div>
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
const mode = ref<null>(null);
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