<template>
  <div id="form-suscription" class="suscription bg-white text-left mt-5 p-3">
    <h3 class="font-weight-bold">Suscríbete! Es gratis</h3>

    <form action="" class="mt-3 p-2 animate__animated animate__fadeIn" @submit.prevent="submit()">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" class="form-control" />
      </div>

      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="text" id="email" class="form-control" />
      </div>

      <div class="form-group text-right mt-4 mb-0">
        <button type="submit" class="btn btn-primary">Registrarme</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormSuscription",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.suscription {
  margin: 0 auto;
  margin-bottom: 200px;
  box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.81);
  -webkit-box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.81);
  -moz-box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.81);
}
</style>
