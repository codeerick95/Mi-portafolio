
<template>
  <div class="blog animate__animated animate__fadeInLeft pb-5">
    <div class="container banner mt-5">
      <div class="row h-100">
        <div class="col-md-12 h-100 d-flex flex-column justify-content-center">
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

              <!-- <div class="form-group mt-5 position-relative">
                <input type="text" placeholder="Email" class="form-control blog__email bg-transparent">

                <input type="submit" class="blog__btn text-white font-weight-bold px-3" value="Suscribirme">
              </div> -->
            </div>

            <div class="col-md-5 text-center">
              <img src="/imagenes/blog.png" alt="" class="blog__imagen-banner animate__animated animate__pulse animate__infinite  infinite animate__slower">

              <p class="small">
                Illustration by <a href="https://icons8.com/illustrations/author/5fe0d309487a404a84cd3917">Lazarus_al</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="categorias" class="container categorias-blog">
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
    </div> -->

    <!-- <section>
      <pre>
        <code class="language-javascript">var x=0;</code>
      </pre>
    </section> -->

    <section class="container">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="blog__sub">ARTÍCULOS DESTACADOS</h2>
              </div>
            </div>

            <!-- Destacados -->
            <div class="row mt-4">
              <div class="col-md-6" v-for="(post, index) in postsDestacados" :key="index">
                <card-blog :item="post"></card-blog>
              </div>
            </div>

            <!-- Publicaciones generales -->
            <div class="row mt-5">
              <div class="col-md-12 mb-3">
                <h2 class="blog__sub">ÚLTIMOS ARTÍCULOS</h2>
              </div>
              <div class="col-md-4" v-for="(post, index) in postsNoDestacados" :key="index">
                <card-blog :item="post"></card-blog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { posts } from '@/data/blog'

import CardBlog from '@/components/blog/CardBlog.vue'

export default {
  data() {
    return {
      posts,
      items: [
        {
          imagenFondo: 'https://i.imgur.com/0NrDXes.jpg',
          titulo: 'Meta tags para seo en NuxtJS',
          tags: [
            'Vue',
            'Nuxt',
          ],
          fecha: '08/07/2021'
        },
        {
          imagenFondo: 'https://filisantillan.com/content/images/size/w850/2020/12/hooks.jpg',
          titulo: 'Introducción a los Vuejs',
          tags: [
            'Vue',
            'Nuxt',
            'Javascript'
          ],
          fecha: '05/07/2021'
        },
        {
          imagenFondo: 'https://filisantillan.com/content/images/size/w850/2020/12/hooks.jpg',
          titulo: 'Introducción a React',
          tags: [
            'Vue',
            'Nuxt',
            'Javascript'
          ],
          fecha: '05/07/2021'
        }
      ]
    }
  },
  mounted() {
  },
  components: {
    CardBlog
  },
  computed: {
    postsDestacados() {
      return this.posts.filter(item => item.destacado)
    },
    postsNoDestacados() {
      return this.posts.filter(item => !item.destacado)
    }
  }
}
</script>

<style lang="scss">
.banner {
  &__sub {
    font-size: 1.3em;
    font-weight: 400;
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

.blog {
  &__email {
    height: 50px;

    padding-left: 1rem;
    border: 2px solid rgba($app-dark, .6);
    border-radius: 1.5rem;

    box-shadow: none !important;

    transition: border .5s;

    &:focus {
      border: 2px solid rgba($app-dark, .8);
    }
  }

  &__btn {
    height: 35px;

    background-color: $app-primary;

    letter-spacing: .1rem;

    border: none;
    border-radius: 1.5rem;

    position: absolute;
    top: 7px;
    right: .6rem;

    transition: background-color .3s;

    &:hover {
      background-color: #00A375;
    }
  }

  &__imagen-banner {
    max-width: 80%;

    @media (min-width: 768px) {
      max-width: 70%;
    }
  }

  &__sub {
    font-size: 1.1em;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 1.5em;
    }
  }
}
</style>
