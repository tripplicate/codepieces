import { defineExtension } from '..';

import { router } from './router';

export { default as CustomLink } from './components/CustomLink.vue';

export * from './composables';

export * from './types';

export default defineExtension({
  install(ctx) {
    ctx.use(router);
  },
});
