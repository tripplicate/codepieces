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

  background: center / cover no-repeat url("/hero-background.jpg");
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
