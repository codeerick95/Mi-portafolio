<template>
  <article class="card-proyecto">
    <section
      class="card-proyecto__imagen"
      v-bind:style="{ backgroundImage: 'url(' + item.imagen + ')' }"
    ></section>

    <section class="px-4 py-4 bg-white">
      <h3 class="card-proyecto__titulo text-primary my-0">{{ item.nombre }}</h3>

      <p class="my-2">
        {{ item.descripcion }}
      </p>

      <div class="mt-4 px-3 pb-3">
        <a
          :href="item.url"
          class="
            card-proyecto__btn
            text-center
            d-flex
            justify-content-center
            align-items-center
            position-relative
            d-inline-block
            ml-2
          "
          target="_blank"
          >Detalles</a
        >

        <nuxt-link to="/" class="btn btn-dark btn-sm mt-4 ml-md-5">
          Visitar web
          <i class="fas fa-external-link-alt"></i>
        </nuxt-link>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">
.card-proyecto {
  &__imagen {
    height: 270px;

    background-size: cover;

    border-radius: 0.2rem;
  }

  &__titulo {
    font-size: 1em;

    @media (min-width: 768px) {
      font-size: 1.2em;
    }
  }

  &__btn {
    background-color: $app-primary;

    font-size: 0.9em;
    color: white;

    width: 110px;
    height: 30px;

    border: 1px solid $app-primary;
    border-radius: 0;

    z-index: 100 !important;

    transition: transform 0.5s;

    &:hover {
      color: white;

      text-decoration: none;

      transform: scale(0.99);
    }

    &::before {
      content: "";

      width: 100%;
      height: 100%;

      position: absolute;
      right: -0.5rem;
      bottom: -0.4rem;
      z-index: 10;

      border: 1px solid $app-primary;
    }

    @media (min-width: 768px) {
      width: 130px;
    }
  }
}
</style>