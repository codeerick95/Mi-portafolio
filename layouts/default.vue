<template>
  <div class="main-layout">
    <header-app></header-app>

    <Nuxt />
  </div>
</template>

<script>
import HeaderApp from '@/components/global/HeaderApp'

// import { db } from '@/plugins/firebase.js'

export default {
  components: {
    HeaderApp
  },
  mounted() {
  }
}
</script>

<style>
</style>
