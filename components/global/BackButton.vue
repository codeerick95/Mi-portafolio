<template>
  <button
    type="button"
    class="back-button bg-transparent rounded-circle"
    :class="{ 'text-white': getAppDark }"
    data-tooltip-target="tooltip-default"
    @click="$router.go(-1)"
    v-if="$route.name != 'index'"
  >
    ❮
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BackButton",
  computed: {
    ...mapGetters({
      getAppDark: "getAppDark",
    }),
  },
};
</script>

<style lang="scss" scoped>
.back-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid transparent;
  position: fixed;
  top: 3rem;
  left: 2rem;
  z-index: 10;

  &:hover {
    border: 1px solid rgba($app-gray, 0.5);
  }
}
</style>
