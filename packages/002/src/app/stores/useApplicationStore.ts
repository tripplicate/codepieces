import {
  ref,
  toRefs,
  readonly,
  watchEffect,
} from 'vue';

import { useColorMode, useCycleList, type BasicColorSchema } from '@vueuse/core';
import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('application', () => {
  const state = ref({
    theme: 'auto',
  });

  const { store } = useColorMode({
    attribute: 'data-theme',
    storageKey: 'theme',
  });

  const { state: currentTheme, next: nextTheme } = useCycleList<BasicColorSchema>(['light', 'dark', 'auto'], {
    initialValue: store,
  });

  watchEffect(() => {
    state.value.theme = currentTheme.value;

    store.value = currentTheme.value;
  });

  return {
    ...toRefs(readonly(state.value)),
    nextTheme,
  };
});
