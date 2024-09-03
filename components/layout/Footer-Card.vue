<template>
  <div :class="[isSidebarVisible ? 'flex items-center justify-center bottom-0 ml-[16rem] w-[74rem] bg-sky-950   h-10'
                  :
                  'flex items-center justify-center bottom-0 ml-[120px] w-[82rem] bg-sky-950 h-10'
                  ]">
    <div>
      <h1 class="text-lime-400 text-sm font-semibold">Copyright © 2024 - Modern Networks Co., Ltd By Balldev</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  toggleSidebar: Function,
  isSidebarVisible: Boolean
});
</script>