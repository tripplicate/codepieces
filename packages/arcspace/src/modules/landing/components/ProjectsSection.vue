<script setup lang="ts">
import { AppButton } from '~/design/application/components';

import SectionHeader from './SectionHeader.vue';

const projects = [
  {
    name: 'YES HOUSE',
    background: 'https://images.unsplash.com/photo-1590912550141-1448da2bd5da?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Located just steps from Kensington road, the YZ house renovation and addition blends the old and the new, higlight existing features',
    tags: ['interior', 'architect'],
  },
  {
    name: 'ELYSIAN',
    background: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Located just steps from Kensington road, the YZ house renovation and addition blends the old and the new, higlight existing features',
    tags: ['property', 'interior'],
  },
  {
    name: 'GRADIANT',
    background: 'https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Located just steps from Kensington road, the YZ house renovation and addition blends the old and the new, higlight existing features',
    tags: ['property', 'interior'],
  },
  {
    name: 'URBANUSE',
    background: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Located just steps from Kensington road, the YZ house renovation and addition blends the old and the new, higlight existing features',
    tags: ['interior', 'architect'],
  }
];
</script>

<template>
  <section class="projects-section container">
    <SectionHeader class="projects-section__header">
      (04) Our Projects
    </SectionHeader>

    <h3 class="font-headline font-typescale-large projects-section__title">
      The last various projects we have have been completed
    </h3>

    <section
      class="projects-section__projects"
      data-theme="dark"
    >
      <RouterLink
        v-for="{name, description, tags, background} in projects"
        :key="name"
        to="#service"
        class="bg-overlay projects-section__project"
        :style="{
          '--background-image': `url('${background}')`
        }"
      >
        <header class="projects-section__project-header">
          <AppButton>
            Details
          </AppButton>
        </header>

        <section class="projects-section__project-content">
          <header class="projects-section__project-content-header">
            <h3 class="font-headline font-typescale-large projects-section__project-content-title">
              {{ name }}
            </h3>

            <div class="projects-section__project-content-tags">
              <span
                v-for="tag in tags"
                :key="tag"
                class="font-label font-typescale-medium projects-section__project-content-tag"
              >
                #{{ tag }}
              </span>
            </div>
          </header>

          <footer class="projects-section__project-content-footer">
            <p class="font-body font-typescale-large projects-section__project-content-text">
              {{ description }}
            </p>
          </footer>
        </section>
      </routerlink>
    </section>

    <AppButton class="projects-section__button">
      See All Projects
    </AppButton>
  </section>
</template>

<style scoped>
.projects-section {
  display: grid;
  place-items: center;
  padding-block: 6rem;

  &__header {
    width: 100%;
  }

  &__title {
    margin-block: 1rem 3rem;
  }

  &__button {
    margin-block-start: 4rem;
  }

  &__projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  &__project {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    min-height: 400px;
    padding: 1rem;

    color: var(--app-color-on-surface);

    background: var(--app-color-surface-container-lowest) var(--background-image) no-repeat center / cover;
    border-radius: 1rem;

    &:where(:hover, :focus-visible, :focus-within) &-header {
      opacity: 1;
    }

    &:where(:hover, :focus-visible, :focus-within) &-content {
      gap: 1rem;

      &-footer {
        grid-template-rows: 1fr;
      }
    }

    &-header {
      display: flex;
      justify-content: flex-end;
      opacity: 0;
      transition: opacity 250ms;
    }

    &-content {
      display: flex;
      flex-flow: column nowrap;

      &-header {
        display: flex;
        flex-flow: row wrap;
        gap: 0.5rem;
        align-items: center;
        justify-content: space-between;
      }

      &-tags {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      &-tag {
        padding: 0.5rem 1rem;

        font-weight: 500;
        text-transform: capitalize;

        background-color: var(--app-state-layer-on-surface-08);
        border: 2px solid var(--app-color-outline);
        border-radius: 1rem;
      }

      &-footer {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 250ms;
      }

      &-text {
        overflow: hidden;
      }
    }
  }
}

@media screen and (width < 768px) {
  .projects-section {
    &__projects {
      grid-template-columns: 1fr;
    }

    &__project {
      gap: 1rem;
      justify-content: flex-end;

      &-header {
        justify-content: flex-start;
        order: 1;
      }
    }
  }
}
</style>
