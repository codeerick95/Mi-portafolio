<template>
  <div class="main-layout">
    <HeaderMobile />

    <header-app v-if="$route.name != 'cv'"></header-app>

    <!--  <header-provisional></header-provisional>  -->

    <Nuxt />

    <NavRedesMobile />
  </div>
</template>

<script>
import HeaderApp from '@/components/global/HeaderApp'
import HeaderMobile from '@/components/global/HeaderMobile'
import NavRedesMobile from '@/components/global/NavRedesMobile'

// import { db } from '@/plugins/firebase.js'

export default {
  components: {
    HeaderApp,
    HeaderMobile,
    NavRedesMobile
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.main-layout {
  padding-bottom: 4rem;

  @media (min-width: 992px) {
    padding-bottom: 0;
  }
}
</style>
