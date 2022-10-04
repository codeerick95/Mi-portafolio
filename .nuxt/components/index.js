export const FormError = () => import('../..\\components\\global\\FormError.vue' /* webpackChunkName: "components/form-error" */).then(c => wrapFunctional(c.default || c))
export const HeaderApp = () => import('../..\\components\\global\\HeaderApp.vue' /* webpackChunkName: "components/header-app" */).then(c => wrapFunctional(c.default || c))
export const HeaderMobile = () => import('../..\\components\\global\\HeaderMobile.vue' /* webpackChunkName: "components/header-mobile" */).then(c => wrapFunctional(c.default || c))
export const MensajeRapido = () => import('../..\\components\\global\\MensajeRapido.vue' /* webpackChunkName: "components/mensaje-rapido" */).then(c => wrapFunctional(c.default || c))
export const NavRedesMobile = () => import('../..\\components\\global\\NavRedesMobile.vue' /* webpackChunkName: "components/nav-redes-mobile" */).then(c => wrapFunctional(c.default || c))
export const Logo = () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const AdminHeader = () => import('../..\\components\\admin\\AdminHeader.vue' /* webpackChunkName: "components/admin-header" */).then(c => wrapFunctional(c.default || c))
export const AdminLoading = () => import('../..\\components\\admin\\AdminLoading.vue' /* webpackChunkName: "components/admin-loading" */).then(c => wrapFunctional(c.default || c))
export const AdminNav = () => import('../..\\components\\admin\\AdminNav.vue' /* webpackChunkName: "components/admin-nav" */).then(c => wrapFunctional(c.default || c))
export const AdminSidebar = () => import('../..\\components\\admin\\Sidebar.vue' /* webpackChunkName: "components/admin-sidebar" */).then(c => wrapFunctional(c.default || c))
export const BlogAutorInfo = () => import('../..\\components\\blog\\AutorInfo.vue' /* webpackChunkName: "components/blog-autor-info" */).then(c => wrapFunctional(c.default || c))
export const BlogCardBlog = () => import('../..\\components\\blog\\CardBlog.vue' /* webpackChunkName: "components/blog-card-blog" */).then(c => wrapFunctional(c.default || c))
export const PracticasFormNombre = () => import('../..\\components\\practicas\\FormNombre.vue' /* webpackChunkName: "components/practicas-form-nombre" */).then(c => wrapFunctional(c.default || c))
export const PortafolioCardProyecto = () => import('../..\\components\\portafolio\\CardProyecto.vue' /* webpackChunkName: "components/portafolio-card-proyecto" */).then(c => wrapFunctional(c.default || c))
export const AdminProjectsFormProject = () => import('../..\\components\\admin\\projects\\FormProject.vue' /* webpackChunkName: "components/admin-projects-form-project" */).then(c => wrapFunctional(c.default || c))
export const BlogSuscriptionSubscribeButton = () => import('../..\\components\\blog\\suscription\\SubscribeButton.vue' /* webpackChunkName: "components/blog-suscription-subscribe-button" */).then(c => wrapFunctional(c.default || c))
export const BlogSuscriptionSubscribeForm = () => import('../..\\components\\blog\\suscription\\SubscribeForm.vue' /* webpackChunkName: "components/blog-suscription-subscribe-form" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
