<template>
  <aside class="sidebar vh-100 pt-3 bg-white">
    <div class="pl-3">
        <h1 class="title font-weight-bold">@ehldev</h1>

        <nuxt-link to="/">Sitio web</nuxt-link>
    </div>

    <AdminNav />
  </aside>
</template>

<script>
import AdminNav from "./AdminNav.vue";

export default {
  components: {
    AdminNav,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  .title {
    font-size: 1.5em;
  }
}
</style>
