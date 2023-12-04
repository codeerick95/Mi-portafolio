<template>
  <section class="blog-slug">
    <div class="row">
      <div class="col-md-10">
        <div class="card border-0">
          <div class="card-body">
            <nuxt-link
              to="/blog"
              class="back-icon small text-dark text-decoration-none bg-light d-inline-block py-2 px-3 border"
            >
              <i class="fas fa-arrow-left"></i>
              <span class="d-inline-block ml-1">Blog</span>
            </nuxt-link>

            <AutorInfo />

            <h1 class="font-weight-bold mt-3">{{ post.titulo }}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { appConfig } from "@/appConfig";

import { posts } from "@/data/blog";

import AutorInfo from "@/components/blog/AutorInfo";

export default {
  data() {
    return {
      appConfig,
      slug: this.$route.params.slug,
      posts,
      generandoCaptura: false,
      capture: null,
    };
  },

  head() {
    let title = `${this.post.titulo} - @ehldev`,
      image = this.post.imagenPrincipal,
      description = this.post.descripcionCorta,
      slug = this.post.slug,
      url = appConfig.app.url;

    return {
      title,
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "keywords", name: "keywords", content: this.post.keywords },
        { hid: "author", name: "author", content: "@ehldev" },

        // Facebook OpenGraph
        { hid: "ot", property: "og:title", content: title },
        { hid: "os", property: "og:site_name", content: "@ehldev" },
        { hid: "oty", property: "og:type", content: "website" },
        { hid: "oi", property: "og:image", content: image },
        { hid: "od", property: "og:description", content: description },
        { hid: "ou", property: "og:url", content: `${url}/productos/${slug}` },

        // Twitter Card
        { hid: "tc", name: "twitter:card", content: "summary" },
        { hid: "tt", name: "twitter:title", content: title },
        { hid: "td", name: "twitter:description", content: description },
        { hid: "ti", name: "twitter:image", content: image },
      ],
    };
  },

  mounted() {
  },

  components: {
    AutorInfo,
  },

  methods: {
    screen() {
      this.generandoCaptura = true;

      setTimeout(() => {
        html2canvas(document.querySelector("#capture")).then((canvas) => {
          this.generandoCaptura = false;

          let url = canvas.toDataURL();
          this.capture = url;
        });
      }, 1000);
    },
    download() {
      html2canvas(document.querySelector("#capture")).then((canvas) => {
        this.generandoCaptura = false;

        let url = canvas.toDataURL();
        this.capture = url;

        var anchorTag = document.createElement("a");
        document.body.appendChild(anchorTag);
        anchorTag.download = "filename.jpg";
        anchorTag.href = url;
        anchorTag.target = "_blank";
        anchorTag.click();
      });
    },
  },

  computed: {
    post() {
      return this.posts.find(item => item.slug == this.slug);
    },
  },
};
</script>

<style lang="scss">
.blog-slug {
  .subtitulo {
    font-size: 1.3em;
    font-weight: 700;

    @media (min-width: 768px) {
      font-size: 1.5em;
    }
  }
}

#screen {
  height: 200px;
  background-color: $light;
}
</style>
