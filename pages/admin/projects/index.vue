<template>
  <section class="animate__animated animate__fadeIn animate__faster">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="admin-page-title">Proyectos</h1>

      <router-link
        :to="{ name: 'admin-projects-create' }"
        type="button"
        class="admin-button admin-button-primary"
      >
        Registrar proyecto
        <i class="fas fa-plus ml-1"></i>
      </router-link>
    </div>

    <AdminLoading v-if="loading" />

    <section class="admin-card mt-4 position-relative" v-else>
      <div
        class="table-options d-flex justify-content-between align-items-start"
      >
        <button
          type="button"
          class="admin-button text-uppercase font-weight-bold"
          @click="$bvModal.show('modal-filters')"
        >
          <i class="fas fa-filter"></i>
          Filtrar
        </button>

        <section class="d-flex align-items-center">
          <div class="mr-3">
            <button type="button" class="admin-button" @click="getItems()">
              <i class="fas fa-sync-alt"></i>
            </button>
          </div>

          <!-- <form @submit.prevent="search()" class="form-search my-0 py-0">
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
          </form> -->

          <AdminSearch placeholder="Buscar por nombre" />
        </section>
      </div>

      <div class="admin-table-container">
        <table class="admin-table" width="100%">
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
            <tr v-for="(item, index) in items" :key="index">
              <td>
                <div class="admin-table-image">
                  <img
                    :src="item.image.url"
                    :alt="item.name"
                    v-if="item.image"
                  />
                </div>
              </td>
              <td>
                <a
                  :href="`${config.domain}/proyectos/${item.slug}`"
                  target="_blank"
                  class="admin-table-text"
                >
                  {{ item.title }}
                  <i class="ri-external-link-line"></i>
                </a>
              </td>
              <td class="text-center">
                <!-- <b-form-checkbox
                  v-model="items[index].estado"
                  name="check-button"
                  switch
                  @change="updateStatus('status', item)"
                  class="ml-2"
                >
                </b-form-checkbox> -->

                <span
                  class="admin-badge text-white"
                  :class="`admin-badge-${getStatus(item).color}`"
                  >{{ getStatus(item).label }}</span
                >
              </td>
              <td class="text-uppercase text-center">
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
              <td class="text-center">
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
                        name: 'admin-projects-edit-slug',
                        params: { slug: item.slug },
                      })
                    "
                    >Editar</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click.prevent="openModalDelete(item._id, index)"
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

import { config } from "@/config/app-config";

import { PAGINATE_ITEMS } from "@/utils/static-values.js";

import AdminLoading from "@/components/admin/AdminLoading";

// import { AdminSearch } from 'apps-components'

export default {
  layout: "admin",
  middleware: "auth",
  data() {
    return {
      config,
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
          label: "Activo",
          color: "primary",
        },
        {
          key: "DEACTIVATED",
          label: "Desactivado",
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
    // AdminSearch
  },
  methods: {
    async getItems() {
      let response = await this.$axios.get("/projects");

      this.pagination.total = response.data.total;
      this.items = [...response.data.docs];
      this.loading = false;
    },
    getStatus(object) {
      return this.projectStatus.find((item) => item.key === object.status);
    },
    openModalDelete(id, index) {
      this.$swal
        .fire({
          title: "Está seguro de eliminar",
          text: "El elemento no podrá ser recuperado",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "¡Sí, borrar!",
          cancelButtonText: "No, cancelar!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await this.deleteItem(id, index);
          }
        });
    },
    async deleteItem(id, index) {
      try {
        console.log(id);
        console.log(index);

        await this.$axios.delete(`/projects/${id}`);

        this.items.splice(index, 1);
        console.log(this.items);

        // this.getItems();

        this.$toast.success("Elemento eliminado", {
          position: "top-right",
          duration: 2000,
        });
      } catch (error) {
        console.log("Error");
        console.log(error);
      }
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    }),
  },
};
</script>

<style lang="scss">
</style>
