<template>
  <div class="d-flex align-items-center mt-1">
      <span class="text-danger">
          <i class="fas fa-times"></i>
      </span>
      <p class="text-muted small ml-2">{{ text }}</p>
  </div>
</template>

<script>
export default {
    name: 'FormError',
    props: ['text']
}
</script>

<style>

</style>