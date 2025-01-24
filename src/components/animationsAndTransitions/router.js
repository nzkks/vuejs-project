import { createRouter, createWebHistory } from 'vue-router';

import PageOne from './pages/PageOne.vue';
import PageTwo from './pages/PageTwo.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: PageOne },
    { path: '/page2', component: PageTwo },
  ],
});

export default router;
