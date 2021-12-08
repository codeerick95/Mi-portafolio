<template>
  <div class="main-layout">
    <header-app></header-app>

    <!--  <header-provisional></header-provisional>  -->

    <Nuxt />
  </div>
</template>

<script>
import HeaderApp from '@/components/global/HeaderApp'
import HeaderProvisional from '@/components/global/HeaderProvisional'

// import { db } from '@/plugins/firebase.js'

export default {
  components: {
    HeaderApp,
    HeaderProvisional
  },
  mounted() {
  }
}
</script>

<style>
</style>
