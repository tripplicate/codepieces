import type { RouteRecordRaw } from 'vue-router';

import type { routes } from './router';

type RouteNames<T extends RouteRecordRaw[], K extends RouteRecordRaw = T[number]> =
  K extends { children: RouteRecordRaw[], }
    ? K extends { name: RouteRecordRaw['name'], } ? K['name'] | RouteNames<K['children']> : RouteNames<K['children']>
    : K extends { name: RouteRecordRaw['name'], } ? K['name'] : never;

export type Routes = RouteNames<typeof routes>;
