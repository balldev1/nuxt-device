<template>dog
<!--  <div class="max-h-[400px] overflow-y-auto  container border-2 max-w-[500px] mx-auto p-4">-->
<!--    <input-->
<!--        type="text"-->
<!--        v-model="searchQuery"-->
<!--        placeholder="Search..."-->
<!--        class="p-2 border rounded"-->
<!--    />-->
<!--    <ul class="mt-4">-->
<!--      <li v-for="item in filteredItems" :key="item.id" class="py-2 border-b">-->
<!--        {{ item.label }}-->
<!--      </li>x-->
<!--    </ul>-->
<!--  </div>-->
</template>

<script setup>
// import { ref, computed } from 'vue';

// Example data
// const items = ref([
//   {id: 1, label: 'item 1'},
//   {id: 2, label: 'item 2'},
//   {id: 3, label: 'item 3'},
//   {id: 4, label: 'item 4'},
//   {id: 5, label: 'item 5'},
//   {id: 6, label: 'item 6'},
//   {id: 7, label: 'item 7'},
//   {id: 8, label: 'item 8'},
//   {id: 9, label: 'item 9'},
//   {id: 10, label: 'item 10'}
// ]);

// Search query state
// const searchQuery = ref('');

// Computed property for filtered items based on search query
const filteredItems = computed(() => {
  return items.value.filter(item =>
      item.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

</script>


