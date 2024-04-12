import { disableCache } from '@iconify/vue';

import { defineExtension } from '..';

export default defineExtension({
  install() {
    disableCache('all');
  },
});
