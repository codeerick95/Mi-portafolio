<template>
  <section>
    <AdminLoading v-if="loading" />

    <form action="" @submit.prevent="submit()" v-else>
      <pre>
      {{ form.tags }}
    </pre
      >
      <div class="form-group">
        <label for="level">Posicionamiento</label>
        <select id="level" class="form-control" v-model="form.level">
          <option
            :value="item.key"
            v-for="item in levelOptions"
            :key="item.key"
          >
            {{ item.label }}
          </option>
        </select>

        <FormError text="El campo es requerido" v-if="$v.form.title.$error" />
      </div>

      <div class="form-group">
        <label for="title">Título del proyecto</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="form.title"
          placeholder="Título"
        />

        <FormError text="El campo es requerido" v-if="$v.form.title.$error" />
      </div>

      <div class="form-group">
        <label for="slug">Slug</label>
        <input type="text" id="slug" class="form-control" v-model="form.slug" />
      </div>

      <div class="form-group">
        <label for="description">Descripción</label>

        <client-only>
          <!-- <quill-editor
                  ref="editor"
                  v-model="content"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                /> -->

          <quill-editor
            ref="editor"
            v-model="form.description"
            :options="editorOption"
            class="form-text-editor"
          />
        </client-only>

        <FormError
          text="El campo es requerido"
          v-if="$v.form.description.$error"
        />
      </div>

      <div class="form-group">
        <label for="summary">Resumen</label>

        <textarea
          id="summary"
          class="form-control"
          v-model="form.summary"
        ></textarea>

        <FormError
          text="El campo es requerido"
          v-if="$v.form.description.$error"
        />
      </div>

      <div class="form-group">
        <label for="url">Url</label>
        <input type="text" id="url" class="form-control" v-model="form.url" />
      </div>

      <div class="form-group">
        <label for="tags-basic">Tags</label>
        <b-form-tags
          input-id="tags-basic"
          v-model="form.tags"
          placeholder="Etiquetas relacionadas al proyecto"
          tag-pills
          tag-variant="primary"
        ></b-form-tags>
        <FormError
          text="Se requiere al menos un tag"
          v-if="$v.form.tags.$error"
        />
      </div>

      <div class="form-group">
        <label for="image">Imagen destacada</label>

        <section>
          <button
            type="button"
            class="btn btn-info"
            @click="uploadFiles('image')"
          >
            Seleccionar
          </button>
        </section>

        <FormError text="El campo es requerido" v-if="$v.form.image.$error" />

        <section class="mt-5" v-if="form.image">
          <img :src="form.image.url" alt="" class="img-fluid" />
        </section>
      </div>

      <div class="form-group">
        <label for="images">Imágenes</label>

        <section>
          <button
            type="button"
            class="btn btn-info"
            @click="uploadFiles('images')"
          >
            Subir imágenes
          </button>
        </section>

        <section class="mt-5">
          <div class="row">
            <div
              class="col-md-4 text-center"
              v-for="item in form.images"
              :key="item.id"
            >
              <img :src="item.url" alt="" class="preview-image" />

              <div class="mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Descripción opcional"
                  v-model="item.description"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- <div class="output ql-snow">
				  <div class="ql-editor" v-html="form.description"></div>
			  </div> -->

        <!-- <div>
                <code class="hljs" v-html="contentCode"></code>
              </div> -->
      </div>

      <div class="form-group text-right mt-5">
        <nuxt-link :to="{ name: 'admin-projects' }" class="text-danger mr-3"
          >Cancelar</nuxt-link
        >
        <button type="submit" class="btn btn-primary">
          {{ slug ? "Actualizar" : "Publicar" }}
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import helpers from "@/utils/helpers";
import cloudinaryConfig from "@/config/cloudinary";

import AdminLoading from "@/components/admin/AdminLoading";
import FormError from "@/components/global/FormError";

export default {
  name: "FormProject",
  data() {
    return {
      loading: false,
      slug: this.$route.params.slug,
      form: {
        title: null,
        description: "",
        summary: "",
        slug: null,
        image: null,
        images: [],
        url: null,
        status: null,
        level: null,
        tags: [],
      },
      levelOptions: [
        {
          key: null,
          label: "Seleccione una opción",
        },
        {
          key: "LEVEL_1",
          label: "Posición general",
        },
        {
          key: "LEVEL_2",
          label: "Proyecto destacado",
        },
      ],
      editorOption: {
        // Some Quill options...
        theme: "snow",
        // modules: {
        //   toolbar: [
        //     ["bold", "italic", "underline", "strike"],
        //     ["blockquote", "code-block"],
        //   ],
        //   syntax: {
        //     highlight: (text) => hljs.highlightAuto(text).value,
        //   },
        // },
      },
    };
  },
  mounted() {
    if (this.slug) {
      this.getItemBySlug();
    }
  },
  components: {
    AdminLoading,
    FormError,
  },
  watch: {
    "form.title": function (val) {
      this.form.slug = helpers.sluglify(val);
    },
  },
  validations: {
    form: {
      title: { required },
      description: { required },
      summary: { required },
      image: { required },
      level: { required },
      tags: { required },
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (this.$v.$error) return;

      try {
        this.loading = true;

        await this.$axios.post("/projects", {
          ...this.form,
          tags: this.form.tags.toString()
        });

        this.loading = false;

        this.$router.push({ name: "admin-projects" });

        this.$toast.success("Producto agregado", {
          position: "top-right",
          duration: 2000,
        });
      } catch (error) {
        console.log("Error");
        console.log(error);
        this.loading = false;
      }
    },
    uploadFiles(type) {
      var myWidget = cloudinary.createUploadWidget(
        cloudinaryConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done");
            console.log(result.info);

            let image = {
              url: result.info.secure_url,
              thumbnail_url: result.info.thumbnail_url,
              path: result.info.path,
              description: null,
            };

            if (type === "image") {
              this.form.image = image;
            } else {
              this.form.images.push(image);
            }
          }
        }
      );

      myWidget.open();
    },
    async getItemBySlug() {
      try {
        let response = await this.$axios.get(`/projects/${this.slug}`);

        this.form = response.data.payload;
      } catch (error) {
        console.log("Error in getItemBySlug");
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
