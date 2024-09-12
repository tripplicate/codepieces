<script setup lang="ts">

import { Icon } from '@iconify/vue';

import { useApplicationStore } from '~/app';
import { AppButton } from '~/design/application/components';

const applicationStore = useApplicationStore();

const links = [
  {
    to: '/',
    text: 'Home',
    isActive: true,
  },
  {
    to: '#about-us-section',
    text: 'About',
    isActive: false,
  },
  {
    to: '#services-section',
    text: 'Services',
    isActive: false,
  },
  {
    to: '#contact',
    text: 'Contact',
    isActive: false,
  }
];
</script>

<template>
  <header
    class="main-header"
  >
    <Icon
      class="main-header__logotype"
      icon="ic:outline-filter-vintage"
    />

    <nav
      class="main-header__navigation"
    >
      <ul
        role="list"
        class="main-header__navigation-list"
      >
        <li
          v-for="{to, text, isActive} in links"
          :key="to"
          class="main-header__navigation-item"
          :class="{
            'main-header__navigation-item--active': isActive
          }"
        >
          <RouterLink
            class="main-header__navigation-link"
            :to="to"
            :tabindex="isActive ? -1 : 0"
            :aria-label="`Go to ${text.toLowerCase()} section`"
          >
            {{ text }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <AppButton
      class="main-header__theme-toggler"
      name="Theme switch button"
      @click="applicationStore.nextTheme()"
    >
      <template #iconLeft>
        <Icon
          v-show="applicationStore.theme === 'light'"
          icon="ic:outline-light-mode"
        />

        <Icon
          v-show="applicationStore.theme === 'dark'"
          icon="ic:outline-dark-mode"
        />

        <Icon
          v-show="applicationStore.theme === 'auto'"
          icon="ic:outline-computer"
        />
      </template>

      {{ applicationStore.theme }}
    </AppButton>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logotype {
    flex-shrink: 0;
    font-size: 2.5rem;
    color: var(--app-color-on-surface);
  }

  &__navigation {

    &-list {
      display: flex;
      gap: 1rem;
      align-items: center;

      padding: 0.5rem;

      color: var(--app-color-on-surface);

      background: var(--app-color-surface-container-lowest);
      border-radius: 2rem;
    }

    &-item {
      border-radius: inherit;
    }

    &-item--active {
      cursor: default;
      background: var(--app-color-surface-container-highest);
    }

    &-item:not(&-item--active):hover &-link {
      background: var(--app-color-surface-container-high);
    }

    &-link {
      display: block;

      padding: 0.5rem 1.5rem;

      color: inherit;

      border-radius: inherit;

      transition: background 0.25s, color 0.25s;
    }
  }

  &__theme-toggler {
    text-transform: capitalize;
  }
}

@media screen and (width < 768px) {
  .main-header {
    &__logotype {
      font-size: 3rem;
    }

    &__navigation {
      display: none;
    }
  }
}
</style>
