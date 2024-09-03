<template>
  <div class="min-h-screen w-full flex flex-col  bg-gray-100 ">
    <!-- ส่ง ฟันชั่น กับ ค่า sidebar เป็น prop -->
    <SideBarCard
        v-if="showSidebar"
        :isSidebarVisible="isSidebarVisible"
        :toggleSidebar="toggleSidebar"
    />
    <div
        :class="[
      (route.path === '/signin' || route.path === '/') ? 'pl-0 min-h-screen' :
      isSidebarVisible ? 'pl-64 min-h-screen' :
      'pl-32 min-h-screen'
    ]"
    >
      <router-view />
    </div>
    <FooterCard
        v-if="showSidebar"
        :isSidebarVisible="isSidebarVisible"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useRoute} from 'vue-router';
import SideBarCard from "~/components/layout/SideBar-Card.vue";
import FooterCard from "~/components/layout/Footer-Card.vue";

const isSidebarVisible = ref(true);
const route = useRoute();
// เปลี่ยนเส้นทางที่ไม่ต้องการให้แสดง sidebar
const showSidebar = computed(() => {
  return route.path !== '/signin' && route.path !== '/';
});

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs'
  script.type = 'module'
  document.head.appendChild(script)
})
</script>