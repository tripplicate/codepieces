import type { RouteRecordRaw } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('~/views/layouts/default.vue'),
    children: [
      {
        name: 'notfound',
        path: ':CatchAll(.*)*',
        alias: '/notfound',
        component: () => import('~/views/pages/notfound.vue'),
      },
      {
        name: 'index',
        path: '',
        component: () => import('~/views/pages/index.vue'),
      },
    ],
  },
] as const satisfies RouteRecordRaw[]
