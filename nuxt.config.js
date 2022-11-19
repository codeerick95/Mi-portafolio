import { config } from "./config/app-config";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "erick",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.gstatic.com" },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap'},
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' }
      // {
      //   rel: 'stylesheet',
      //   href: 'https://cdn.quilljs.com/1.3.6/quill.snow.css'
      // }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/3bd84f9f96.js",
        crossorigin: "anonymous",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.4/html2canvas.min.js",
      },
      {
        src: 'https://upload-widget.cloudinary.com/global/all.js'
      },
      // {
      //   src: 'https://cdn.quilljs.com/1.3.6/quill.js'
      // }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: "./assets/scss/app.scss",
      lang: "scss",
    },
    'quill/dist/quill.core.css',
    // for snow theme
    'quill/dist/quill.snow.css',
    // for bubble theme
    'quill/dist/quill.bubble.css'
  ],

  server: {
    port: 8000, // default: 3000
  },

  target: "server",

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "./plugins/firebase.js" },
    { src: "./plugins/vue-froala.js", mode: "client" },
    { src: "./plugins/prism.js", mode: "client" },
    { src: "./plugins/aos.js", mode: "client" },
    { src: "./plugins/smooth-scroll.js", mode: "client" },
    { src: "./plugins/pdf.js", mode: "client" },
    { src: "./plugins/vuelidate.js" },
    { src: '~plugins/nuxt-quill-plugin', ssr: false },
    { src: '~plugins/apps-components', mode: "client", ssr: false }
  ],

  env: {
    // FIRE_ENV: process.env.FIRE_ENV
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/moment", "@nuxtjs/pwa"],

  moment: {
    defaultLocale: "es",
    locales: ["es"],
  },

  pwa: {
    manifest: {
      name: "Web personal @ehldev",
      short_name: '@ehldev',
      description: 'Web personal @ehldev',
      lang: "es",
      useWebmanifestExtension: false,
    },
    workbox: {
      preCaching: [
        '/cv.pdf'
      ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
    // '@nuxtjs/firebase',
    "@nuxtjs/google-gtag",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    '@nuxtjs/dotenv',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/toast',
    'cookie-universal-nuxt'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  styleResources: {
    scss: ["./assets/scss/_variables.scss"],
  },
  /* firebase: {
    config: {
      apiKey: "AIzaSyAnsGhm-1Yt8UaxqC8U48FoCu1YdYh6bD4",
      authDomain: "erick-82dba.firebaseapp.com",
      projectId: "erick-82dba",
      storageBucket: "erick-82dba.appspot.com",
      messagingSenderId: "375771614862",
      appId: "1:375771614862:web:7922ad00babe2f7cb8c3df",
      measurementId: "G-5RB9TY14LC"
    },
    services: {
      auth: true,
      firestore: true,
      storage: true
    }
  }, */
  "google-gtag": {
    id: "G-G6BE5MP8YY",
    config: {
      anonymize_ip: true,
      send_page_view: false,
    },
    debug: true,
  },
  axios: {
    baseURL: process.env.PROJECT_STATUS === 'DEVELOP' ? config.api.urlDev : config.api.url, // Used as fallback if no runtime config is provided
  },
  auth: {
    redirect: {
      login: "/admin/login",
      logout: "/",
    },
    strategies: {
      local: {
        // token: {
        //   property: 'access_token',
        //   required: true,
        //   type: 'Bearer'
        // },
        // user: {
        //   property: false, // <--- Default "user"
        //   autoFetch: true
        // },
        token: {
          property: "token",
          global: true,
        },
        user: {
          property: "user", // the name of your object in your backend response payload
        },
        endpoints: {
          login: {
            url: "auth/login",
            method: "post",
            propertyName: "data.token",
          },
          user: { url: "auth/user", method: "get", propertyName: "data.user" },
          logout: false,
          tokenRequired: true,
        },
      },
    },
  },
  sweetalert: {
    confirmButtonColor: '#00c58e',
    cancelButtonColor: '#ff7674'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
