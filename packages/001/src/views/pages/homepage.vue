<script setup lang="ts">
import { useHeadSafe } from '@unhead/vue';

import { HeroSection } from '~/modules/homepage';

useHeadSafe({
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
    min-height: 100lvh;
    padding: 2vw;
  }
}
</style>
