<script setup lang="ts">
import type { SysButtonProps } from './types';

defineProps<SysButtonProps>();
</script>

<template>
  <button
    :type="htmlType"
    class="btn"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  cursor: pointer;
  color: var(--sys-color-on-surface-container);
  background: var(--sys-color-surface-container);
  border: none;
}
</style>
