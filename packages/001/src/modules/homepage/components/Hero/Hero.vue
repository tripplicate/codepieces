<script setup lang="ts">
import HeroFooter from './HeroFooter.vue';
import HeroHeader from './HeroHeader.vue';
</script>

<template>
  <section class="hero">
    <section class="hero__container">
      <HeroHeader />

      <h1>
        Capturing beautiful moment inside lens and shutterspeed
      </h1>

      <HeroFooter />
    </section>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  min-height: 100dvh;

  &__container {
    overflow: hidden;
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    justify-content: space-between;

    background: center / cover no-repeat url("https://images.unsplash.com/photo-1520681902979-0784b03b638a?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    border-radius: 1rem;
  }
}

</style>
