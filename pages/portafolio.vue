<template>
  <div class="portafolio animate__animated animate__fadeIn">
    <section class="banner">
      <div class="container h-100">
      <div class="row h-100">
        <div class="col-12 h-100 d-flex flex-column justify-content-center">
          <div>
            <h1 class="banner__title">Portafolio</h1>
          </div>

          <div class="row mt-3">
            <div class="col-md-6 banner__col">
              <p class="banner__description">
                Proyectos web realizados, puedes ver más detalles en <a href="https://www.instagram.com/codeerick" target="_blank" class="text-primary">Instagram</a> o <a href="https://codepen.io/codeerick" target="_blank" class="text-primary">Codepen</a>
              </p>

              <div class="text-right mt-4 mr-lg-2">
                <nuxt-link to="/contacto" class="btn btn--main text-uppercase">Contáctame</nuxt-link>
              </div>
            </div>

            <div class="col-md-6 position-relative d-flex justify-content-center">
              <div class="d-flex justify-content-center">
                <img src="/imagenes/proyectos/animacion-banner.gif" alt="Logo Javascript" class="img-fluid banner__animacion">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <!-- Proyectos -->
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6" :class="{'portafolio__mb-6': (index % 2 != 0)}" v-for="(item, index) in proyectos" :key="index">
          <card-proyecto :item="item"></card-proyecto>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { proyectos } from '@/data/proyectos'

import CardProyecto from '@/components/portafolio/CardProyecto'

export default {
  data() {
    return {
      proyectos
    }
  },
  mounted() {
  },
  components: {
    CardProyecto
  }
}
</script>

<style lang="scss">
.portafolio {
  &__mb-6 {
    @media (min-width: 768px) {
      margin-top: 6rem;
    }
  }
}

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
      max-width: 850px;
    }
  }

  .logo-small {
    max-width: 40px;
  }

  .logo-nuxt {
    max-width: 220px;
    max-height: 50px;

    opacity: .4;
  }

  &__animacion {
    width: 80%;

    margin-top: -5rem;
  }
}
</style>
