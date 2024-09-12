<script setup lang="ts">
import { toRefs, computed } from 'vue';

import type { AppIconButtonProps } from './types';

let props = withDefaults(defineProps<AppIconButtonProps>(), {
  htmlType: 'button',
  type: 'fill',
  shape: 'circle',
  width: 24,
});

let {
  htmlType, type, shape, width,
} = toRefs(props);

let classes = computed(() => {
  return {
    'app-btn icon-btn font-label font-typescale-large': true,
    'icon-btn--fill': type.value === 'fill',
    'icon-btn--outline': type.value === 'outline',
    'icon-btn--rounded': shape.value === 'circle',
    'icon-btn--square': shape.value === 'square',
  };
});
</script>

<template>
  <button
    :type="htmlType"
    :class="classes"
  >
    <slot />
  </button>
</template>

<style scoped>
.icon-btn {
  display: grid;
  place-items: center;

  aspect-ratio: 1;
  padding: 1rem;

  font-size: calc(v-bind(width) / 2 * 1px);
  color: var(--app-color-on-surface-container);

  &--square {
    border-radius: 1rem;
  }

  &--rounded {
    border-radius: 50%;
  }

  &--fill {
    background: var(--app-color-surface-container);

    &:hover {
      background: var(--app-color-surface-container-high);
    }
  }

  &--outline {
    color: var(--app-color-primary);
    background-color: color-mix(in hsl, var(--app-color-surface) 10%, var(--app-color-surface) 10%);
    border: 1px solid var(--app-color-outline);

    &:hover,
    &:focus-visible {
      color: var(--app-color-primary);
      background: var(--app-state-layer-primary-8);
      border-color: var(--app-color-primary);
    }

    &:disabled {
      color: var(--app-state-layer-on-surface);
      background-color: var(--app-state-layer-on-primary-12);
    }
  }
}
</style>
