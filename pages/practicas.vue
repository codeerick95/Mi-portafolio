<template>
  <div>
    <header-app></header-app>

    <div class="container">
      <div class="row">
        <div class="col-2 text-white" v-for="item in items">
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HeaderApp from '@/components/global/HeaderApp'

export default {
  mounted() {
    this.$store.dispatch('getItems')
  },
  components: {
    HeaderApp
  },
  computed: {
    ...mapState(['items'])
  }
}
</script>

<style lang="scss">
</style>