<template>
  <main class="cv">
    <aside class="text-white">
      <h1 class="font-weight-bold mt-3 ml-4">Erick <br> Huamani</h1>

      <div class="text-center mt-3">
        <img src="https://avatars.githubusercontent.com/u/47234380?v=4" alt="ehldev">
      </div>

      <p class="mt-2">
        Describe lo que puedes ofrecer a la empresa. La razón por la que querrán que seas su colaborador (Tú objetivo profesional)
      </p>

      <div class="line mt-4"></div>

      <div class="text-center">
        <h2 class="font-weight-bold mt-3 mb-2">CONTACTO</h2>

        <p>+51 923 417 407</p>
        <p>dev.erick@gmail.com</p>
        <p>Lima - Perú</p>
        <p class="border-bottom d-inline-block mt-2">ehldev.netlify.com</p>
      </div>

      <div class="line mt-4"></div>

      <p>Facebook</p>
      <p>Linkedin</p>
    </aside>

    <section>
      
    </section>
  </main>
</template>

<script>

export default {
};
</script>

<style lang="scss">
.cv {
  max-width: 55%;
  height: 100vh;
  font-family: 'Roboto', sans-serif;

  display: grid;
  grid-template-columns: 1fr 2fr;

  margin: 0 auto;

  aside {
    grid-column: 1 / 2;
    background-color: #477EC2;
    padding: 1rem;

    h1 {
      font-size: 2em;
      line-height: 2rem;
    }

    h2 {
      font-size: 1em;
    }

    p {
      font-size: .95em;
    }

    p.border-bottom {
      border-bottom: 1px solid rgba(white, .7) !important;
    }

    img {
      width: 120px;
      height: 120px;

      border-radius: 50%;
    }
  }

  section {
    grid-column: 2 / 3;
    border: 1px solid;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: white;
    margin: 0 auto;
  }
}
</style>
