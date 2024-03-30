import { useRouter as useDefaultRouter } from 'vue-router';

import type { Router, NavigationFailure, RouteLocationPathRaw } from 'vue-router';

import type { Routes } from '../types';

interface CustomRouter extends Router {
  push: (to: Routes | RouteLocationPathRaw | { name: Routes, }) =>
  Promise<void | NavigationFailure | undefined>;
}

export const useRouter = (): CustomRouter => {
  const options = useDefaultRouter();

  const push: CustomRouter['push'] = (to) => {
    return options.push(to);
  };

  return {
    ...options,
    push,
  };
};
