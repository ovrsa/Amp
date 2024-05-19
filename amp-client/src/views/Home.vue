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

  <!-- postcard -->
  <div class="flex-1  items-center justify-center mt-10">
    <!-- user card -->
    <div class="max-w-sm mx-auto mt-3 bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- user_name -->
      <div class="px-6 py-4">
        <p class="text-xl font-bold text-gray-900">{{ user_name }}</p>
      </div>

      <!-- categories -->
      <div class="px-6 py-4 border-gray-200">
        <p class="font-bold text-gray-700">Categories</p>
        <ul class="list-disc list-inside mt-2">
          <li v-for="category in categories" :key="category">{{ category }}</li>
        </ul>
      </div>

      <!-- items -->
      <div class="px-6 py-4 border-gray-200">
        <p class="font-bold text-gray-700">Items</p>
        <ul class="list-disc list-inside mt-2">
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
    <!-- user card -->
    <div class="max-w-sm mx-auto mt-3 bg-white shadow-lg rounded-lg overflow-hidden">
      <!-- user_name -->
      <div class="px-6 py-4">
        <p class="text-xl font-bold text-gray-900">{{ user_name }}</p>
      </div>

      <!-- categories -->
      <div class="px-6 py-4 border-gray-200">
        <p class="font-bold text-gray-700">Categories</p>
        <ul class="list-disc list-inside mt-2">
          <li v-for="category in categories" :key="category">{{ category }}</li>
        </ul>
      </div>

      <!-- items -->
      <div class="px-6 py-4 border-gray-200">
        <p class="font-bold text-gray-700">Items</p>
        <ul class="list-disc list-inside mt-2">
          <li v-for="item in items" :key="item">{{ item }}</li>
        </ul>
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
import { ref } from 'vue';

const user_name = ref('Kyo Yamasaki');
const categories = ref(['sample1', 'sample2']);
const items = ref(['sample1', 'sample2']);
</script>

<style>
</style>