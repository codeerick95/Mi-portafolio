<template>
  <section class="container mt-5">
    <div class="row">
      <div class="col-11">
        <article class="card border-0 main-shadow">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="font-weight-bold">{{ item.title }}</h1>

              <a :href="item.url" target="_blank" class="btn btn-primary">Visitar sitio web</a>
            </div>

            <!-- <pre>
              {{ item }}
            </pre> -->

            <p class="text-muted">
              {{ item.summary }}
            </p>

            <div class="mt-5" v-html="item.description"></div>

            <section class="mt-5">
              <h2 class="font-weight-bold mb-3">Galería</h2>

              <div class="row">
                <div class="col-md-4" v-for="image in item.images" :key="image.id">
                  <img :src="image.url" :alt="image.description" class="img-fluid">
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  async asyncData(context) {
    let response = await context.$axios.get(
      `/public/projects/${context.params.slug}`
    );

    return {
      item: response.data.item,
    };
  },
};
</script>

<style></style>
