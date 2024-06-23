<template>
  <div class="flex justify-between items-center w-full p-4 bg-gray-100">
    <div class="flex-1">
      <router-link to="/">
        <h1 class="text-sm">Amp</h1>
      </router-link>
    </div>
    <div class="flex-1 flex justify-center">
      <div class="relative text-sm flex space-x-2 bg-gray-200 p-1 rounded-full">
        <div class="absolute inset-0 w-1/3 h-full bg-gray-500 rounded-full transition-all duration-300 ease-in-out" :style="activeStyle"></div>
        <router-link to="/" class="relative z-10 px-4 py-1 text-gray-500 rounded-full" active-class="active-link" exact>Home</router-link>
        <router-link to="/discovery" class="relative z-10 px-4 py-1 text-gray-500 rounded-full" active-class="active-link">Discovery</router-link>
        <router-link to="/profile" class="relative z-10 px-4 py-1 text-gray-500 rounded-full" active-class="active-link">Profile</router-link>
      </div>
    </div>
    <div class="flex-1"></div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    const activeStyle = computed(() => {
      const baseTransform = 'translateX(';
      const percentage = route.path === '/' ? '0%' : route.path === '/discovery' ? '100%' : route.path === '/profile' ? '200%' : '0%';
      return { transform: `${baseTransform}${percentage})` };
    });

    return {
      activeStyle
    };
  }
}
</script>

<style scoped>
.active-link {
  @apply text-white;
}

.relative > .absolute {
  width: 33.3333%;
  height: 100%;
  background-color: #4B5563; /* bg-gray-500 */
  border-radius: 9999px; /* rounded-full */
  transition: all 0.3s ease-in-out;
}
</style>