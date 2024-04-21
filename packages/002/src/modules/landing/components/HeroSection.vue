<script setup lang="ts">
import { Icon } from '@iconify/vue';

import { AppHeader, AppIconButton } from '~/design/application/components';
</script>

<template>
  <section
    class="hero bg-overlay"
    data-theme="dark"
  >
    <AppHeader class="hero__header" />

    <section class="hero__content">
      <h1 class="font-display font-typescale-large hero__title">
        Arcspace
      </h1>
    </section>

    <footer class="hero__footer">
      <span class="font-body font-typescale-large hero__footer-tagline">
        Elevate Your Space, Define Your Vision:
        Transformative The Architectural Solutions
      </span>

      <RouterLink
        to="#about-us-section"
        aria-label="Go to next section"
      >
        <AppIconButton
          class="hero__footer-button"
          type="outline"
          :width="96"
        >
          <Icon icon="ic:outline-arrow-downward" />
        </AppIconButton>
      </RouterLink>
    </footer>
  </section>
</template>

<style scoped>
.hero {
  --background-image: url("/images/landing/hero-background.jpg");

  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  height: 100svh;
  padding-block: 2rem;

  color: var(--app-color-on-surface);

  background: var(--app-color-surface-container) var(--background-image) no-repeat center / cover;

  &__header, &__footer {
    padding-inline: 2rem;
  }

  &__content {
    overflow: hidden;
    display: grid;
    place-items: center;
  }

  &__title {
    margin-left: -2.75vw;
    text-align: center;
  }

  &__footer {
    display: flex;
    flex: 0 0 20%;
    align-items: flex-end;
    justify-content: space-between;

    &-tagline {
      width: min(40ch, 100%);
    }
  }
}

@media screen and (width < 1024px) {
  .hero {

    &__header, &__footer {
      padding-inline: 1.5rem;
    }
  }
}

@media screen and (width < 768px) {
  .hero {

    &__content {
      flex: 1 0 auto;
      align-items: flex-end;
    }

    &__footer {
      flex-flow: column nowrap;
      gap: 22.5vh;
      align-items: center;
      margin-block-start: 2rem;

      &-tagline {
        text-align: center;
      }

      &-button {
        font-size: 2rem;
      }
    }
  }
}

</style>
