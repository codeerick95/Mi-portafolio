<template>
  <div
    class="error-page vh-100 d-flex justify-content-center align-items-center"
  >
    <section class="text-center">
      <div class="image-container d-flex flex-column position-relative">
        <img src="/imagenes/page-error.png" alt="Error" class="img-fluid" />
        <div class="label small">
          Illustration by
          <a href="https://icons8.com/illustrations/author/wsla8vwyVKgS" target="_blank"
            >OlFi</a
          >
          from <a href="https://icons8.com/illustrations" target="_blank">Ouch!</a>
        </div>
      </div>

      <section v-if="error.statusCode === 404">
        <h1 class="font-weight-bold">Página no encontrada</h1>
      </section>
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

<style lang="scss" scoped>
.image-container {
  margin-top: -5rem;

  .label {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    margin: auto;
  }
}
</style>
