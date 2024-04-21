<script setup lang="ts">
import { useHead } from '@unhead/vue';

import { HeroSection, AboutUsSection, ServicesSection } from '~/modules/landing';

useHead({
  title: 'Arcspace',
});

</script>

<template>
  <main class="landing">
    <HeroSection />

    <AboutUsSection />

    <ServicesSection />
  </main>
</template>

<style scoped>
.landing {
  display: flex;
  flex-flow: column nowrap;
}
</style>
