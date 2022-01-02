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

    <section class="cv__main py-4 px-5">
      <div>
        <h3>EXPERIENCIA LABORAL</h3>

        <div class="mt-2">
          <p>PUESTO MÁS RECIENTE O ACTUAL</p>
          <div>
            <span>EMPRESA | </span>
            <span>PERIODO (MES Y AÑO)</span>

            <ul>
              <li>Describe tus actividades en viñetas.</li>
              <li>Destaca tus logros (También en viñetas)</li>
            </ul>
          </div>
        </div>

        <div>
          <p>PUESTO MÁS RECIENTE O ACTUAL</p>
          <div>
            <span>EMPRESA | </span>
            <span>PERIODO (MES Y AÑO)</span>

            <ul>
              <li>Describe tus actividades en viñetas.</li>
              <li>Destaca tus logros (También en viñetas)</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3>FORMACIÓN ACADÉMICA</h3>

        <div class="mt-2">
          <p>TU CARRERA O ESTUDIOS</p>
          <div>
            <span>(Titulado/Pasante/Trunco)</span>
            <span>INSTITUCIÓN PERIODO</span>

            <ul>
              <li>Describe tus actividades en viñetas.</li>
              <li>Destaca tus logros (También en viñetas)</li>
            </ul>
          </div>
        </div>

        <div>
          <p>TU CARRERA O ESTUDIOS</p>
          <div>
            <span>(Titulado/Pasante/Trunco)</span>
            <span>INSTITUCIÓN PERIODO</span>

            <ul>
              <li>Describe tus actividades en viñetas.</li>
              <li>Destaca tus logros (También en viñetas)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- <div>
        <h3>HABILIDADES</h3>

        <ul>
          <li>Habilidad 1</li>
          <li>Habilidad 2</li>
          <li>Habilidad 3</li>
        </ul>
      </div> -->

      <div>
        <h3>CONOCIMIENTOS</h3>

        <ul>
          <li>Conocimiento 1</li>
          <li>Conocimiento 2</li>
          <li>Conocimiento 3</li>
        </ul>
      </div>
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

  p,
  span {
    font-size: .8em;
  }

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
      font-size: .9em;
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
    border-right: 1px solid rgba($app-dark, .3);
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: white;
    margin: 0 auto;
  }

  &__main {
    h3 {
      font-size: 1em;
      font-weight: 700;
      color: #477EC2;
    }
  }
}
</style>
