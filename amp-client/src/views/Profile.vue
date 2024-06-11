<template>
<!-- sidebar -->
<div class="bg-gray-100 min-h-screen">
  <!-- Header -->
  <Header />

  <!-- postcard -->
  <div class="flex-1  items-center justify-center mt-10">
    <!-- user card -->
    <div class="max-w-sm mx-auto mt-3 bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- user_name -->
      <div class="px-6 py-4">
        <input type="text" class="text-xl font-bold text-gray-900" placeholder="user name">
      </div>

      <!-- categories -->
      <div class="px-6 py-4 border-gray-200">
        <input class="font-bold text-gray-700" placeholder="categories">
        <ul class="list-disc list-inside mt-2">
          <input placeholder="item1">
          <input placeholder="item2">
        </ul>
      </div>

      <!-- submmit -->
      <div class="flex justify-end p-3">
        <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">変更</button>
      </div>
    </div>
  </div>

  <!-- status-bar -->
  <div class="flex items-center justify-center h-16">
    <p>user icon</p>
  </div>

</div>

</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>

<style>
</style>