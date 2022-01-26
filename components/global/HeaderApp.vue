<template>
  <header class="header d-none d-lg-flex flex-column justify-content-around align-items-end h-100">
    <nav class="main-nav animate__animated animate__fadeIn d-none d-lg-block" v-if="showNav">
      <ul class="main-nav__list list-unstyled text-right">
        <li>
          <nuxt-link to="/">Sobre mí</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/portafolio">Portafolio</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <!-- <nuxt-link to="/">Contacto</nuxt-link> -->
          <a href="" @click.prevent="contacto()">Contacto</a>
        </li>
      </ul>
    </nav>

    <!-- Hamburger desktop -->
    <button @click="showNav = !showNav" class="hamburger hamburger--collapse p-0" v-else>
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <nav class="nav-social d-flex flex-column justify-content-center align-items-center" :class="{'main-nav animate__animated animate__fadeIn': showNav}">
      <ul class="nav-social__list list-unstyled">
        <li>
          <a href="https://github.com/ehldev" target="_blank" class="icon">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/erick-huamani-lomparte-87066117b" target="_blank" class="icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ehldev" target="_blank" class="icon">
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

      <div class="nav-social__line" v-if="showNav"></div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showNav: true
    }
  },
  mounted() {
    this.calcularScroll()
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
      if(this.$route.path != '/') {
        this.$router.push('/')

        setTimeout(() => {
          const myEl = document.getElementById('contacto')

          this.$smoothScroll({
            scrollTo: myEl,
            updateHistory: false
          })
        }, 1800)
      } else {
        const myEl = document.getElementById('contacto')

        this.$smoothScroll({
          scrollTo: myEl,
          updateHistory: false
        })
      }
    }
  }
}
</script>

<style lang="scss">
.header {
  grid-column: 2 / 3;

  padding-right: 1.5rem;

  position: fixed;
  top: 0;
  right: 0;
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
      color: $app-dark;

      text-decoration: none;
      text-transform: uppercase;

      margin-bottom: .5rem;

      display: inline-block;

      position: relative;

      transition: color .5s;

      &:before {
        content: '';

        width: 0;

        transition: width .5s;
      }

      &:hover {
        color: $app-dark;

        &:before {
          content: '';

          background-color: rgba($success, .2);

          width: 100%;
          height: 50%;

          border-bottom: 2px solid $success;

          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
}

.nav-social {
  width: max-content;

  &__line {
    width: 2px;
    height: 120px;

    background-color: rgba($app-dark, .7);
  }
}

.icon {
  font-size: 1.5em;
  color: rgba($app-dark, .7);

  display: inline-block;

  margin-bottom: .5rem;

  transition: color .5s, transform .8s;

  &:hover {
    color: $app-dark;

    transform: scale(1.3);
  }
}

.hamburger {
  margin-right: -10px;
}

.hamburger-inner, .hamburger-inner:after, .hamburger-inner:before {
  width: 25px;
}
</style>
