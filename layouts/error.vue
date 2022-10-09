<template>
  <div
    class="error-page vh-100 d-flex justify-content-center align-items-center"
  >
    <section class="text-center">
      <img src="/imagenes/page-error.png" alt="Error" class="img-fluid" />
      <h1 class="font-weight-bold" v-if="error.statusCode === 404">
        Página no encontrada
      </h1>
      <div v-else>
        <h1 class="font-weight-bold">Ocurrió un error</h1>
        <p>Por favor inténtelo nuevamente</p>
      </div>
      <NuxtLink to="/" class="btn btn-primary mt-3">Ir a inicio</NuxtLink>
    </section>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style lang="scss" scoped></style>
