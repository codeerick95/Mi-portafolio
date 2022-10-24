<template>
  <section class="gallery mt-5" v-if="images">
    <div
      class="gallery-item p-2"
      v-for="image in images"
      :key="image.id"
    >
      <img
        :src="image.url"
        :alt="image.description || 'erickhl.com'"
        class="img-fluid cursor-pointer"
        @click="showModal(image)"
      />
    </div>

    <b-modal id="gallery-modal" size="lg" centered hide-header hide-footer>
      <div class="d-flex justify-content-center">
        <img :src="current.url" alt="" class="img-fluid" v-if="current">
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      current: null,
    };
  },
  props: {
    images: Array,
  },
  methods: {
      showModal(image) {
          this.current = image
          this.$bvModal.show('gallery-modal')
      }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &-item {
    border: 2px dashed rgba($gray, 0.2);
  }

  img {
    object-fit: cover;
    object-position: center;
  }
}
</style>
