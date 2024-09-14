<script setup lang="ts">
import { useHead } from '@unhead/vue'

import {
  AboutUsSection,
  HeroSection,
  ProjectsSection,
  PropertySection,
  ServicesSection,
} from '~/modules/landing'

useHead({
  title: 'Arcspace',
})
</script>

<template>
  <main class="landing">
    <HeroSection />

    <AboutUsSection />

    <ServicesSection />

    <ProjectsSection />

    <PropertySection />
  </main>
</template>

<style scoped>
.landing {
  display: flex;
  flex-flow: column nowrap;
}
</style>
