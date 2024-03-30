import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const routes = [
  {
    name: 'notfound',
    path: '/:pathMatch(.*)*',
    component: () => import('~/views/pages/notfound.vue'),
  },
  {
    path: '/',
    component: () => import('~/views/layouts/default.vue'),
    children: [
      {
        name: 'homepage',
        path: '',
        component: () => import('~/views/pages/homepage.vue'),
      },
      {
        path: '/_design',
        component: () => import('~/views/pages/design.vue'),
      }
    ],
  }
] as const satisfies RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export { router };
