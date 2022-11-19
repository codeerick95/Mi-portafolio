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
              <span class="d-inline-block ml-1"> Blog </span>
            </nuxt-link>

            <AutorInfo />

            <h1 class="font-weight-bold mt-3">{{ post.titulo }}</h1>

            <p class="mt-3">
              En este tutorial veremos como utilizar la librería
              <a
                href="https://html2canvas.hertzen.com"
                target="_blank"
                class="font-weight-bold"
                >html2canvas</a
              >
              para generar un <i>Screenshot</i> a un elemento o sección en
              específico.
            </p>

            <section class="mt-4">
              <h2 class="subtitulo">Para empezar</h2>

              <div class="mt-1">
                <p>
                  Debemos descargar <i>html2canvas</i> a nuestro proyecto, para
                  ello podemos hacerlo a travéz del CDN:
                </p>

                <section class="my-3">
                  <pre><code class="language-html">https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.4/html2canvas.min.js</code></pre>
                </section>

                <p>O si prefieres utilizar Npm:</p>

                <section class="mt-3">
                  <pre><code class="language-html">npm install html2canvas</code></pre>
                  <pre><code class="language-html">import html2canvas from 'html2canvas';</code></pre>
                </section>

                <p class="my-3">
                  Lo siguiente es asignar un ID al elemento padre al que
                  queremos tomar el <i>Screenshot.</i>
                </p>

                <span>Por ejemplo:</span>

                <div class="mt-2 text-left">
                  <pre><code class="language-html">&lt;div id="capture" style="width: 200px; height: 200px; padding: 10px; background: #f5da55"&gt;
    &lt;h4 style="color: #000;"&gt;Mi contenido a capturar&lt;/h4&gt;
&lt;/div&gt;</code></pre>
                </div>

                <p class="my-3">
                  Lo siguiente es llamar al método
                  <i>html2canvas()</i> paśandole como primer parámetro el
                  elemento al que asignamos el id y esperando recibir una
                  promesa con el canvas ya procesado.
                </p>

                <p class="my-3">
                  Al finalizar la promesa podemos mostrar la imagen de distintas
                  formas o incluso descargarla utilizando líneas de js
                  adicionales (Ver ejemplo completo).
                </p>

                <div class="mt-2">
                  <pre><code class="language-javascript">html2canvas(document.querySelector("#capture")).then(canvas => {
    console.log(canvas)									
    document.body.appendChild(canvas)
});</code></pre>
                </div>

                <p class="my-3">
                  ¡Eso es todo! para generar y obtener la captura de la sección
                  seleccionada.
                </p>

                <div class="alert alert-warning mt-3">
                  ¡Advertencia!
                  <p class="text-dark">
                    Todas las imágenes que utiliza el script deben residir bajo
                    el mismo origen, para evitar ésto podemos pasarle
                    adicionalmente un objeto de configuración como parámetro. De
                    la siguiente manera:
                  </p>
                </div>

                <div class="mt-4">
                  <pre><code class="language-javascript">let options = {
    allowTaint: true,
    useCORS: true
}
html2canvas(document.querySelector("#capture"), options).then(canvas => {
    console.log(canvas)									
    document.body.appendChild(canvas)
});</code></pre>
                </div>

                <p class="my-3">
                  Para más información sobre la configuración o sobre la
                  librería, se recomienda visitar
                  <a
                    href="https://html2canvas.hertzen.com/documentation"
                    target="_blank"
                  >
                    La documentación oficial
                  </a>
                </p>

                <h2 class="subtitulo">Ejemplo completo</h2>

                <p class="mt-2">
                  Para nuestro ejemplo utilizaremos un botón para generar el
                  screenshot y luego mostraremos la captura realizada y
                  adicionalmente un botón para descargar la imagen generada.
                </p>

                <div class="container mt-3">
                  <div class="row">
                    <div class="col-md-6">
                      <div
                        id="capture"
                        style="
                          width: 200px;
                          height: 200px;
                          padding: 10px;
                          background: #f5da55;
                        "
                      >
                        <h4 style="color: #000">Hello world!</h4>
                      </div>

                      <button @click="screen()" class="btn btn-primary mt-3">
                        Screen
                        <i class="fas fa-camera"></i>
                      </button>
                    </div>

                    <div class="col-md-6">
                      <p v-if="generandoCaptura">Generando captura...</p>

                      <section
                        class="d-flex flex-column justify-content-start align-items-start"
                        v-if="!generandoCaptura && capture"
                      >
                        <img :src="capture" alt="" class="img-fluid" />

                        <button @click="download()" class="btn btn-info mt-3">
                          Descargar imagen
                          <i class="fas fa-download"></i>
                        </button>
                      </section>
                    </div>
                  </div>
                </div>

                <h2 class="subtitulo mt-3">Para finalizar</h2>

                <p>
                  Deja volar a tu imaginación y busca como poder implementar
                  esta grandiosa librería a tus proyectos y hacer que la
                  interacción con tus usuarios sea fantástica.
                </p>

                <p class="mt-3">
                  Yo realicé un pequeño proyecto (<a
                    href="https://simple-collage.netlify.app"
                    target="_blank"
                    >Generador de collage</a
                  >) con Vue js en el cual puse a trabajar esta librería.
                </p>
              </div>
            </section>
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
      return this.posts[0];
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
