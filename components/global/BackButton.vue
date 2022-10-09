<template>
  <button
    type="button"
    class="back-button bg-transparent rounded-circle"
    data-tooltip-target="tooltip-default"
    @click="$router.go(-1)"
    v-if="$route.name != 'index'"
  >
    ❮
  </button>
</template>

<script>
export default {
    name: 'BackButton'
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
        border: 1px solid rgba($app-gray, .5);
    }
}
</style>
