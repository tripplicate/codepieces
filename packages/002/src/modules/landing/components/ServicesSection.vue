<script setup lang="ts">
import { Icon } from '@iconify/vue';

import { AppButton, AppIconButton } from '~/design/application/components';

</script>

<template>
  <section
    id="services-section"
    class="services"
  >
    <section class="container">
      <header class="services__header">
        <h2 class="font-title font-typescale-large services__header-title">
          (03) Services
        </h2>
      </header>

      <h3 class="font-headline font-typescale-large services__title">
        Our various agency services are provided for you
      </h3>

      <section class="services__items">
        <div class="bg-overlay services__item services__item--primary">
          <h4 class="font-headline font-typescale-large">
            Design interior specializes in creating captivating
          </h4>

          <p class="font-body font-typescale-large services__item-subtitle">
            Elevating spaces with distinctive elegance: interior design specialize
            in creating interior masterpieces with your style
          </p>

          <AppButton
            class="services__item-button"
            type="outline"
          >
            Detail Project
          </AppButton>
        </div>

        <div class="bg-overlay services__item services__item--secondary">
          <h4 class="font-headline font-typescale-medium">
            Propery Interior
          </h4>

          <AppIconButton
            class="services__item-button"
            type="outline"
            :width="32"
          >
            <Icon icon="ic:outline-arrow-forward" />
          </AppIconButton>
        </div>

        <div class="bg-overlay services__item services__item--secondary">
          <h4 class="font-headline font-typescale-medium">
            Building Architect
          </h4>

          <AppIconButton
            class="services__item-button"
            type="outline"
            :width="32"
          >
            <Icon icon="ic:outline-arrow-forward" />
          </AppIconButton>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>
.services {
  padding-block: 6rem;
  background: var(--app-color-surface-container);

  &__wrapper {
    display: flex;
    flex-flow: column nowrap;
  }

  &__title {
    width: min(28ch, 100%);
    margin-block: 1rem 3rem;
  }

  &__items {
    display: flex;
    flex-flow: row nowrap;
    gap: 1.5rem;
  }

  &__item {
    display: flex;
    flex: 1;
    flex-flow: column;
    gap: 1.5rem;
    align-items: flex-start;
    justify-content: flex-end;

    height: 800px;
    padding-block: 2rem;
    padding-inline: 1rem;

    background: var(--app-color-surface-container-lowest) var(--background-image) no-repeat center / cover;
    border-radius: 1rem;

    transition: background-size 250ms;

    &-subtitle {
      width: min(60ch, 100%);
    }

    &--primary {
      --background-image: url("/images/landing/services-di-background.jpg");

      flex: 5;
      gap: 2rem;
      padding-inline: 3rem;
    }

    &--secondary:nth-child(2) {
      --background-image: url("/images/landing/services-pi-background.jpg");
    }

    &--secondary:nth-child(3) {
      --background-image: url("/images/landing/services-ba-background.jpg");
    }
  }
}

@media screen and (width < 768px) {
  .services {
    padding-block: 4rem;

    &__items {
      flex-flow: column;
    }

    &__item {
      &--primary {
        padding-inline: 1rem;
      }
    }
  }
}
</style>
