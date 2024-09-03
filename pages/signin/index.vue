<template>
  <div
      class="min-h-screen flex items-center  justify-center w-full bg-cover bg-center text-white bg-no-repeat bg-fixed "
      :style="{ backgroundImage: `url('/bg.webp')` }"
  >
    <SignInCard/>
  </div>
</template>

<script setup lang="ts">
import SignInCard from "~/components/signin/SignIn-Card.vue";
</script>