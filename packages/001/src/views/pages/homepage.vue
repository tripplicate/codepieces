<script setup lang="ts">
import { useHead } from '@unhead/vue';

import {
  Hero,
  Awards,
  AboutUs,
  OurWork,
  ContactUs,
  OurExpertise,
} from '~/modules/homepage';

useHead({
  title: 'Homepage',
});

</script>

<template>
  <main class="homepage">
    <Hero />

    <div class="homepage__wrapper">
      <AboutUs />

      <OurExpertise />

      <OurWork />

      <Awards />

      <ContactUs />
    </div>
  </main>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-flow: column;

  &__wrapper, :deep(.hero), :deep(.hero__container) {
    padding: 2rem;
  }
}
</style>
