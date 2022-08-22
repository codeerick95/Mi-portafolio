<template>
  <div class="index">
    <!-- Banner -->
    <section class="banner px-3">
      <div class="container h-100">
        <div class="row h-100">
          <div
            class="col-12 h-100 d-flex flex-column justify-content-center"
          >
            <div>
              <h2
                class="
                  text-primary
                  banner__sub
                  my-0
                  animate__animated animate__fadeIn
                "
              >
                Hola, mi nombre es
              </h2>

              <a href="" @click.prevent="logout()" v-if="currentUser">Logout</a>

              <h1 class="banner__title mt-0">Erick Huamani</h1>
              <h2 class="lead text-muted mb-3">@ehldev</h2>
            </div>

            <div class="row">
              <div class="col-md-6 banner__col">
                <p
                  class="banner__description animate__animated animate__fadeIn"
                >
                  Desarrollador web (Frontend) ubicado en Lima, Perú.
                  <br>
                  Me especializo en la maquetación e interacción de aplicaciones web.
                </p>

                <div class="text-right mt-4 mr-lg-3">
                  <a href="" class="btn btn--main text-uppercase" @click.prevent="contacto()">Contáctame</a>
                </div>
              </div>

              <div
                class="col-md-6 position-relative d-flex justify-content-center"
                data-aos="flip-up"
                data-aos-duration="1000"
              >
                <div class="text-right mt-5 mt-lg-0">
                  <img
                    src="/logos/vuejs.svg"
                    alt="Logo Vue js"
                    class="
                      logo-small
                      animate__animated animate__pulse animate__infinite
                      infinite
                      animate__slower
                    "
                  />

                  <img
                    src="/logos/javascript.svg"
                    alt="Logo Javascript"
                    class="
                      logo-small
                      animate__animated animate__pulse animate__infinite
                      infinite
                      animate__slower
                      mb-4
                      mx-2
                    "
                  />

                  <img
                    src="/logos/css.svg"
                    alt="Logo Javascript"
                    class="
                      logo-small
                      animate__animated animate__pulse animate__infinite
                      infinite
                      animate__slower
                      mt-4
                    "
                  />

                  <img
                    src="/logos/html.svg"
                    alt="Logo Javascript"
                    class="
                      logo-small
                      animate__animated animate__pulse animate__infinite
                      infinite
                      animate__slower
                      mx-2
                    "
                  />

                  <div class="d-flex justify-content-end">
                    <img
                      src="/logos/nuxt.svg"
                      alt="Logo Javascript"
                      class="img-fluid logo-nuxt mt-3 mr-3"
                    />
                    <img
                      src="/logos/nuxt-2.svg"
                      alt="Logo Javascript"
                      class="
                        img-fluid
                        logo-nuxt
                        animate__animated animate__pulse animate__infinite
                        infinite
                        animate__slower
                      "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Información -->

    <article class="container" data-aos="fade-in" data-aos-duration="1000">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <h3 class="index__sub font-weight-bold mt-4">Un poco más de mí</h3>

          <p class="mt-3 mb-0">
            <i>
              Estoy ubicado en Lima - Perú

              <img
                src="/imagenes/peru.svg"
                alt="Perú"
                class="index__bandera ml-2"
              />
            </i>
          </p>

          <p class="mt-3">
            Hace aproximadamente 3 años descubrí la programación por simple
            curiosidad. Con el tiempo aprendí a escribir mis primeras líneas de
            código y desde entonces no he parado de aprender sobre programación
            y tecnología en general.
          </p>

          <p>
            Mi trabajo consiste en maquetar y programar la parte visual de una
            página, un sitio o una aplicación web moderna.
          </p>

          <div class="mt-4">
            <nuxt-link to="/cv" class="btn btn-success">Mostrar CV <i class="fas fa-location-arrow"></i></nuxt-link>
          </div>

          <h3 class="index__sub font-weight-bold mt-5">
            Mi Stack de programación
          </h3>

          <div class="index__logos">
            <div
              class="
                row
                justify-content-center
                align-items-center
                text-center
                mt-3
              "
            >
              <div
                class="col-5 col-md-2"
                v-for="(item, index) in stack"
                :key="index"
              >
                <img
                  :src="item.logo"
                  :alt="item.nombre"
                  class="img-fluid"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  :data-aos-delay="index * 100"
                />
              </div>
            </div>
          </div>

          <!-- <section>
            <h3 class="index__sub font-weight-bold mt-5">Intereses personales</h3>

            <ul>
              <li>Marketing y negocios</li>
              <li>Contenido audiovisual para internet</li>
              <li>Cocina</li>
            </ul>
          </section> -->

          <section id="contacto" class="contact mt-5">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <mensaje-rapido
                    titulo="Pongámonos en contacto"
                    emoji="/imagenes/smiling.svg"
                  >
                    <template slot="descripcion">
                      <p class="font-weight-200 my-0">
                        Puedes hacerlo directamente
                      </p>

                      <ul class="list-unstyled mt-2">
                        <li>
                          <p class="font-weight-200 my-0">
                            <i class="far fa-envelope"></i>
                            <span class="font-weight-400 d-inline-block px-1"
                              >dev.erick95@gmail.com</span
                            >
                          </p>
                        </li>

                        <li>
                          <p class="font-weight-200 my-2">
                            <i class="fas fa-mobile-alt"></i>
                            <span class="font-weight-400 d-inline-block px-1"
                              >+51 923 417 407</span
                            >
                          </p>
                        </li>
                      </ul>
                    </template>
                  </mensaje-rapido>
                </div>

                <div class="col-12">
                  <section class="mt-5 pb-5">
                    <p>
                      O quizá quieras conocer
                      <nuxt-link
                        to="/portafolio"
                        class="
                          text-dark
                          font-weight-bold
                          text-decoration-none
                          d-inline-block
                          border-bottom
                        "
                        >mis proyectos</nuxt-link
                      >
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import MensajeRapido from "@/components/global/MensajeRapido";

export default {
  data() {
    return {
      stack: [
        {
          nombre: "HTML5",
          logo: "/imagenes/stack/html5.svg",
        },
        {
          nombre: "Css",
          logo: "/imagenes/stack/css.svg",
        },
        {
          nombre: "Javascript",
          logo: "/imagenes/stack/javascript.svg",
        },
        {
          nombre: "Vue js",
          logo: "/imagenes/stack/vuejs.svg",
        },
        {
          nombre: "Nuxt js",
          logo: "/imagenes/stack/nuxt.svg",
        },
        {
          nombre: "Bootstrap",
          logo: "/imagenes/stack/bootstrap.svg",
        },
        {
          nombre: "Node js",
          logo: "/imagenes/stack/node.svg",
        },
        {
          nombre: "Git",
          logo: "/imagenes/stack/git.svg",
        },
        {
          nombre: "React js",
          logo: "/imagenes/stack/react.svg",
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("getItems");
  },
  components: {
    MensajeRapido,
  },
  computed: {
    ...mapState(["items"]),
    ...mapGetters({
      currentUser: 'currentUser'
    })
  },
  methods: {
    contacto() {
      const myEl = document.getElementById('contacto')

      this.$smoothScroll({
        scrollTo: myEl,
        updateHistory: false
      })
    },
    async logout() {
      await this.$auth.logout();
    }
  }
};
</script>

<style lang="scss">
.index {
  &__sub {
    font-size: 1.5em;
  }

  &__bandera {
    width: 25px;
  }

  &__logos {
    @media (min-width: 768px) {
      max-width: 90%;

      margin: 0 auto;
    }

    img {
      max-width: 80%;
    }
  }
}

.banner {
  height: 95vh;

  &__sub {
    font-size: 1.3em;
    font-weight: 400;
  }

  &__title {
    color: $app-dark;
    font-size: 3.5em;
    font-weight: 700;
  }

  &__description {
    font-size: .95em;
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
    max-width: 150px;
    max-height: 50px;

    @media (min-width: 768px) {
      max-width: 220px;
    }
  }
}

.contact {
  padding: 3rem 0 5rem 0;
}
</style>
