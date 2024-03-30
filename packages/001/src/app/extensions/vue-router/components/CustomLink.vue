<script setup lang="ts">
import { type RouterLinkProps, type RouteLocationPathRaw } from 'vue-router';

import type { Routes } from '../types';

defineOptions({
  inheritAttrs: true,
});

defineProps<RouterLinkProps & {

  /**
   * @type {string | object}
   */
  to: string | RouteLocationPathRaw | { name: Routes, },
}>();

</script>

<template>
  <RouterLink
    v-bind="$props"
    :to="to"
  >
    <slot />
  </RouterLink>
</template>
