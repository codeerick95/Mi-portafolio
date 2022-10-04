import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _111471c8 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _04c42307 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0d7f86c8 = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _edd444a8 = () => interopDefault(import('..\\pages\\cv.vue' /* webpackChunkName: "pages/cv" */))
const _4bfd1569 = () => interopDefault(import('..\\pages\\cv-anterior.vue' /* webpackChunkName: "pages/cv-anterior" */))
const _32edb91a = () => interopDefault(import('..\\pages\\practicas.vue' /* webpackChunkName: "pages/practicas" */))
const _39baac7d = () => interopDefault(import('..\\pages\\proyectos\\index.vue' /* webpackChunkName: "pages/proyectos/index" */))
const _21e0ca1b = () => interopDefault(import('..\\pages\\template-base.vue' /* webpackChunkName: "pages/template-base" */))
const _5eedf53a = () => interopDefault(import('..\\pages\\admin\\blog\\index.vue' /* webpackChunkName: "pages/admin/blog/index" */))
const _7dc52b9a = () => interopDefault(import('..\\pages\\admin\\login.vue' /* webpackChunkName: "pages/admin/login" */))
const _13a2ac62 = () => interopDefault(import('..\\pages\\admin\\projects\\index.vue' /* webpackChunkName: "pages/admin/projects/index" */))
const _b83af744 = () => interopDefault(import('..\\pages\\admin\\suscriptores\\index.vue' /* webpackChunkName: "pages/admin/suscriptores/index" */))
const _3a96f508 = () => interopDefault(import('..\\pages\\blog\\captura-de-pantalla-con-javascript.vue' /* webpackChunkName: "pages/blog/captura-de-pantalla-con-javascript" */))
const _9ad34b22 = () => interopDefault(import('..\\pages\\admin\\blog\\crear.vue' /* webpackChunkName: "pages/admin/blog/crear" */))
const _ef31aac8 = () => interopDefault(import('..\\pages\\admin\\projects\\create.vue' /* webpackChunkName: "pages/admin/projects/create" */))
const _44204560 = () => interopDefault(import('..\\pages\\admin\\projects\\edit\\_slug.vue' /* webpackChunkName: "pages/admin/projects/edit/_slug" */))
const _38040b35 = () => interopDefault(import('..\\pages\\proyectos\\_slug.vue' /* webpackChunkName: "pages/proyectos/_slug" */))
const _0dc192a9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _111471c8,
    name: "admin"
  }, {
    path: "/blog",
    component: _04c42307,
    name: "blog"
  }, {
    path: "/contacto",
    component: _0d7f86c8,
    name: "contacto"
  }, {
    path: "/cv",
    component: _edd444a8,
    name: "cv"
  }, {
    path: "/cv-anterior",
    component: _4bfd1569,
    name: "cv-anterior"
  }, {
    path: "/practicas",
    component: _32edb91a,
    name: "practicas"
  }, {
    path: "/proyectos",
    component: _39baac7d,
    name: "proyectos"
  }, {
    path: "/template-base",
    component: _21e0ca1b,
    name: "template-base"
  }, {
    path: "/admin/blog",
    component: _5eedf53a,
    name: "admin-blog"
  }, {
    path: "/admin/login",
    component: _7dc52b9a,
    name: "admin-login"
  }, {
    path: "/admin/projects",
    component: _13a2ac62,
    name: "admin-projects"
  }, {
    path: "/admin/suscriptores",
    component: _b83af744,
    name: "admin-suscriptores"
  }, {
    path: "/blog/captura-de-pantalla-con-javascript",
    component: _3a96f508,
    name: "blog-captura-de-pantalla-con-javascript"
  }, {
    path: "/admin/blog/crear",
    component: _9ad34b22,
    name: "admin-blog-crear"
  }, {
    path: "/admin/projects/create",
    component: _ef31aac8,
    name: "admin-projects-create"
  }, {
    path: "/admin/projects/edit/:slug?",
    component: _44204560,
    name: "admin-projects-edit-slug"
  }, {
    path: "/proyectos/:slug",
    component: _38040b35,
    name: "proyectos-slug"
  }, {
    path: "/",
    component: _0dc192a9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
