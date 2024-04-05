import type { RouteRecordRaw } from 'vue-router';

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
      }
    ],
  }
] as const satisfies RouteRecordRaw[];
