<template>
  <main class="cv animate__animated animate__fadeIn">
    <aside class="text-white">
      <h1 class="font-weight-bold mt-3 ml-4">Erick <br> Huamani</h1>

      <div class="text-center mt-3">
        <img src="https://avatars.githubusercontent.com/u/47234380?v=4" alt="ehldev">
      </div>

      <p class="mt-2">
        En mi corta carrera como programador he enfrentado grandes retos y he estado a cargo de proyectos importantes, siempre dando lo mejor de mí.
      </p>

      <div class="line mt-4"></div>

      <div class="text-center">
        <h2 class="font-weight-bold mt-3 mb-2">CONTACTO</h2>

        <p>+51 923 417 407</p>
        <p>dev.erick@gmail.com</p>
        <p>Lima - Perú</p>
        <p class="border-bottom d-inline-block mt-2">ehldev.netlify.com</p>
      </div>

      <!-- <div class="line mt-4"></div>

      <p>Facebook</p>
      <p>Linkedin</p> -->
    </aside>

    <section class="cv__main py-3 px-4">
      <div>
        <h3>EXPERIENCIA LABORAL</h3>

        <div class="mt-2">
          <p class="font-weight-400">DESAROLLADOR FRONTEND</p>
          <div>
            <span>SOFTAKI</span>
            <span>(08/2021 - ACTUALIDAD)</span>

            <ul>
              <li>Mantenimiento de web externa en Vuejs.</li>
              <li>Frontent con Reactjs</li>
            </ul>
          </div>
        </div>

        <div>
          <p class="font-weight-400 text-uppercase">Freelancer</p>
          <div>
            <span>Diversos clientes</span>
            <span>(11/2019 - 07/2021)</span>

            <ul>
              <li>Frontent con Vuejs</li>
              <li>Desarrollo Frontend de landing Pages, Ecommerce...</li>
              <li>Desarrollo Frontend de sistemas administrativos.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h3>FORMACIÓN ACADÉMICA</h3>

        <div class="mt-2">
          <p class="font-weight-400">Plataformas digitales (Platzi, Udemy)</p>
          <p class="font-weight-400 mt-2">Bootcamp Desarrollo web Full Stack</p>
          <div>
            <span>En curso -</span>
            <span>CodiGo Tecsup</span>

            <ul>
              <li>Programación Frontend: Js Vanilla, React, Firebase</li>
              <li>Programación Backend: Python, NodeJs</li>
            </ul>
          </div>
        </div>

        <div>
          <p class="font-weight-400">Desarrollo de sistemas</p>
          <div>
            <span>Trunco -</span>
            <span>IDAT</span>

            <ul>
              <li>Desarrollo de software</li>
              <li>Programación en Python</li>
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

      <div class="mt-4">
        <h3>HABILIDADES</h3>

        <ul class="pt-2">
          <li>Html, Css y Javascript, Vuejs & Nuxtjs, React & Nextjs, Git</li>
          <li>Maquetación responsive, interactividad y accesibilidad web.</li>
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
  span,
  li {
    font-size: .9em;
    font-weight: 200;
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
