<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <article class="card mt-5">
          <div class="card-body">
            <h1 class="font-weight-bold">Ingresar</h1>
            <p class="small">Sitio web privado, solo acceso autorizado.</p>

            <form action="" class="mt-2" @submit.prevent="login()">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" v-model="form.email" />
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="form.password"
                />
              </div>

              <div class="form-group text-right">
                <input type="submit" class="btn btn-primary" />
              </div>
            </form>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "default",
  data() {
    return {
      form: {
        email: "e@test.com",
        password: "secret",
      },
    };
  },
  middleware({ store, redirect }) {
    if(store.state.auth.loggedIn) {
      redirect('/admin')
    }
  },
  methods: {
    async login() {
      try {
        let { email, password } = this.form;

        let data = {
          email,
          password,
        };

        await this.$auth.loginWith("local", { data });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState({
      usuarioLogueado: (state) => state.auth.usuarioLogueado,
    }),
  },
  // mounted() {
  //   console.log(this.usuarioLogueado);
  //   if (this.usuarioLogueado) {
  //     this.$router.push("/");
  //   }
  // }
};
</script>

<style lang="scss"></style>
