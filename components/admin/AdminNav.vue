<template>
  <nav class="admin-nav">
    <ul class="nav-list list-unstyled mt-4 px-2">
      <button
        type="button"
        class="admin-nav-item text-left text-decoration-none w-100 py-2 pl-2 border-0 cursor-pointer mb-2"
        :class="{ active: isActive(item.routeName) }"
        v-for="item in items"
        :key="item.id"
        @click="toAction(item)"
      >
        <div
          class="d-flex justify-content-between align-items-start"
        >
          <div class="d-flex">
            <span
              class="admin-nav-icon"
              :class="{ active: isActive(item.routeName) }"
            >
              <i :class="item.icon" aria-hidden="true"></i>
            </span>

            <div class="ml-2" v-if="showNav">
              <span
                class="admin-nav-label d-inline-block"
                :class="{ active: isActive(item.routeName) }"
                >{{ item.text }}</span
              >
              <p class="admin-nav-description">{{ item.description }}</p>
            </div>
          </div>

          <span
            class="arrow-icon"
            :class="{ active: isActive(item.routeName) }"
            v-if="showNav"
          >
            <i
              class="fas fa-angle-right"
              aria-hidden="true"
              v-if="!item.subItems"
            ></i>

            <span v-else>
              <i
                class="fas fa-angle-down"
                aria-hidden="true"
                v-if="!item.showSubmenu"
              ></i>
              <i class="fas fa-angle-up" aria-hidden="true" v-else></i>
            </span>
          </span>
        </div>

        <div class="border" v-if="item.subItems && item.showSubmenu">
          <ul>
            <li v-for="subitem in item.subItems" :key="subitem.text">
              <nuxt-link :to="{ name: subitem.routeName }">{{
                subitem.text
              }}</nuxt-link>
            </li>
          </ul>
        </div>
      </button>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          text: "Inicio",
          description: "Dashboards, Widgets & Layout.",
          icon: "fas fa-home",
          routeName: "admin",
          showSubmenu: false,
        },
        {
          id: 2,
          text: "Proyectos",
          description: "Dashboards, Widgets & Layout.",
          icon: "fas fa-home",
          routeName: "admin-projects",
          subItems: [
            {
              text: "Listar",
              routeName: "admin-projects",
            },
            {
              text: "Agregar",
              routeName: "admin-projects-create",
            },
            {
              text: "Listar",
            },
          ],
          showSubmenu: false,
        },
        {
          id: 3,
          text: "Blog",
          description: "Agregar, listar, actualizar o eliminar",
          icon: "fas fa-home",
          routeName: "admin-blog",
          subItems: [
            {
              text: "Listar",
            },
          ],
          showSubmenu: false,
        },
        {
          id: 4,
          text: "Suscriptores",
          description: "Gestionar suscriptores de blog",
          icon: "fas fa-home",
          routeName: "admin-suscriptores",
          subItems: [
            {
              text: "Listar",
            },
          ],
          showSubmenu: false,
        },
      ],
      showNav: true,
    };
  },
  methods: {
    isActive(route) {
      return this.$route.name === route;
    },
    toAction(item) {
      if (item.subItems) {
        this.toggleSubmenu(item);
      } else {
        this.$router.push({ name: item.routeName });
      }
    },
    toggleSubmenu(item) {
      if (item.showSubmenu) {
        item.showSubmenu = false;
      } else {
        this.items.forEach((i) => (i.showSubmenu = false));
        item.showSubmenu = !item.showSubmenu;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-nav {
  &-item {
    background-color: rgba(115, 102, 255, 0.06);
    color: rgba($app-dark, 0.85);
    padding: 0.65rem .5rem;
    border-radius: 9px;
    box-shadow: 0px 0px 5px -1px rgba($admin-primary, 0.3) !important;

    &.active {
      background-color: rgba($admin-primary, 0.35);
    }

    &:hover {
      .arrow-icon {
        transform: scale(1.1);
        transition: transform 0.5s;
      }
    }
  }

  &-label {
    font-weight: 500;

    &.active {
      color: $admin-primary;
      font-weight: 700;
    }
  }

  &-description {
    font-size: 0.7em;
  }

  .arrow-icon {
    font-weight: 500;
  }

  &-icon {
    font-size: 15px;
    font-weight: 300;

    &.active {
      color: $admin-primary;
    }
  }
}
</style>
