<template>
    <div class="flex justify-between items-center w-full p-4 bg-gray-100">
      <div class="flex-1">
        <h1 class="text-lg">Amp</h1>
      </div>
      <div class="flex-1 flex justify-center">
        <div class="relative text-sm flex space-x-2 bg-gray-200 p-1 rounded-full">
          <div class="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out" :style="activeStyle"></div>
          <router-link to="/" class="relative z-10 px-4 py-1 text-gray-500 rounded-full" active-class="active-link" exact>Home</router-link>
          <router-link to="/search" class="relative z-10 px-4 py-1 text-gray-500 rounded-full" active-class="active-link">Discovery</router-link>
          <router-link to="/edit" class="relative z-10 px-4 py-1 text-gray-500 rounded-full" active-class="active-link">Profile</router-link>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
import { useRoute } from 'vue-router';
  
  const route = useRoute();
  
  const activeStyle = computed(() => {
    const baseTransform = 'translateX(';
    const percentage = route.path === '/' ? '0%' : route.path === '/search' ? '100%' : route.path === '/edit' ? '200%' : '0%';
    return { transform: `${baseTransform}${percentage})` };
  });
  </script>
  
  <style scoped>
  .active-link {
    @apply text-white;
  }
  
  .relative .absolute {
    width: 33.3333%;
    height: 100%;
    background-color: #4B5563; /* bg-gray-500 */
    border-radius: 9999px; /* rounded-full */
    transition: transform 0.3s ease-in-out;
  }
  </style>