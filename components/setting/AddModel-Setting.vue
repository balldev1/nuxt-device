<template>
  <div class="bg-gray-200 rounded-md  shadow-sm  shadow-gray-950">
    <div
        class="flex gap-2 items-center justify-center text-white  mb-5 bg-gradient-to-t from-sky-950 to-sky-800 py-2 rounded-t-md shadow-sm shadow-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20"
           viewBox="0 0 56 56"><path fill="currentColor" d="M10.785 20.723c0-6.657 3.516-10.102 10.195-10.102h21.047v-.586c0-4.828-2.46-7.265-7.36-7.265H9.638c-4.899 0-7.36 2.437-7.36 7.265v24.656c0 4.852 2.461 7.266 7.36 7.266h1.148Zm10.57 32.508h25.032c4.875 0 7.336-2.415 7.336-7.243V21.074c0-4.828-2.461-7.265-7.336-7.265H21.356c-4.922 0-7.36 2.437-7.36 7.265v24.914c0 4.828 2.438 7.243 7.36 7.243m12.563-9.165c-1.078 0-1.945-.867-1.945-2.039v-6.515h-6.586c-1.078 0-2.063-.938-2.063-2.016c0-1.031.985-1.992 2.063-1.992h6.586v-6.492c0-1.149.867-2.016 1.945-2.016s1.922.867 1.922 2.016v6.492h6.375c1.195 0 2.18.914 2.18 1.992c0 1.102-.985 2.016-2.18 2.016H35.84v6.515c0 1.172-.844 2.04-1.922 2.04"/></svg>
      Add Model
    </div>
    <div
        class=" px-5 pb-4 space-y-5 pt-2  ">
      <label
          class="form-control    ">
        <div
            class="border-2 w-full  flex items-center justify-center ">
          <div class="w-full max-w-sm">
            <div
                class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
              <span class="text-white">What is Model Name ?</span>
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
          <button :disabled="!group"
                  @click="confirmSubmit"
                  className="btn bg-gradient-to-t from-sky-950 to-sky-800 hover:opacity-90 hover:text-yellow-400  w-44 border-none text-white shadow-sm shadow-gray-950">
            Confirm
          </button>
          <button :disabled="!group"
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