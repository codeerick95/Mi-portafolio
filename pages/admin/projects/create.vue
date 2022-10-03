<template>
  <section
    class="admin-layout main-shadow animate__animated animate__fadeIn animate__faster"
  >
    <div class="admin-layout-header d-flex justify-content-between">
      <h1 class="title">Proyectos</h1>
    </div>

    <section class="mt-5 position-relative">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <FormProject />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import FormProject from '@/components/admin/projects/FormProject'

export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
    };
  },
  components: {
    FormProject
  }
};
</script>

<style lang="scss"></style>
