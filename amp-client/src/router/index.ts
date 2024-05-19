import Edit from '@/views/Edit.vue';
import Home from '@/views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
