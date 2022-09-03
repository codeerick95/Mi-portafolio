<template>
  <section
    class="admin-layout main-shadow animate__animated animate__fadeIn animate__faster"
  >
    <div class="admin-layout-header d-flex justify-content-between">
      <h1 class="title">Proyectos</h1>

      <!-- <router-link
        :to="{ name: 'admin-projects-create' }"
        type="button"
        class="btn btn-info"
      >
        Registrar proyecto
        <i class="fas fa-plus ml-2"></i>
      </router-link> -->
    </div>

    <AdminLoading v-if="loading" />

    <section class="mt-5 position-relative" v-else>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <form action="" @submit.prevent="submit()">
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

              <FormError
                text="El campo es requerido"
                v-if="$v.form.title.$error"
              />
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

              <FormError
                text="El campo es requerido"
                v-if="$v.form.title.$error"
              />
            </div>

            <div class="form-group">
              <label for="slug">Slug</label>
              <input
                type="text"
                id="slug"
                class="form-control"
                v-model="form.slug"
              />
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
              <label for="url">Url</label>
              <input
                type="text"
                id="url"
                class="form-control"
                v-model="form.url"
              />
            </div>

            <div class="form-group">
              <label for="images">Imágenes</label>

              <section>
                <button class="btn btn-info" @click="uploadFiles">
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
              <nuxt-link
                :to="{ name: 'admin-projects' }"
                class="text-danger mr-3"
                >Cancelar</nuxt-link
              >
              <button type="submit" class="btn btn-primary">Publicar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import { required } from "vuelidate/lib/validators";

import hljs from "highlight.js";

import AdminLoading from "@/components/admin/AdminLoading";
import FormError from "@/components/global/FormError";

export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      loading: false,
      form: {
        title: null,
        description: "",
        slug: null,
        images: [],
        url: null,
        status: null,
        level: null,
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
  mounted() {},
  components: {
    AdminLoading,
    FormError,
  },
  validations: {
    form: {
      title: { required },
      description: { required },
      level: { required },
    },
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (this.$v.$error) return;

      try {
        console.log(this.form.level);

        let item = await await this.$axios.post("/projects", {
          ...this.form,
        });

        console.log(item);
      } catch (error) {}
    },
    uploadFiles() {
      var myWidget = cloudinary.createUploadWidget(
        {
          cloudName: "ehldev",
          uploadPreset: "web_personal",
          language: "es",
          text: {
            es: {
              queue: {
                title: "Archivos a subir",
                title_uploading_with_counter: "Uploading {{num}} files",
              },
              crop: {
                title: "Crop your image",
              },
              local: {
                browse: "Explorar",
                dd_title_multi: "Arrastre o suelte un archivo aquí",
              },
            },
          },
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done");
            console.log(result.info);
            this.form.images.push({
              url: result.info.secure_url,
              thumbnail_url: result.info.thumbnail_url,
              path: result.info.path,
              description: null,
            });
          }
        }
      );

      myWidget.open();
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    }),
    contentCode() {
      return hljs.highlightAuto(this.form.description).value;
    },
  },
};
</script>

<style lang="scss"></style>
