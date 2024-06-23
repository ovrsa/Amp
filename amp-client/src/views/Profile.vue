<template>
  <div class="bg-gray-100 min-h-screen">
    <Header />

    <!-- user-card -->
    <div class="text-sm text-gray-600 flex justify-center items-center py-8">
      <div class="w-full max-w-4xl">
        <div class="flex flex-col md:flex-row">
          <!-- user_photo -->
          <div class="flex justify-center items-center p-4 md:w-1/3">
            <div class="text-center">
              <img src="https://via.placeholder.com/130" alt="User Photo" class="mx-auto">
              <p class="mt-4 text-sm">sample</p>
            </div>
          </div>
          <!-- categories and items -->
          <div class="md:w-2/3">
            <div class="mt-1 md:mt-0">
              <div class="p-3">
                <!-- <p class="text-gray-700">映画</p> -->
                <div class="mt-1">
                  <router-link to="/discovery">
                    映画
                  </router-link>
                </div>
                <div class="mt-2">
                  <router-link to="/discovery" class="px-2 pt-1">
                    ハリーポッター
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- edit button -->
    <div class="flex justify-end">  
      <router-link to="/profile/edit" class="text-sm">
        Edit
      </router-link>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>

<style>
</style>