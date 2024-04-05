<script setup lang="ts">
import { useHead } from '@unhead/vue';

import { HeroSection } from '~/modules/homepage';

useHead({
  title: 'Creacy',
});

</script>

<template>
  <main class="homepage">
    <div class="homepage__hero-wrapper">
      <HeroSection />
    </div>
  </main>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-flow: column;

  &__hero-wrapper {
    display: flex;
    min-height: 100dvh;
    padding: 2vw;
  }
}
</style>
