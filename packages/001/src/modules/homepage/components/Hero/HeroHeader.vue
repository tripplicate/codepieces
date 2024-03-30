<script setup lang="ts">
import { CustomLink } from '~/app/extensions/vue-router';
</script>

<template>
  <header class="main-header">
    <span>
      Logotype
    </span>

    <nav class="main-header__navigation">
      <ul
        role="list"
        class="main-header__navigation-list"
      >
        <li class="main-header__navigation-item">
          <CustomLink
            to="/"
            class="main-header__navigation-link"
          >
            Home
          </CustomLink>
        </li>
      </ul>
    </nav>

    <button
      type="button"
      class="main-header__button"
    >
      Book a call
    </button>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__navigation {
    &-list {
      display: flex;
    }
  }
}

</style>
