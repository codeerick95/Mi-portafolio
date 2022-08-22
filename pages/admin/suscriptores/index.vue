<template>
  <section>
    <h1>Suscriptores</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Fecha de registro</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ $moment(item.createdAt).format('DD/MM/YYYY') }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      total: 0,
      limit: 10,
      page: 1,
      items: [],
    };
  },
  mounted() {
    this.getItems();
  },
  methods: {
    async getItems() {
      let params = {
        limit: this.limit,
        page: this.page,
      };

      let response = await this.$axios.get("/suscriptors", { params });

      this.items = response.data.items.docs;
    },
  },
};
</script>

<style lang="scss"></style>
