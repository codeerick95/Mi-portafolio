<template>
  <button
    type="button"
    class="style-mode-switch border-0 rounded-circle"
    @click="darkMode(!getAppDark)"
  >
    <i class="fas fa-sun" v-if="getAppDark"></i>
    <i class="fas fa-moon" v-else></i>
  </button>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setDarkMode: "SET_DARK_MODE",
    }),
    darkMode(value) {
      this.setDarkMode(value);

      this.$cookies.set("erickhl-darkmode", value, {
        maxAge: 60 * 60 * 24 * 365,
      });
    },
  },
  computed: {
    ...mapGetters({
      getAppDark: "getAppDark",
    }),
  },
};
</script>

<style lang="scss" scoped>
.style-mode-switch {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: fixed;
  // bottom: 1.5rem;
  // right: 5rem;
  // z-index: 100;
  transition: transform 0.5s;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
</style>
