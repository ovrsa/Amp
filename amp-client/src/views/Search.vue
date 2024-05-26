<template>
  
<div class="bg-gray-100 min-h-screen">
  <!-- Header -->
  <Header />

  <!-- search -->
  <div class="flex-1 flex flex-col items-center justify-center mt-10 space-y-4">
    <input type="text" placeholder="Category" class="w-1/2 h-10 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
    <input type="text" placeholder="Item" class="w-1/2 h-10 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
    <button class="w-1/2 h-10 p-2 border hover:bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300">Search</button>
  </div>


</div>

</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>

<style>
</style>