<template>
  <button
    type="button"
    class="suscription-button text-left d-flex align-items-center p-2 border-0"
    @click="showSuscriptionForm()"
  >
    <div>
      <h3 class="title">Suscríbete a mi blog</h3>
      <p class="description mt-2">
        Y mantente informado de mis nuevas publicaciones. Es gratis.
      </p>
    </div>
    <span class="icon">
      <i class="fas fa-blog"></i>
    </span>
  </button>
</template>

<script>
export default {
  name: "SubscribeButton",
  methods: {
    showSuscriptionForm() {
      this.$smoothScroll({
        scrollTo: document.getElementById("form-suscription"),
        updateHistory: false,
        duration: 700,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.suscription-button {
  background-color: rgba($success, 0.5);
  box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.81);
  -webkit-box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.81);
  -moz-box-shadow: 0px 4px 5px -3px rgba(0, 0, 0, 0.81);

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .description {
    font-size: 0.9em;
    line-height: 1.1em;
  }

  .icon {
    font-size: 2rem;
  }
}
</style>
