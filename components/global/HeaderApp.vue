<template>
  <header
    class="header d-none d-lg-flex flex-column justify-content-between align-items-end h-100 py-4"
    :class="{'header-dark': getAppDark, 'py-0': showNav}"
  >
    <nav
      class="main-nav animate__animated animate__fadeIn d-none d-lg-block"
      v-if="showNav"
    >
      <ul class="main-nav__list list-unstyled text-right">
        <li>
          <nuxt-link to="/">Sobre mí</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/proyectos">Portafolio</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <!-- <nuxt-link to="/">Contacto</nuxt-link> -->
          <a href="" @click.prevent="contacto()">Contacto</a>
        </li>
        <li v-if="currentUser">
          <nuxt-link to="/admin" class="main-nav-link text-primary font-weight-bold">Admin</nuxt-link>
        </li>
      </ul>
    </nav>

    <!-- Hamburger desktop -->
    <button
      @click="showNav = !showNav"
      class="hamburger hamburger--collapse p-0"
      v-else
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <nav
      class="nav-social d-flex flex-column justify-content-center align-items-center"
      :class="{ 'main-nav animate__animated animate__fadeIn': showNav }"
    >
      <ul class="nav-social__list list-unstyled">
        <li>
          <a href="https://github.com/ehldev" target="_blank" class="icon">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/erick-huamani-lomparte-87066117b"
            target="_blank"
            class="icon"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ehldev"
            target="_blank"
            class="icon"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://codepen.io/ehldev" target="_blank" class="icon">
            <i class="fab fa-codepen"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/ehldev" target="_blank" class="icon">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>

      <div class="nav-social__line mb-3" v-if="showNav"></div>

      <SwitchAppStyleMode />
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

import SwitchAppStyleMode from '@/components/global/SwitchAppStyleMode'

export default {
  data() {
    return {
      showNav: true,
    };
  },
  mounted() {
    this.calcularScroll();
  },
  components: {
    SwitchAppStyleMode
  },
  methods: {
    calcularScroll() {
      let _this = this;

      window.onscroll = function () {
        let top = parseInt(window.scrollY);

        if (top >= 400) {
          _this.showNav = false;
        } else {
          _this.showNav = true;
        }
      };
    },
    contacto() {
      if (this.$route.path != "/") {
        this.$router.push("/");

        setTimeout(() => {
          const myEl = document.getElementById("contacto");

          this.$smoothScroll({
            scrollTo: myEl,
            updateHistory: false,
          });
        }, 1800);
      } else {
        const myEl = document.getElementById("contacto");

        this.$smoothScroll({
          scrollTo: myEl,
          updateHistory: false,
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
      getAppDark: 'getAppDark'
    }),
  },
};
</script>

<style lang="scss" scoped>
.header {
  grid-column: 2 / 3;

  padding-right: 1.5rem;

  position: fixed;
  top: 0;
  right: .5rem;
  // bottom: 0;
  // left: 0;

  z-index: 100;

  @media (min-width: 992px) {
    left: initial;
  }
}

.main-nav {
  &__list {
    a {
      font-size: 1.2em;
      color: $dark;

      text-decoration: none;
      text-transform: uppercase;

      margin-bottom: 0.5rem;

      display: inline-block;

      position: relative;

      transition: color 0.5s;

      &:before {
        content: "";

        width: 0;

        transition: width 0.5s;
      }

      &:hover {
        color: $dark;

        &:before {
          content: "";

          background-color: rgba($success, .1);

          width: 100%;
          height: 25%;

          border-bottom: 2px solid $success;

          position: absolute;
          left: 0;
          bottom: .2rem;
        }
      }
    }
  }

  &-link {
    &:hover {
      color: $primary !important;
    }
  }
}

.nav-social {
  width: max-content;

  &__line {
    width: 2px;
    height: 80px;

    background-color: rgba($dark, 0.7);
  }
}

.icon {
  font-size: 1.5em;
  color: rgba($dark, 0.7);

  display: inline-block;

  transition: color 0.5s, transform 0.8s;

  &:hover {
    color: $dark;

    transform: scale(1.3);
  }
}

.hamburger {
  margin-right: -10px;
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  width: 25px;
}

.header-dark {
  a {
    color: rgba(white, .9);

    &:hover {
      color: white;
    }
  }

  .nav-social__line {
    background-color: rgba(white, 0.7);
  }
}
</style>
