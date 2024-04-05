<script setup lang="ts">
import { Icon } from '@iconify/vue';

type SysButtonProps = {

  /**
   * @type {string}
   */
  htmlType: HTMLButtonElement['type'],
};

defineProps<SysButtonProps>();
</script>

<template>
  <button
    :type="htmlType"
    class="btn"
  >
    <span class="btn__text">

      <slot />
    </span>

    <span class="btn__icon">
      <Icon icon="ri:arrow-right-up-line" />
    </span>
  </button>
</template>

<style scoped>
.btn {
  cursor: pointer;

  display: flex;
  align-items: center;

  width: fit-content;
  padding: 0;

  background: none;
  border: none;

  &:hover :is(&__text, &__icon) {
    color: white;
    background: black;
  }

  &__text {
    padding: 0.5vw 1.5vw;

    font-size: 1vw;
    font-weight: 500;
    color: black;
    text-transform: uppercase;

    background: white;
    border-radius: 2vw;

    transition: background 0.25s, color 0.25s;
  }

  &__icon {
    display: grid;
    place-items: center;

    aspect-ratio: 1;
    width: 2.5vw;
    margin-left: -0.15vw;

    font-size: 1.5vw;
    color: black;

    background: white;
    border-radius: 50%;

    transition: background 0.25s, color 0.25s;
  }
}
</style>
