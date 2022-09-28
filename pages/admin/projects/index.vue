<template>
  <section
    class="admin-layout main-shadow animate__animated animate__fadeIn animate__faster"
  >
    <div class="admin-layout-header d-flex justify-content-between">
      <h1 class="title">Proyectos</h1>

      <router-link
        :to="{ name: 'admin-projects-form' }"
        type="button"
        class="btn btn-info"
      >
        Registrar proyecto
        <i class="fas fa-plus ml-2"></i>
      </router-link>
    </div>

    <AdminLoading v-if="loading" />

    <section class="mt-5 position-relative" v-else>
      <div
        class="table-options d-flex justify-content-between align-items-start"
      >
        <button
          type="button"
          class="btn btn-link text-dark text-uppercase font-weight-bold"
          @click="$bvModal.show('modal-filters')"
        >
          <i class="fas fa-filter"></i>
          Filtrar
        </button>

        <section class="d-flex align-items-center">
          <div class="mr-3">
            <button type="button" class="table-header-option" @click="getItems()">
              <i class="fas fa-sync-alt"></i>
            </button>
          </div>

          <form @submit.prevent="search()" class="form-search my-0 py-0">
            <div
              class="form-group mb-0 d-flex justify-content-end d-flex align-items-center h-100"
            >
              <input
                type="search"
                placeholder="Buscar por nombre producto"
                class="form-control search-field"
                v-model="query"
              />

              <button class="btn btn-info py-2 ml-2">Buscar</button>
            </div>
          </form>
        </section>
      </div>

      <div class="table-container table-responsive">
        <table class="main-table" width="100%">
          <thead class="text-center">
            <tr>
              <th scope="col"></th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Relevancia</th>
              <!-- <th scope="col">Stock actual</th> -->
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="item.id">
              <td class="cell">
                <!-- <img
                  :src="item.foto_real.url"
                  :alt="item.nombre"
                  class="table-img"
                /> -->
              </td>
              <td class="cell text">
                <nuxt-link to="/">
                  {{ item.title }}
                </nuxt-link>
              </td>
              <td class="cell text text-uppercase text-center">
                <!-- <b-form-checkbox
                  v-model="items[index].estado"
                  name="check-button"
                  switch
                  @change="updateStatus('status', item)"
                  class="ml-2"
                >
                </b-form-checkbox> -->

                <span class="badge" :class="`badge-${getStatus(item).color}`">{{
                  item.status
                }}</span>
              </td>
              <td class="cell text text-uppercase text-center">
                <!-- <b-form-checkbox
                  v-model="items[index].favoritos"
                  name="check-button"
                  switch
                  @change="updateStatus('´favoritos', item)"
                  class="ml-2"
                >
                </b-form-checkbox> -->
                <span class="small">{{ item.level }}</span>
              </td>
              <td class="cell text-center">
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none p-0"
                  class="custom-dropdown"
                  no-caret
                  right
                  :no-flip="true"
                  menu-class="dropdown-options"
                  @show="opacity = true"
                  @hide="opacity = false"
                >
                  <template #button-content>
                    <i class="fas fa-ellipsis-v"></i>
                  </template>
                  <b-dropdown-item href="#" @click.prevent="showDetails(item)"
                    >Ver detalles</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click.prevent="
                      $router.push({
                        name: 'admin-projects-form',
                        params: { slug: item.slug },
                      })
                    "
                    >Editar</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click.prevent="deleteItem(item.id, index)"
                    >Eliminar</b-dropdown-item
                  >
                </b-dropdown>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="pagination-container d-flex justify-content-center mt-5"
        v-if="items.length"
      >
        <b-pagination
          v-model="pagination.page"
          :total-rows="pagination.total"
          :per-page="pagination.limit"
          @change="paginate($event)"
        ></b-pagination>
      </div>

      <!-- <ButtonToTop elementId="main-container" /> -->
    </section>

    <b-modal id="modal-filters" title="Filtrar" hide-footer centered>
      <form @submit.prevent="filter()">
        <div class="form-row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="nro-items">Mostrar filas</label>
              <select
                id="nro-items"
                class="form-control select-options"
                v-model="pagination.limit"
              >
                <option :value="item" v-for="item in paginateItems" :key="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label for="products-status">Estado de producto</label>
              <select
                id="products-status"
                class="form-control select-options"
                v-model="status"
              >
                <option value="">Todos</option>
                <option value="Activado">Activados</option>
                <option value="Desactivado">Desactivados</option>
              </select>
            </div>
          </div>
        </div>

        <section class="text-right mt-3 px-4">
          <a
            href=""
            class="text-success mr-4"
            @click="clear()"
            v-if="pagination.limit != 5 || status != ''"
            >Limpiar filtros</a
          >

          <input type="submit" class="btn btn-primary px-4" value="Filtrar" />
        </section>
      </form>
    </b-modal>

    <b-modal
      id="modal-details"
      :title="`Detalles de producto #${selectedItem.id}`"
      hide-footer
      centered
      size="xl"
      class="modal-details"
    >
      <ProductDetail :item="selectedItem" />
    </b-modal>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import { PAGINATE_ITEMS } from "@/utils/static-values.js";

import AdminLoading from "@/components/admin/AdminLoading";

export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      items: [],
      pagination: {
        currentPage: 1,
        limit: 10,
        total: null,
      },
      status: "",
      loading: true,
      paginateItems: PAGINATE_ITEMS,
      selectedItem: {},
      query: "",
      projectStatus: [
        {
          key: "ACTIVATED",
          color: "success",
        },
        {
          key: "DEACTIVATED",
          color: "danger",
        },
      ],
    };
  },
  mounted() {
    this.getItems();
  },
  components: {
    AdminLoading,
  },
  methods: {
    async getItems() {
      let response = await this.$axios.get("/projects");

      this.pagination.total = response.data.total;
      this.items = response.data.docs;
      this.loading = false;
    },
    getStatus(object) {
      return this.projectStatus.find((item) => item.key === object.status);
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    }),
  },
};
</script>

<style lang="scss"></style>
