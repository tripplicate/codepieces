<script setup lang="ts">
import { toRefs, computed } from 'vue';

import type { AppButtonProps } from './types';

let props = withDefaults(defineProps<AppButtonProps>(), {
  htmlType: 'button',
  type: 'fill',
  iconPosition: 'left',
  state: () => ({
    disabled: false,
    loading: false,
  }),
});

let {
  htmlType,
  type,
  state,
  width,
} = toRefs(props);

const classes = computed(() => {
  return {
    'app-btn btn font-label font-typescale-large': true,
    'btn--fill': type.value === 'fill',
    'btn--outline': type.value === 'outline',
    'btn--disabled': state.value?.disabled,
    'btn--loading': state.value?.loading,
    'btn--width-auto': width.value === 'auto',
    'btn--width-max': width.value === 'max',
  };
});
</script>

<template>
  <button
    :type="htmlType"
    :class="classes"
    :tabindex="state.disabled ? -1 : 0"
    :disabled="state.disabled || state.loading"
  >
    <span
      v-if="$slots.iconLeft"
      class="btn__icon"
    >
      <slot
        name="iconLeft"
      />
    </span>

    <span class="btn__content">
      <span v-if="state.loading">loading</span>

      <slot v-else />
    </span>

    <span
      v-if="$slots.iconRight"
      class="btn__icon"
    >
      <slot
        name="iconRight"
      />
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  padding: 0.5rem 1.5rem;

  border-radius: 2rem;

  &__icon {
    display: grid;
    flex: 0 0;
    place-items: center;
  }

  &__content {
    flex: 1 0;
  }

  &--width-auto {
    max-width: 100%;
  }

  &--width-max {
    width: 100%;
  }

  &:where(&--width-auto, &--width-max) &__content {
    overflow-x: hidden;
    display: block;
    text-overflow: ellipsis;
  }

  &--fill {
    color: var(--app-color-on-primary);
    background: var(--app-color-primary);

    &:hover,
    &:focus-visible {
      background: var(--app-state-layer-on-primary-8);
    }

    &:disabled {
      color: var(--app-state-layer-on-surface);
      background-color: var(--app-state-layer-on-primary-12);
    }
  }

  &--outline {
    color: var(--app-color-primary);
    background: none;
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
