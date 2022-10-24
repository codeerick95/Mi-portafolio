<template>
  <section class="animate__animated animate__fadeIn animate__faster">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="admin-page-title">Agregar proyecto</h1>
    </div>

    <AdminLoading v-if="loading" />

    <div v-else>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <section class="admin-card mt-4 position-relative">
            <FormProject />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import FormProject from "@/components/admin/projects/FormProject";

export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      loading: false
    };
  },
  components: {
    FormProject,
  },
};
</script>

<style lang="scss"></style>
