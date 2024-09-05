<template>
  <div>
    <div v-if="!selectedParameter">
      <WelcomeDashboardSetting/>
    </div>
    <!-- Use the selectedParameter value here -->
    <div v-if="selectedParameter === 'Addmodel'">
      <AddModelSetting/>
    </div>
    <div v-if="selectedParameter === 'Addgroup'">
      <AddGroupSetting/>
    </div>
    <div v-if="selectedParameter === 'System'">
      <AddSystemSetting/>
    </div>
    <div v-if="selectedParameter === 'Nat'">  NAT Forwarding Content</div>
    <div v-if="selectedParameter === 'Multi'">Multi-SSID Content</div>
    <div v-if="selectedParameter === 'Network'">Network Map Content</div>
    <div v-if="selectedParameter === 'Parental'">Parental Controls Content</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import AddGroupSetting from "~/components/setting/AddGroup-Setting.vue";
import AddSystemSetting from "~/components/setting/AddSystem-Setting.vue";
import WelcomeDashboardSetting from "~/components/setting/WelcomeDashboard-Setting.vue";
import AddModelSetting from "~/components/setting/AddModel-Setting.vue";

const props = defineProps<{
  selectedParameter: string | null;
}>();
</script>
