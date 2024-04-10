<script setup lang="ts">
import { CustomLink } from '~/app/extensions/vue-router';
import { SysButton } from '~/design/system/components';

const links = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '#about-us',
    text: 'Service',
  },
  {
    to: '#our-work',
    text: 'Projects',
  },
  {
    to: '#contact-us',
    text: 'Contact Us',
  }
];
</script>

<template>
  <header class="main-header">
    <span class="logotype">
      <div class="logotype__figure" />

      <span class="logotype__name">CREACY</span>
    </span>

    <nav class="main-navigation">
      <ul
        role="list"
        class="main-navigation__list"
      >
        <li
          v-for="{to, text} in links"
          :key="text"
          class="main-navigation__list-item"
        >
          <CustomLink
            :to="to"
            class="main-navigation__list-link"
          >
            {{ text }}
          </CustomLink>
        </li>
      </ul>
    </nav>

    <SysButton
      html-type="button"
      type="primary-decorative"
      class="main-header__button"
    >
      Book a call
    </SysButton>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logotype {
  display: flex;
  flex: 0 1 auto;
  gap: 0.5vw;
  align-items: center;

  &__figure {
    aspect-ratio: 1;
    width: 2vw;
    background: white;
    border-radius: 0.25vw;
  }

  &__name {
    font-size: 1.25vw;
    text-transform: uppercase;
  }
}

.main-navigation {
  &__list {
    display: flex;
    gap: 2vw;
    align-items: center;

    padding-block: 0.75vw;
    padding-inline: 2vw;

    background: hsla(220, 3%, 55%, 0.5);
    border-radius: 2vw;
  }

  &__list-item {
    display: grid;
    place-items: center;

    &:not(:last-child) {
      padding-right: 2vw;
      border-right: 1px solid white;
    }
  }

  &__list-item:hover &__list-link {
    color: var(--sys-color-secondary);
    text-decoration: dashed;
    transition: color 0.25s;
  }

  &__list-link {
    font-size: 0.85vw;
    color: var(--sys-color-on-surface);
    text-decoration: none;
  }
}

@media screen and (width < 768px) {
  .main-header {
    &__button {
      display: none;
    }
  }

  .logotype {
    display: none;
    gap: 1.5vw;

    &__figure {
      width: 10vw;
      border-radius: 1vw;
    }

    &__name {
      font-size: 5vw;
    }
  }

  .main-navigation {
    flex: 1 0 auto;

    &__list {
      gap: 2vw;
      justify-content: space-between;
      padding-block: 2vw;
      padding-inline: 4vw;
    }

    &__list-item {

      &:not(:last-child) {
        padding-right: 4vw;
      }
    }

    &__list-link {
      font-size: 3vw;
    }
  }

  .mobile-menu {
    display: block;
  }
}
</style>
