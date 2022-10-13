<template>
  <article class="project-card" :class="{ 'project-card-dark': getAppDark }">
    <nuxt-link
      :to="{ name: 'proyectos-slug', params: { slug: item.slug } }"
      class="project-card__imagen d-block"
      v-bind:style="{ backgroundImage: 'url(' + item.image.url + ')' }"
      v-if="item.image"
    ></nuxt-link>

    <section class="project-card-content px-4 py-4">
      <nuxt-link
        :to="{ name: 'proyectos-slug', params: { slug: item.slug } }"
        class="title text-decoration-none my-0"
        >{{ item.title }}</nuxt-link
      >

      <p class="my-0">
        {{ item.summary }}
      </p>

      <div class="d-flex justify-content-end mt-4">
        <!-- <a
          :href="item.url"
          class="
            project-card__btn
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

        <nuxt-link
          :to="{ name: 'proyectos-slug', params: { slug: item.slug } }"
          class="btn btn-primary mr-3"
          >Ver detalles</nuxt-link
        >

        <a :href="item.url" class="btn btn-dark" target="_blank">
          Visitar web
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </section>
  </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    item: Object,
  },
  computed: {
    ...mapGetters({
      getAppDark: "getAppDark",
    }),
  },
};
</script>

<style lang="scss">
.project-card {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &__imagen {
    height: 270px;
    // background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.2rem;
  }

  .title {
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

  .project-card-content {
    background-color: white;
  }
}

.project-card-dark {
  .project-card-content {
    background-color: rgba(white, 0.1);
    color: white;
  }

  .title {
    color: white;

    &:hover {
      color: white;
    }
  }
}
</style>
