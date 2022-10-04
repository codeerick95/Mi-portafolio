import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_b13b83f8 from 'nuxt_plugin_plugin_b13b83f8' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_bootstrapvue_48dd4154 from 'nuxt_plugin_bootstrapvue_48dd4154' // Source: .\\bootstrap-vue.js (mode: 'all')
import nuxt_plugin_toast_ca583654 from 'nuxt_plugin_toast_ca583654' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_vuesweetalert2_276cf4fe from 'nuxt_plugin_vuesweetalert2_276cf4fe' // Source: .\\vue-sweetalert2.js (mode: 'client')
import nuxt_plugin_axios_62b8cfb2 from 'nuxt_plugin_axios_62b8cfb2' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_googlegtag_120f64d4 from 'nuxt_plugin_googlegtag_120f64d4' // Source: .\\google-gtag.js (mode: 'client')
import nuxt_plugin_workbox_35ee9f83 from 'nuxt_plugin_workbox_35ee9f83' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_54cf6103 from 'nuxt_plugin_metaplugin_54cf6103' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_59770677 from 'nuxt_plugin_iconplugin_59770677' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_moment_147afe51 from 'nuxt_plugin_moment_147afe51' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_firebase_450a3d0a from 'nuxt_plugin_firebase_450a3d0a' // Source: ..\\plugins\\firebase.js (mode: 'all')
import nuxt_plugin_vuefroala_5f78f812 from 'nuxt_plugin_vuefroala_5f78f812' // Source: ..\\plugins\\vue-froala.js (mode: 'client')
import nuxt_plugin_prism_403e4edc from 'nuxt_plugin_prism_403e4edc' // Source: ..\\plugins\\prism.js (mode: 'client')
import nuxt_plugin_aos_46381b18 from 'nuxt_plugin_aos_46381b18' // Source: ..\\plugins\\aos.js (mode: 'client')
import nuxt_plugin_smoothscroll_15c75071 from 'nuxt_plugin_smoothscroll_15c75071' // Source: ..\\plugins\\smooth-scroll.js (mode: 'client')
import nuxt_plugin_pdf_5f2fe10b from 'nuxt_plugin_pdf_5f2fe10b' // Source: ..\\plugins\\pdf.js (mode: 'client')
import nuxt_plugin_vuelidate_5f78d528 from 'nuxt_plugin_vuelidate_5f78d528' // Source: ..\\plugins\\vuelidate.js (mode: 'all')
import nuxt_plugin_nuxtquillplugin_6eadee8e from 'nuxt_plugin_nuxtquillplugin_6eadee8e' // Source: ..\\plugins\\nuxt-quill-plugin (mode: 'client')
import nuxt_plugin_auth_1ae8f029 from 'nuxt_plugin_auth_1ae8f029' // Source: .\\auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"erick","htmlAttrs":{"lang":"es"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.gstatic.com"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fhamburgers\u002F1.1.3\u002Fhamburgers.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fanimate.css\u002F4.1.1\u002Fanimate.min.css"}],"script":[{"src":"https:\u002F\u002Fkit.fontawesome.com\u002F3bd84f9f96.js","crossorigin":"anonymous"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fhtml2canvas\u002F1.3.4\u002Fhtml2canvas.min.js"},{"src":"https:\u002F\u002Fupload-widget.cloudinary.com\u002Fglobal\u002Fall.js"},{"src":"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=G-FP2YNDLT8Z","async":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_b13b83f8 === 'function') {
    await nuxt_plugin_plugin_b13b83f8(app.context, inject)
  }

  if (typeof nuxt_plugin_bootstrapvue_48dd4154 === 'function') {
    await nuxt_plugin_bootstrapvue_48dd4154(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_ca583654 === 'function') {
    await nuxt_plugin_toast_ca583654(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuesweetalert2_276cf4fe === 'function') {
    await nuxt_plugin_vuesweetalert2_276cf4fe(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_62b8cfb2 === 'function') {
    await nuxt_plugin_axios_62b8cfb2(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googlegtag_120f64d4 === 'function') {
    await nuxt_plugin_googlegtag_120f64d4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_35ee9f83 === 'function') {
    await nuxt_plugin_workbox_35ee9f83(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_54cf6103 === 'function') {
    await nuxt_plugin_metaplugin_54cf6103(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_59770677 === 'function') {
    await nuxt_plugin_iconplugin_59770677(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_147afe51 === 'function') {
    await nuxt_plugin_moment_147afe51(app.context, inject)
  }

  if (typeof nuxt_plugin_firebase_450a3d0a === 'function') {
    await nuxt_plugin_firebase_450a3d0a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuefroala_5f78f812 === 'function') {
    await nuxt_plugin_vuefroala_5f78f812(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_prism_403e4edc === 'function') {
    await nuxt_plugin_prism_403e4edc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_46381b18 === 'function') {
    await nuxt_plugin_aos_46381b18(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_smoothscroll_15c75071 === 'function') {
    await nuxt_plugin_smoothscroll_15c75071(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pdf_5f2fe10b === 'function') {
    await nuxt_plugin_pdf_5f2fe10b(app.context, inject)
  }

  if (typeof nuxt_plugin_vuelidate_5f78d528 === 'function') {
    await nuxt_plugin_vuelidate_5f78d528(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtquillplugin_6eadee8e === 'function') {
    await nuxt_plugin_nuxtquillplugin_6eadee8e(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_1ae8f029 === 'function') {
    await nuxt_plugin_auth_1ae8f029(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
