<script setup lang="ts">

import { useHead } from '@unhead/vue';

import { useApplicationStore } from '~/app';
import { SysButton } from '~/design/system/components';

useHead({
  title: 'Arcspace',
});

let appStore = useApplicationStore();

</script>

<template>
  <main>
    <h1>Arcspace</h1>

    <SysButton
      html-type="button"
      @click="appStore.nextTheme()"
    >
      {{ appStore.theme }}
    </SysButton>
  </main>
</template>
