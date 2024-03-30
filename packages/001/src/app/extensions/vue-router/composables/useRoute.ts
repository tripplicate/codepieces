import { useRoute as useDefaultRoute, type RouteLocationNormalizedLoaded } from 'vue-router';

import type { Routes } from '../types';

type CustomRouteLocationNormalizedLoaded = RouteLocationNormalizedLoaded & {
  name: Routes,
};

export const useRoute = (): CustomRouteLocationNormalizedLoaded => {
  return useDefaultRoute() as CustomRouteLocationNormalizedLoaded;
};
