<script setup lang="ts">
import { AppButton } from '~/design/application/components';

import SectionHeader from './SectionHeader.vue';

let images = [
  {
    src: 'https://images.unsplash.com/photo-1581641363874-158d26798a62?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'white bed linen on brown wooden bed frame',
  },
  {
    src: 'https://images.unsplash.com/photo-1604061986761-d9d0cc41b0d1?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'white bed linen on brown wooden bed frame',
  },
  {
    src: 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'white bed linen on brown wooden bed frame',
  }
];
</script>

<template>
  <section class="property-section">
    <section class="container property-section__container">
      <section class="property-section__gallery">
        <picture
          v-for="{alt, src} in images"
          :key="src"
          class="property-section__gallery-picture"
        >
          <img
            class="property-section__gallery-image"
            loading="lazy"
            :src="src"
            :alt="alt"
          >
        </picture>
      </section>

      <section class="property-section__information">
        <SectionHeader>
          (05) Popular Property
        </SectionHeader>

        <h3 class="font-headline font-typescale-large property-section__information-title">
          Oasis Coffee Table New Product
        </h3>

        <section class="property-section__information-price">
          <b class="font-headline font-typescale-medium property-section__information-price-current">
            $200
          </b>

          <s class="font-headline font-typescale-small property-section__information-price-old">
            $320
          </s>
        </section>

        <h4 class="font-title font-typescale-large">
          Description:
        </h4>

        <p class="font-body font-typescale-large property-section__information-description">
          The Oasis Coffee Table is elegant and gentle
          with a flowing, smooth shape. Every delicate curve
          conveys natural energy and warmth
        </p>

        <AppButton class="property-section__information-button">
          Detail Product
        </AppButton>
      </section>
    </section>
  </section>
</template>

<style scoped>
.property-section {
  padding-block: 4rem;
  background: var(--app-color-surface-container);

  &__container {
    overflow: hidden;
    display: flex;
    gap: 4rem;
    justify-content: space-between;

    height: 40rem;

    & > * {
      flex: 1;
    }
  }

  &__gallery {
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 2fr 1fr;
    gap: 2rem;

    &-picture {
      overflow: hidden;
      border-radius: 1rem;

      &:first-child {
        grid-column: span 2;
      }
    }

    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__information {

    &-title {
      width: min(18ch, 100%);
      margin-top: 1.5rem;
    }

    &-price {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin-block: 2rem 1.5rem;

      &-old {
        color: var(--app-color-outline);
      }
    }

    &-description {
      width: min(40ch, 100%);
      margin-top: 1rem;
      text-wrap: balance;
    }

    &-button {
      margin-top: 2rem;
    }
  }
}

@media screen and (width < 768px) {
  .property-section {
    height: 45rem;

    &__container {
      flex-flow: column;
    }

    &__gallery {
      scroll-snap-type: x mandatory;

      overflow-x: scroll;
      display: flex;
      gap: 1rem;
      order: 2;

      &-picture {
        scroll-snap-align: start;
        flex: 1 0 17rem;
      }
    }
  }
}
</style>
