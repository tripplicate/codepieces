<script setup lang="ts">
import { AppButton } from '~/design/application/components'

import SectionHeader from './SectionHeader.vue'

const achievementsCards = [
  {
    title: '$920M+',
    subtitle: `
      <span>Total revenue</span> we get from various
      projects or clients that we complete
    `,
  },
  {
    title: '350+',
    subtitle: `
      <span>Total clients</span> or companies who entrust
      their architectural ideas to us
    `,
  },
  {
    title: '300+',
    subtitle: `
      <span>Total testimonials</span> they provide after
      experiencing our services
    `,
  },
]
</script>

<template>
  <section
    id="about-us-section"
    class="about-us container"
  >
    <SectionHeader>
      (02) About Us
    </SectionHeader>

    <section class="about-us__content">
      <h3 class="font-headline font-typescale-large about-us__title">
        Craft Your Spaces:
        Work With Archspace
        Architecte Mastery
      </h3>

      <section class="about-us__information">
        <p class="font-body font-typescale-large about-us__subtitle">
          Welcome to the realm where design meets innovation.
          We transcend the ordinary, reshaping environments to the
          harmonize with your vision and redefine the way you
          experience architecture
        </p>

        <AppButton>
          See More
        </AppButton>
      </section>
    </section>

    <section class="about-us__achievements">
      <section
        v-for="{ title, subtitle } in achievementsCards"
        :key="title"
        class="about-us__achievements-card"
      >
        <span class="font-headline font-typescale-large about-us__achievements-card-title">
          {{ title }}
        </span>

        <p
          class="font-body font-typescale-large about-us__achievements-card-subtitle"
          v-html="subtitle"
        />
      </section>
    </section>
  </section>
</template>

<style scoped>
.about-us {
  display: flex;
  flex-flow: column nowrap;
  padding-block: 4rem;

  &__content {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: space-between;

    margin-block-start: 1rem;
    margin-block-end: 6rem;
  }

  &__title {
    text-wrap: balance;
  }

  &__subtitle {
    flex: 0 1;
  }

  &__information {
    display: flex;
    flex-flow: column nowrap;
    gap: 3rem;
    align-items: flex-start;
  }

  &__achievements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    &-card {
      display: flex;
      flex-flow: column nowrap;
      gap: 0.5rem;

      padding: 2rem;

      background-color: var(--app-color-surface-container);
      border-radius: 1rem;

      &-subtitle {
        :deep(span) {
          font-weight: bold;
        }
      }
    }
  }
}

@media screen and (width < 1024px) {
  .about-us {

    &__content {
      flex-flow: column nowrap;
      gap: 2rem;
      align-items: unset;
      margin-block-end: 3rem;
    }

    &__achievements {

      &-card-subtitle {
        width: 100%;
        text-wrap: unset;
      }
    }
  }
}

@media screen and (width < 768px) {
  .about-us {

    &__achievements {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
