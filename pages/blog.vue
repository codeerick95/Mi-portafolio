<template>
  <div class="animate__animated animate__fadeInLeft">
    <div class="container banner">
      <div class="row h-100">
        <div class="col-12 h-100 d-flex flex-column justify-content-center">
          <h1 class="banner__title">Blog</h1>

          <div class="row mt-3">
            <div class="col-md-6 banner__col">
              <p class="banner__description">
                Un pequeño espacio personal en el que busco compartir lo que he aprendido a lo largo
                del desarrollo de diversos proyectos.
              </p>

              <p class="banner__description">
                Espero poder aportar a la comunidad con tutoriales simples y prácticos sobre el desarrollo de <span class="text-success font-weight-bold">Vuejs</span> en general.
              </p>

              <small class="text-white">Por si te interesa también escribo sobre <nuxt-link to="/" class="text-warning">política</nuxt-link> y <nuxt-link to="/" class="text-warning">opiniones personales</nuxt-link> acerca de distintos temas de interés común.</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="categorias" class="container categorias-blog">
      <div class="row justify-content-center">

        <div class="col-7 px-lg-0 mb-3">
          <h2 class="lead text-white">¿Sobre qué quieres leer hoy?</h2>
        </div>

        <nuxt-link to="/" class="col-7 categorias-blog__item text-decoration-none d-flex justify-content-between align-items-center py-3 px-3" v-for="item in 100">
          <div class="d-flex align-items-center">
            <img src="/logos/vue.png" alt="Logo Vuejs" class="categorias-blog__logo mr-4">

            <h3 class="categorias-blog__titulo font-weight-bold my-0">Vue js</h3>
          </div>

          <span class="text-muted">10</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('getItems')
  },
  computed: {
    ...mapState(['items'])
  }
}
</script>

<style lang="scss">
.banner {
  height: 100vh;

  &__sub {
    font-size: 1.3em;
    font-weight: 400;
  }

  &__title {
    color: $light;
    font-size: 3.5em;
    font-weight: 700;
  }

  &__description {
    color: white;
  }

  &__col {
    @media (min-width: 992px) {
      max-width: 550px;
    }
  }
}

.categorias-blog {
  &__item {
    background-color: rgba($primary2, .1);

    border-bottom: 1px solid rgba(white, .02);
    border-radius: .1rem;

    transition: background-color .5s;

    &:hover {
      background-color: rgba($primary2, .5);
    }
  }

  &__logo {
    width: 20px;
  }

  &__titulo {
    font-size: 1em;
    color: rgba(white, .7);
  }
}
</style>
