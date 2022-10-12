<template>
  <div class="portafolio animate__animated animate__fadeIn">
    <section class="banner">
      <div class="container h-100 pt-5">
        <div class="row h-100">
          <div class="col-12 h-100 d-flex flex-column justify-content-center">
            <div>
              <h1 class="banner__title">Portafolio</h1>
            </div>

            <div class="row mt-3">
              <div class="col-md-6 banner__col">
                <p class="banner__description">
                  Puedes ver más sobre mis prácticas y proyectos en
                  <a
                    href="https://www.instagram.com/codeerick"
                    target="_blank"
                    class="text-primary"
                    >Instagram</a
                  >
                  o
                  <a
                    href="https://codepen.io/codeerick"
                    target="_blank"
                    class="text-primary"
                    >Codepen</a
                  >
                </p>

                <div class="text-right mt-4 mr-lg-2">
                  <button
                    type="button"
                    class="btn btn--main btn--main-contacto text-uppercase mr-3"
                    @click="scrollTo()"
                  >
                    <i class="fas fa-arrow-circle-down"></i>
                  </button>
                </div>
              </div>

              <div
                class="col-md-6 position-relative d-flex justify-content-center"
              >
                <div class="d-flex justify-content-center">
                  <img
                    src="/imagenes/proyectos/animacion-banner.gif"
                    alt="Logo Javascript"
                    class="img-fluid banner__animacion"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proyectos -->
    <div id="proyectos" class="proyectos container">
      <!-- <div class="row">
        <div class="col-12">
          <mensaje-rapido titulo="Proyectos realizados">
            <template slot="descripcion">
              <p>
                En este último año he trabajado en proyectos como Freelance para
                distintas agencias
              </p>
            </template>
          </mensaje-rapido>
        </div>
      </div> -->

      <div class="row">
        <div class="col-12">
          <p>
              Otros proyectos en los que he trabajado han sido como <b>Freelance</b> por encargo de
              agencias, por lo que en esta web solo muestro mis proyectos
              personales.
            </p>
        </div>
      </div>

      <div class="proyectos__lista row">
        <div
          class="col-md-6 px-5"
          :class="{ 'portafolio__mb-6': index % 2 != 0 }"
          v-for="(item, index) in items"
          :key="index"
        >
          <card-proyecto :item="item"></card-proyecto>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardProyecto from "@/components/portafolio/CardProyecto";

export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getItems();
  },
  components: {
    CardProyecto,
  },
  methods: {
    scrollTo() {
      const elemento = document.getElementById("proyectos");

      this.$smoothScroll({
        scrollTo: elemento,
        updateHistory: false,
        duration: 700,
        offset: -50
      });
    },
    async getItems() {
      let response = await this.$axios.get("/public/projects");
      this.items = response.data.docs;
    },
  },
};
</script>

<style lang="scss">
.portafolio {
  &__mb-6 {
    @media (min-width: 768px) {
      margin-top: 6rem;
    }
  }

  .btn--main-contacto {
    font-size: 1.7em;
  }
}

.banner {
  &__sub {
    font-size: 1.3em;
    font-weight: 400;
  }

  &__col {
    @media (min-width: 992px) {
      max-width: 850px;
    }
  }

  .logo-small {
    max-width: 40px;
  }

  &__animacion {
    width: 80%;

    margin-top: -5rem;
  }
}

.proyectos {
  &__lista {
    margin-top: 4rem;
  }

  p {
    font-size: 0.95em;
  }
}
</style>
