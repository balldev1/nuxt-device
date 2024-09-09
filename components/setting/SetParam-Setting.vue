<template>
  <div>
    <div  v-if="selectedParameter === 'Parameter'" >
      <ParameterConfigSetting />
    </div>
    <div v-if="selectedParameter === 'Home'">
      <WelcomeDashboardSetting/>
    </div>
    <!-- Use the selectedParameter value here -->
    <div v-if="selectedParameter === 'Addmodel'">
      <AddModelSetting/>
    </div>
    <div v-if="selectedParameter === 'Addgroup'">
      <AddGroupSetting/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import AddGroupSetting from "~/components/setting/AddGroup-Setting.vue";
import WelcomeDashboardSetting from "~/components/setting/WelcomeDashboard-Setting.vue";
import AddModelSetting from "~/components/setting/AddModel-Setting.vue";
import ParameterConfigSetting from "~/components/setting/ParameterConfig-Setting.vue";

interface Device {
  _id: string;
  name: string;
  model: string;
  gateway: string;
  group: string;
  parent_group: string;
}

const props = defineProps<{
  selectedParameter: string | null;
}>();

const route = useRoute();
const id = route.params.id as string;
const error = ref<string | null>(null);
const isLoading = ref(true);
const device = ref<Device | null>(null);

const fetchData = async () => {
  if (!props.selectedParameter || !id) {
    error.value = 'Missing required parameters';
    isLoading.value = false;
    return;
  }
  try {
    const response = await axios.get(`/api/parameter/${id}`);
    device.value = response.data;
    // console.log(device.value);
  } catch (err: any) {
    error.value = err.message;
    console.error('Error fetching data:', err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>
