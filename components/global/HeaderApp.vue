<template>
  <header class="header d-flex flex-column justify-content-around align-items-end">
    <nav class="main-nav">
      <ul class="main-nav__list list-unstyled text-right">
        <li>
          <nuxt-link to="/">Mis trabajos</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Sobre mí</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">Contacto</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/practicas">Prácticas</nuxt-link>
        </li>
      </ul>
    </nav>

    <nav class="nav-social d-flex flex-column justify-content-center align-items-center">
      <ul class="nav-social__list list-unstyled">
        <li>
          <a href="" class="icon">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="" class="icon">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="" class="icon">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="" class="icon">
            <i class="fab fa-codepen"></i>
          </a>
        </li>
        <li>
          <a href="" class="icon">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>

      <div class="nav-social__line"></div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  width: 150px;

  position: fixed;
  top: 0;
  right: 2rem;
  bottom: 0;

  z-index: 100;
}

.main-nav {
  &__list {
    a {
      font-size: 1.2em;
      color: $light;

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
        color: white;

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

    background-color: rgba($light, .7);
  }
}

.icon {
  font-size: 1.5em;
  color: rgba($light, .7);

  display: inline-block;

  margin-bottom: .5rem;

  transition: color .5s;

  &:hover {
    color: white;
  }
}
</style>
