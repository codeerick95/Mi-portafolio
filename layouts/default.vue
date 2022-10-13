<template>
  <div class="main-layout" :class="{'main-layout-dark': getAppDark}">
    <BackButton />

    <HeaderMobile />

    <header-app v-if="$route.name != 'cv'"></header-app>

    <!--  <header-provisional></header-provisional>  -->

    <main class="pb-5">
      <Nuxt />
    </main>

    <NavRedesMobile />

    <!-- <SwitchAppStyleMode /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HeaderApp from '@/components/global/HeaderApp'
import HeaderMobile from '@/components/global/HeaderMobile'
import NavRedesMobile from '@/components/global/NavRedesMobile'
import BackButton from '@/components/global/BackButton'
// import SwitchAppStyleMode from '@/components/global/SwitchAppStyleMode'

// import { db } from '@/plugins/firebase.js'

export default {
  components: {
    HeaderApp,
    HeaderMobile,
    NavRedesMobile,
    BackButton,
    // SwitchAppStyleMode
  },
  mounted() {
  },
  computed: {
    ...mapGetters({
      getAppDark: 'getAppDark'
    })
  }
}
</script>

<style lang="scss">
.main-layout {
  min-height: 100vh;
  padding-bottom: 4rem;

  @media (min-width: 992px) {
    padding-bottom: 0;
  }

  &-dark {
    background-color: $dark !important;
  }
}
</style>
