<template>
  <div class="animate__animated animate__fadeIn">
    <section class="banner">
      <div class="container h-100">
      <div class="row h-100">
        <div class="col-12 h-100 d-flex flex-column justify-content-center">
          <div>
            <h2 class="text-primary banner__sub">Hola, mi nombre es</h2>

            <h1 class="banner__title">Erick Huamani</h1>
          </div>

          <div class="row mt-3">
            <div class="col-md-6 banner__col">
              <p class="banner__description">
                Desarrollador web (Frontend) ubicado en Lima, Perú.
                Me especializo en el desarrollo de aplicaciones web increíbles con <span class="font-weight-bold">Vuejs</span> y <span class="text-primary font-weight-bold">Nuxtjs</span>.
              </p>

              <div class="text-right mt-4 mr-lg-2">
                <a href="" class="btn btn--main text-uppercase">Contáctame</a>
              </div>
            </div>

            <div class="col-md-6 position-relative d-flex justify-content-center">
              <div class="text-right mt-1">
                <img src="/logos/vuejs.svg" alt="Logo Vue js" class="logo-small animate__animated animate__pulse animate__infinite  infinite animate__slower">

                <img src="/logos/javascript.svg" alt="Logo Javascript" class="logo-small animate__animated animate__pulse animate__infinite infinite animate__slower mb-4 mx-2">

                <img src="/logos/css.svg" alt="Logo Javascript" class="logo-small animate__animated animate__pulse animate__infinite  infinite animate__slower mt-4">

                <img src="/logos/html.svg" alt="Logo Javascript" class="logo-small animate__animated animate__pulse animate__infinite infinite animate__slower mx-2">
                

                <div class="d-flex justify-content-end">
                  <img src="/logos/nuxt.svg" alt="Logo Javascript" class="img-fluid logo-nuxt mt-2 mr-3">
                  <img src="/logos/nuxt-2.svg" alt="Logo Javascript" class="img-fluid logo-nuxt animate__animated animate__pulse animate__infinite  infinite animate__slower">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row d-none">
        <div class="col-12">
          <a href="https://icons8.com/icon/3UzMbioJA7La/vuejs">Vuejs icon by Icons8</a>
          <a href="https://icons8.com/icon/108784/javascript">Javascript icon by Icons8</a>
          <a href="https://icons8.com/icon/20909/html-5">HTML 5 icon by Icons8</a>
          <a href="https://icons8.com/icon/21278/css3">CSS3 icon by Icons8</a>
        </div>
      </div>
    </div>
    </section>
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

  background-color: $app-dark;

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
}
</style>
