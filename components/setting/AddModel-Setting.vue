<template>
  <div class="bg-gray-200 rounded-md  shadow-sm  shadow-gray-950">
    <div
        class="flex gap-2 items-center justify-center text-white  mb-5 bg-gradient-to-t from-sky-950 to-sky-800 py-2 rounded-t-md shadow-sm shadow-gray-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
           viewBox="0 0 56 56">
        <path fill="currentColor"
              d="M10.785 20.723c0-6.657 3.516-10.102 10.195-10.102h21.047v-.586c0-4.828-2.46-7.265-7.36-7.265H9.638c-4.899 0-7.36 2.437-7.36 7.265v24.656c0 4.852 2.461 7.266 7.36 7.266h1.148Zm10.57 32.508h25.032c4.875 0 7.336-2.415 7.336-7.243V21.074c0-4.828-2.461-7.265-7.336-7.265H21.356c-4.922 0-7.36 2.437-7.36 7.265v24.914c0 4.828 2.438 7.243 7.36 7.243m12.563-9.165c-1.078 0-1.945-.867-1.945-2.039v-6.515h-6.586c-1.078 0-2.063-.938-2.063-2.016c0-1.031.985-1.992 2.063-1.992h6.586v-6.492c0-1.149.867-2.016 1.945-2.016s1.922.867 1.922 2.016v6.492h6.375c1.195 0 2.18.914 2.18 1.992c0 1.102-.985 2.016-2.18 2.016H35.84v6.515c0 1.172-.844 2.04-1.922 2.04"/>
      </svg>
      Add Model
    </div>
    <div
        class=" px-5 pb-4 space-y-5 pt-2  ">
      <div
          class="  grid grid-cols-2 gap-5  ">
        <div
            class=" w-full  flex items-center justify-center ">
          <div class="w-full ">
            <div
                class="label badge rounded-md p-2  py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
              <span class="text-white">What is Product ?</span>
            </div>
            <multiselect
                v-model="munufacturerSeleted"
                :options="munufacturerName"
                :multiple="false"
                :taggable="true"
                @tag="addMunufacturer"
                :close-on-select="true"
                tag-placeholder="Press enter to create manufacturer"
                placeholder="เลือกหรือเพิ่มข้อมูลใหม่"
                class=" rounded-md border-none bg-white shadow-sm shadow-sky-950
                 focus:outline-none focus:shadow-sky-950 focus:shadow
                 placeholder:text-sm placeholder:bade"
            />
          </div>
        </div>
        <div
            class=" w-full  flex items-center justify-center ">
          <div class="w-full max-w-sm">
            <div
                class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
              <span class="text-white">What is Model ?</span>
            </div>
            <multiselect
                :disabled="!munufacturerSeleted "
                v-model="modelSeleted"
                :options="modelName"
                :multiple="false"
                :taggable="true"
                @tag="addModelName"
                :close-on-select="true"
                tag-placeholder="Press enter to create manufacturer"
                placeholder="เลือกหรือเพิ่มข้อมูลใหม่"
                class=" rounded-md border-none bg-white  shadow-sm shadow-sky-950
                 focus:outline-none focus:shadow-sky-950 focus:shadow
                 placeholder:text-sm placeholder:bade"
            />
          </div>
        </div>
        <div
            class=" w-full  flex items-center justify-center ">
          <div class="w-full ">
            <div
                class="label badge rounded-md p-2 py-3  bg-gradient-to-t from-sky-950 to-sky-800 border-none shadow-sm shadow-sky-950 ">
              <span class="text-white">What is Software Version ?</span>
            </div>
            <multiselect
                :disabled="!modelSeleted || !munufacturerSeleted"
                v-model="softwareversionSeleted"
                :options="softwareversionName"
                :multiple="false"
                :taggable="true"
                @tag="addSoftwareVersion"
                :close-on-select="true"
                tag-placeholder="Press enter to create manufacturer"
                placeholder="เลือกหรือเพิ่มข้อมูลใหม่"
                class="multiselect-custom rounded-md border-none bg-white shadow-sm shadow-sky-950
                 focus:outline-none focus:shadow-sky-950 focus:shadow
                 placeholder:text-sm placeholder:bade"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center">
        <h1 class="badge bg-yellow-300 border-none px-4 py-4 mt-2 rounded-lg shadow-sm shadow-gray-950 text-md  text-black font-bold ">
          กรุณาตรวจสอบความเรียบร้อยก่อนกดยืนยัน </h1>
        <div class="flex  items-center justify-center gap-6 pt-6">
          <button :disabled="!modelSeleted ||!munufacturerSeleted ||!softwareversionSeleted"
                  @click="confirmSubmit"
                  className="btn bg-gradient-to-t from-sky-950 to-sky-800 hover:opacity-90 hover:text-yellow-400  w-44 border-none text-white shadow-sm shadow-gray-950">
            Confirm
          </button>
          <button :disabled="!modelSeleted ||!munufacturerSeleted ||!softwareversionSeleted"
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
import Multiselect from 'vue-multiselect'

const selectedMode = ref('');
const getModel = ref<any>([]);
const modelName = ref<any>([]);
const modelSeleted = ref<any>(null); // เก็บค่าที่เลือก
const munufacturerName = ref<any>([]);
const munufacturerSeleted = ref<any>(null); // เก็บค่าที่เลือก
const softwareversionName = ref<any>([]);
const softwareversionSeleted = ref<any>(null); // เก็บค่าที่เลือก
const error = ref<string | null>(null);
const isLoading = ref(true);

const addModelName = (newTag:any) => {
  modelName.value.unshift(newTag);
  modelSeleted.value = newTag;
}

const addMunufacturer = (newTag:any) => {
  munufacturerName.value.unshift(newTag);
  munufacturerSeleted.value = newTag;
}

const addSoftwareVersion = (newTag:any) => {
  softwareversionName.value.unshift(newTag);
  softwareversionSeleted.value = newTag;
}
// ฟังก์ชันดึงข้อมูลทั้งหมดตอนเริ่มต้น
const fetchData = async () => {
  try {
    const response = await axios.get('/api/model/');
    getModel.value = response.data;
    munufacturerName.value = Array.from(new Set(getModel.value.map((item: any) => item.munufacturer)));
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
    modelSeleted.value = '';
    munufacturerSeleted.value = '';
    softwareversionSeleted.value = '';
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
    if (!modelSeleted.value || !munufacturerSeleted.value || !softwareversionSeleted.value) {
      Swal.fire('Error', 'Please fill in all fields.', 'error');
      return;
    }

    try {
      const response = await axios.post('/api/model', {
        name: modelSeleted.value,
        munufacturer: munufacturerSeleted.value,
        softwareversion: softwareversionSeleted.value,
      });

      // ตรวจสอบว่ามี error จาก server เช่น ข้อมูลซ้ำ
      if (response.data.error === 'Duplicate data found') {
        Swal.fire('Error', 'Duplicate data found. Please provide unique values.', 'error');
        // รีเซ็ตค่าเมื่อข้อมูลซ้ำ
        modelSeleted.value = '';
        munufacturerSeleted.value = '';
        softwareversionSeleted.value = '';
        return;
      }

      Swal.fire('Success', 'Group created successfully!', 'success');
    } catch (err:any) {
      error.value = err.message;
      console.error('Error submitting data:', err);
      Swal.fire('Error', 'Error submitting data.', 'error');
    }
  }
};

// เรียกใช้ fetchData ตอน component ถูก mounted
onMounted(() => {
  fetchData();
});

// Watcher เพื่อติดตามการเปลี่ยนแปลงของ munufacturerSeleted
watch(munufacturerSeleted, async (newVal) => {
  // รีเซ็ตค่า modelName และ softwareversionName ก่อน
  modelName.value = [];
  softwareversionName.value = [];
  modelSeleted.value = null; // รีเซ็ตค่า model ที่เลือก
  softwareversionSeleted.value = null; // รีเซ็ตค่า software version ที่เลือก

  if (newVal) {
    // ดึงข้อมูลใหม่จาก API ที่กรองตาม munufacturer ที่เลือก
    try {
      const response = await axios.get(`/api/model?munufacturer=${encodeURIComponent(newVal)}`);
      const filteredData = response.data.filter((item: any) => item.munufacturer === newVal);

      // กรองและตั้งค่าค่าเฉพาะชื่อ model และ software version
      modelName.value = Array.from(new Set(filteredData.map((item: any) => item.name)));
      softwareversionName.value = Array.from(new Set(filteredData.map((item: any) => item.softwareversion)));
    } catch (err: any) {
      error.value = err.message;
      console.error('Error fetching filtered data:', err);
    }
  }
});

watch(modelSeleted, (newVal) => {
  if (!newVal) {
    softwareversionName.value = [];
    softwareversionSeleted.value = null; // รีเซ็ต software version ที่เลือกด้วย
  }
});

// Watchers to clear values based on conditions
watch(munufacturerSeleted, (newVal) => {
  if (!newVal) {
    modelSeleted.value = '';
    softwareversionSeleted.value = '';
  }
});
//
watch(munufacturerSeleted, (newVal) => {
  if (!newVal) {
    softwareversionSeleted.value = '';
  }
});

</script>

<style>
</style>