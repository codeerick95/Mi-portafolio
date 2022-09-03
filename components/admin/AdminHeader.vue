<template>
  <header
    class="admin-header bg-white d-flex justify-content-between align-items-center main-shadow p-3"
  >
    Header

    <b-dropdown
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
      right
      class="user-dropdown"
      v-if="currentUser"
    >
      <template #button-content>
        <img
          :src="currentUser.image || '/images/global/user-avatar.png'"
          alt="Administrador"
          class="image rounded-circle"
        />
        <span class="username d-inline-block font-weight-bold text-dark ml-1">{{
          currentUser.name
        }}</span>
      </template>
      <!-- <b-dropdown-item href="#">Mis datos</b-dropdown-item> -->
      <b-dropdown-item href="#" @click.prevent="logout()">
        <i class="fas fa-sign-out-alt mr-1"></i>
        Salir
      </b-dropdown-item>
    </b-dropdown>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AdminHeader",
  methods: {
    async logout() {
      await this.$auth.logout()
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    }),
  },
};
</script>

<style lang="scss" scoped>
.admin-header {
    height: 40px;
    margin-bottom: 16px;

  .user-dropdown {
    .image {
      width: 35px;
    }
  }

  .username {
    font-size: 1rem;
  }
}
</style>
