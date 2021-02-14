<template>
  <div>
    <input type="text" v-model="name">
  </div>
</template>

<script>

export default {
  computed: {
    name: {
      get() {
        return this.$store.getters.datosProductoSeleccionado ? this.$store.getters.datosProductoSeleccionado.name : ""
      },
      set(val) {
        this.$store.commit('ACTUALIZAR_NOMBRE', val)
      }
    },
    productoSeleccionado() {
      return this.$store.getters.datosProductoSeleccionado
    }
  }
}
</script>

<style lang="scss">
</style>