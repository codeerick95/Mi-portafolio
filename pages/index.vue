<template>
  <div>
    <header-app></header-app>

    <div class="container banner">
      <div class="row h-100">
        <div class="col-12 h-100 d-flex flex-column justify-content-center">
          <div>
            <h2 class="text-success banner__sub">Hola, mi nombre es</h2>

            <h1 class="banner__title">Erick Huamani</h1>
          </div>

          <div class="row mt-3">
            <div class="col-md-6">
              <p class="banner__description">
                I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/global/HeaderApp'

export default {
  components: {
    HeaderApp
  }
}
</script>

<style lang="scss">
.banner {
  height: 100vh;

  &__sub {
    font-size: 1.3em;
  }

  &__title {
    color: $light;
    font-size: 3.5em;
    font-weight: 700;
  }

  &__description {
    color: white;
  }
}
</style>
