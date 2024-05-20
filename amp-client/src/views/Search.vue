<template>
<!-- sidebar -->
<div class="flex bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100">
  <!-- sidebar -->
  <div class="flex flex-col w-60 h-screen">
    <div class="flex items-center justify-center h-16">
      <h1 class="text-xl">Amp</h1>
    </div>
    <div class="flex flex-col items-center justify-start pt-4">
      <router-link to="/" class="p-4">Home</router-link>
      <router-link to="/about" class="p-4">Discovery</router-link>
    </div>
  </div>

  <!-- search -->
  <div class="flex-1 flex flex-col items-center justify-center mt-10 space-y-4">
    <input type="text" placeholder="Category" class="w-1/2 h-10 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
    <input type="text" placeholder="Item" class="w-1/2 h-10 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
    <button class="w-1/2 h-10 p-2 border hover:bg-gray-200 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300">Search</button>
  </div>

  <!-- status-bar -->
  <div class="flex items-center justify-center h-16">
    <p>user icon</p>
  </div>

</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const user_name = ref('Kyo Yamasaki');
const categories = ref(['sample1', 'sample2']);
const items = ref(['sample1', 'sample2']);
</script>

<style>
</style>