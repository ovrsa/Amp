import NotFound from '@/views/404.vue';
import Edit from '@/views/Edit.vue';
import Home from '@/views/Home.vue';
import Search from '@/views/Search.vue';
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
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: NotFound 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
