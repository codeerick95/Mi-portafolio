<template>
  <article class="card-proyecto">
    <nuxt-link
      :to="{name: 'proyectos-slug', params: {slug: item.slug}}"
      class="card-proyecto__imagen d-block"
      v-bind:style="{ backgroundImage: 'url(' + item.image.url + ')' }"
      v-if="item.image"
    ></nuxt-link>

    <section class="px-4 py-4 bg-white">
      <nuxt-link :to="{name: 'proyectos-slug', params: {slug: item.slug}}" class="card-proyecto__titulo text-decoration-none my-0">{{ item.title }}</nuxt-link>

      <p class="my-0">
        {{ item.summary }}
      </p>

      <div class="d-flex justify-content-end mt-4">
        <!-- <a
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
        > -->

        <nuxt-link :to="{name: 'proyectos-slug', params: {slug: item.slug}}" class="btn btn-primary mr-3">Ver detalles</nuxt-link>

        <a
          :href="item.url"
          class="btn btn-dark"
          target="_blank"
          >
            Visitar web
            <i class="fas fa-external-link-alt"></i>
        </a
        >
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &__imagen {
    height: 270px;
    background-size: cover;
    border-radius: 0.2rem;
  }

  &__titulo {
    font-size: 1em;
    font-weight: 700;
    color: $dark;

    @media (min-width: 768px) {
      font-size: 1.4em;
    }


    &:hover {
      color: $dark;
    }
  }

  &__btn {
    background-color: $primary;

    font-size: 0.9em;
    color: white;

    width: 110px;
    height: 30px;

    border: 1px solid $primary;
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

      border: 1px solid $primary;
    }

    @media (min-width: 768px) {
      width: 130px;
    }
  }
}
</style>