<template>
  <section class="project-slug container pt-5" v-if="item">
    <div class="row">
      <div class="col-11">
        <article
          class="card border-0 main-shadow"
          :class="{ 'card-dark': getAppDark }"
        >
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h1 class="font-weight-bold">{{ item.title }}</h1>

              <a :href="item.url" target="_blank" class="btn btn-primary"
                >Visitar sitio web <i class="fas fa-external-link-alt ml-2"></i
              ></a>
            </div>

            <section class="mt-5">
              <p class="text-muted">
                {{ item.summary }}
              </p>

              <div v-html="item.description"></div>

              <Gallery :images="item.images" />
            </section>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import Gallery from '@/components/global/Gallery'

export default {
  layout: "default",
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  async asyncData(context) {
    try {
      let response = await context.$axios.get(
        `/public/projects/${context.params.slug}`
      );

      if (!response.data.payload) {
        return context.error({ statusCode: 404 });
      }

      return {
        item: response.data.payload,
      };
    } catch (error) {
      console.log("Error project slug");
      console.log(error.message);
    }
  },
  head() {
    return {
      title: this.item.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.item.summary,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.item.tags,
        },
      ],
    };
  },
  components: {
    Gallery
  },
  computed: {
    ...mapGetters({
      getAppDark: "getAppDark",
    }),
  },
};
</script>

<style lang="scss" scoped>
.project-slug {
  .card-dark {
    background-color: rgba(white, 0.1);
    color: white;

    .text-muted {
      color: rgba(white, 0.5) !important;
    }
  }
}
</style>
