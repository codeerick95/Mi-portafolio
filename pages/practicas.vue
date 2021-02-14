<template>
  <div>
    <header-app></header-app>

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="lead text-white">Carrito</h1>

          <h2 class="text-white">Total: {{ total }}</h2>

          <div class="row">
            <div class="col-2 text-white" v-for="(item, index) in cart">
              <p>{{ item }}</p>

              <button type="button" @click="removeItem(index)">Eliminar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5" v-if="products.length >= 1">
        <div class="col-2 text-white" :class="{'stock-minimo' : $store.getters.productoConStockMinimo(item.id)}" v-for="item in products" :key="item.id" @click="cambiarNombre(item)">
          <p>{{ item }}</p>

          <button type="button" @click="addToCart(item)">Añadir</button>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12">
          <form-nombre></form-nombre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

import HeaderApp from '@/components/global/HeaderApp'
import FormNombre from '@/components/practicas/FormNombre'

const digitsRE = /(\d{3})(?=\d)/g;

export default {
  mounted() {
    this.$store.dispatch('getItems')
  },
  components: {
    HeaderApp,
    FormNombre
  },
  methods: {
    ...mapActions({
      addToCart: 'addProductToCart' // El parámetro es implícito
    }),
    ...mapMutations({
      cambiarNombre: 'setProductoSeleccionado'
    }),
    /* addToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    }, */
    /* cambiarNombre(item) {
      this.$store.dispatch('setProductoSeleccionado', item)
    }, */
    removeItem(index) {
      this.$store.dispatch('removeProductCart', index)
    },
    currency(value, currency, decimals) {
      value = parseFloat(value);
      if (!isFinite(value) || (!value && value !== 0)) return "";
      currency = currency != null ? currency : "$";
      decimals = decimals != null ? decimals : 2;
      var stringified = Math.abs(value).toFixed(decimals);
      var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
      var i = _int.length % 3;
      var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? "," : "") : "";
      var _float = decimals ? stringified.slice(-1 - decimals) : "";
      var sign = value < 0 ? "-" : "";
      return (
        sign + currency + head + _int.slice(i).replace(digitsRE, "$1,") + _float
      );
    }
  },
  computed: {
    ...mapState(['items']),
    ...mapGetters({
      products: 'productsWithStock'
    }),
    todos() {
      // return this.$store.state.items

      return this.$store.getters.todosCompleted
    },
    /* products() {
      return this.$store.getters.productsWithStock
    }, */
    cart() {
      return this.$store.getters.productsOnCart
    },
    total() {
      return this.currency(this.$store.getters.cartTotal, 'S/')
    }
  }
}
</script>

<style lang="scss">
.stock-minimo {
  background-color: tomato;
}
</style>