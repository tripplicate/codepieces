<script setup lang="ts">
import HomepageHeroSectionFooter from './HeroSectionFooter.vue';
import HomepageHeroSectionHeader from './HeroSectionHeader.vue';
</script>

<template>
  <section class="hero">
    <HomepageHeroSectionHeader />

    <h1 class="hero__display">
      Capturing beautiful <br>

      moment inside lens and <br>
      shutterspeed
    </h1>

    <HomepageHeroSectionFooter />
  </section>
</template>

<style scoped>
.hero {
  position: relative;

  overflow: hidden;
  display: flex;
  flex: 1 1 auto;
  flex-flow: column;
  justify-content: space-between;

  padding-block: 2.5vw;
  padding-inline: 2.5vw;

  background: center / cover no-repeat url("https://images.unsplash.com/photo-1568087866344-a0dcf6316460?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  border-radius: 1vw;

  &:after {
    content: "";

    position: absolute;
    z-index: 0;
    inset: 0;

    background: hsla(0, 0%, 0%, 0.25);
  }

  & > * {
    z-index: 1;
  }

  &__display {
    font-size: 5vw;
    line-height: 1;
  }
}

@media screen and (width < 768px) {
  .hero {
    padding: 2rem;

    &__display {
      font-size: 10vw;
    }
  }
}

</style>
