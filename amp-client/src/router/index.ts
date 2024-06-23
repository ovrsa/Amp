import NotFound from '@/views/404.vue';
import Discovery from '@/views/Discovery.vue';
import Edit from '@/views/Edit.vue';
import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/discovery',
    name: 'Discovery',
    component: Discovery,
  },
  {
    path: '/profile/edit',
    name: 'Edit',
    component: Edit,
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
