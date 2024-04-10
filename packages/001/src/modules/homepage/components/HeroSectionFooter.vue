<template>
  <footer class="hero-footer">
    <section class="hero-footer__tags">
      <div class="hero-footer__tag">
        Landscape
      </div>

      <div class="hero-footer__tag">
        Wildlife
      </div>

      <div class="hero-footer__tag">
        Architectural
      </div>

      <div class="hero-footer__tag">
        Travel
      </div>

      <div class="hero-footer__tag">
        Potrait
      </div>
    </section>
  </footer>
</template>

<style scoped>
.hero-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 25%;

  &__tags {
    display: flex;
    flex: 0 0 20%;
    flex-flow: row wrap;
    gap: 0.5vw;
  }

  &__tag {
    user-select: none;

    width: max-content;
    padding: 0.2vw 1vw;

    font-size: 0.85vw;
    font-weight: 500;

    background: hsla(0, 0%, 100%, 0.125);
    border: 0.0125vw solid white;
    border-radius: 2vw;
  }
}

@media screen and (width < 768px) {
  .hero-footer {
    height: unset;

    &__tags {
      flex: 1 0 auto;
      justify-content: space-between;
    }

    &__tag {
      font-size: 2.5vw;
    }
  }
}
</style>
