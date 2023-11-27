<template>
  <div
    class="portafolio pt-5 animate__animated animate__fadeIn"
    :class="{ 'portafolio-dark': getAppDark }"
  >
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
                  Puedes ver más sobre mis prácticas y proyectos en
                  <a
                    href="https://www.instagram.com/codeerick"
                    target="_blank"
                    class="text-primary font-weight-semibold"
                    >Instagram</a
                  >
                  o
                  <a
                    href="https://codepen.io/codeerick"
                    target="_blank"
                    class="text-primary font-weight-semibold"
                    >Codepen</a
                  >
                </p>

                <div class="text-right mt-4 mr-lg-2">
                  <button
                    type="button"
                    class="btn btn-contact mr-3"
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
    <div id="proyectos" class="proyectos container mt-5 mt-md-1">
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
          <p class="lead">
            A lo largo de mi desempeño como programador he desarrollado otros
            proyectos como
            <span class="text-primary font-weight-semibold"
              ><b>Freelance</b></span
            >
            por encargo de agencias, por lo que en esta web solo muestro mis
            proyectos y prácticas personales.
          </p>
        </div>
      </div>

      <div class="proyectos__lista row">
        <div
          class="col-md-6 px-1 px-md-5 mb-4 mb-md-0"
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
import { mapGetters } from "vuex";

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
        offset: -50,
      });
    },
    async getItems() {
      let response = await this.$axios.get("/api/public/projectsw");
      this.items = response.data.docs;
    },
  },
  computed: {
    ...mapGetters({
      getAppDark: "getAppDark",
    }),
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

  .btn-contact {
    background-color: $primary;
    font-size: 18px;
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
    @media (min-width: 768px) {
      margin-top: 4rem;
    }
  }

  p {
    font-size: 0.95em;
  }
}

.portafolio-dark {
  color: white;
}
</style>
