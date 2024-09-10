<template>
  <multiselect
      v-model="selected"
      :options="options"
      :multiple="false"
      :taggable="true"
      @tag="addTag"
      :close-on-select="true"
      tag-placeholder="Press enter to create manufacturer"
  placeholder="เลือกหรือเพิ่มข้อมูลใหม่"
  class="rounded-md border-none bg-white shadow-sm shadow-sky-950
  focus:outline-none focus:shadow-sky-950 focus:shadow
  placeholder:text-sm placeholder:bade"
  />
</template>

<script setup>
import { ref } from 'vue';
import Multiselect from 'vue-multiselect';

const selected = ref(null);
const options = ref(['Option 1', 'Option 2', 'Option 3']);

const addTag = (newTag) => {
  options.value.unshift(newTag);
  selected.value = newTag;
}
</script>
