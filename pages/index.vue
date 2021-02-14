<template>
  <div class="animate__animated animate__fadeIn">
    <div class="container banner">
      <div class="row h-100">
        <div class="col-12 h-100 d-flex flex-column justify-content-center">
          <div>
            <h2 class="text-success banner__sub">Hola, mi nombre es</h2>

            <h1 class="banner__title">Erick Huamani</h1>
          </div>

          <div class="row mt-3">
            <div class="col-md-6 banner__col">
              <p class="banner__description">
                Desarrollador web (Frontend) ubicado en Lima, Perú.
                Me especializo en el desarrollo de aplicaciones web increíbles con <span class="text-success font-weight-bold">Vuejs</span> y <span class="text-success font-weight-bold">Nuxtjs</span>.
              </p>

              <div class="text-right mt-4 mr-lg-2">
                <a href="" class="btn btn--main text-uppercase">Contáctame</a>
              </div>
            </div>
          </div>
        </div>
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
</style>
