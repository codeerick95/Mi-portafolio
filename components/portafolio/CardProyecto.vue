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

      <div class="mt-4 pb-3">
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

        <a
          :href="item.url"
          class="btn btn-dark btn-sm"
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
  &__imagen {
    height: 270px;

    background-size: cover;

    border-radius: 0.2rem;
  }

  &__titulo {
    font-size: 1em;
    font-weight: 700;
    color: $app-dark;

    @media (min-width: 768px) {
      font-size: 1.2em;
    }


    &:hover {
      color: $app-dark;
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