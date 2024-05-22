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
  
    <!-- user-card -->
    <div class="flex-1 items-center justify-center mt-10">
      <div v-for="user in users" :key="user.id" class="max-w-sm mx-auto mt-3 bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- user_name -->
        <div class="px-6 py-4">
          <p class="text-xl font-bold text-gray-900">{{ user.userName }}</p>
        </div>
  
        <!-- categories -->
        <div class="px-6 py-4 border-t border-gray-200">
          <div v-for="userCategory in user.user_categories" :key="userCategory.id" class="mt-4">
            <div class="bg-gray-100 p-4 rounded-lg shadow-md">
              <p class="font-bold text-gray-800">{{ userCategory.category.categoryName }}</p>
              <div class="mt-2">
                <div v-for="userItem in userCategory.user_items" :key="userItem.id" class="bg-white p-2 rounded-lg shadow-sm mt-2">
                  {{ userItem.item.itemName }}
                </div>
              </div>
            </div>
          </div>
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
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { User } from '../types/interfaces';

const users = ref<User[]>([]);

const fetchUsers = async () => {
  try {
    const response = await axios.get<User[]>('http://localhost:3000/users');
    users.value = response.data;
  } catch (error) {
    console.error(`Error fetching users: ${error}`);
  }
};

onMounted(() => {
  fetchUsers();
});
</script>

<style>
</style>