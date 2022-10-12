<template>
  <button type="button" class="style-mode-switch border-0 rounded-circle" @click="setDarkMode(!getAppDark)">
      <i class="fas fa-sun" v-if="getAppDark"></i>
      <i class="fas fa-moon" v-else></i>
  </button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            setDarkMode: 'SET_DARK_MODE'
        })
    },
    computed: {
        ...mapGetters({
            getAppDark: 'getAppDark'
        })
    }
};
</script>

<style lang="scss" scoped>
.style-mode-switch {
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1.7rem;
    right: 3.5rem;
    z-index: 100;
    transition: transform .5s;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
}
</style>
