<template>
  <nav>
      <h2>Nav</h2>

      <ul>
          <li>Blog</li>
          <ul>
              <li><nuxt-link to="/admin/blog">Listar</nuxt-link></li>
              <li><nuxt-link to="/admin/blog/crear">Crear</nuxt-link></li>
          </ul>

          <li><nuxt-link to="/admin/suscriptores">Suscriptores</nuxt-link></li>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>