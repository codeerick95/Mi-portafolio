<template>
	<section class="blog-slug container mt-5">
		<div class="row">
			<div class="col-md-10">
				<div class="card border-0">
					<div class="card-body">
						<h1 class="font-weight-bold">Captura de pantalla con Javascript</h1>

						<p class="mt-3">
							En este tutorial veremos como utilizar la librería <a href="https://html2canvas.hertzen.com" target="_blank" class="font-weight-bold">html2canvas</a> para generar un <i>Screenshot</i> a un elemento o sección en específico.
						</p>

						<section class="mt-4">
							<h2 class="subtitulo">Para empezar</h2>
							
							<div class="mt-2">
								<p>
									Debemos descargar <i>html2canvas</i> a nuestro proyecto, para ello podemos hacerlo a travéz del CDN:
								</p>

								<section class="mt-3">
									<pre><code class="language-html">https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.4/html2canvas.min.js</code></pre>
								</section>

								<p>O si prefieres utilizar Npm:</p>

								<section class="mt-3">
									<pre><code class="language-html">npm install html2canvas</code></pre>
									<pre><code class="language-html">import html2canvas from 'html2canvas';</code></pre>
								</section>

								<p>Lo siguiente es asignar un ID al elemento padre al que queremos tomar el <i>Screenshot.</i></p>

								<span>Por ejemplo:</span>

								<div class="mt-2 text-left">
									<pre><code class="language-html">&lt;div id="capture" style="width: 200px; height: 200px; padding: 10px; background: #f5da55"&gt;
    &lt;h4 style="color: #000;"&gt;Mi contenido a capturar&lt;/h4&gt;
&lt;/div&gt;</code></pre>
								</div>


								<p class="mt-2">Lo siguiente es llamar al método <i>html2canvas()</i> paśandole como primer parámetro el elemento al que asignamos el id y esperando recibir una promesa con el canvas ya procesado.</p>

								<p class="mt-1">Al finalizar la promesa podemos mostrar la imagen de distintas formas o incluso descargarla utilizando líneas de js adicionales (Ver ejemplo completo).</p>

								<div class="mt-2">
									<pre><code class="language-javascript">html2canvas(document.querySelector("#capture")).then(canvas => {
    console.log(canvas)									
    document.body.appendChild(canvas)
});</code></pre>
								</div>

								<p class="mt-2">¡Eso es todo! para generar y obtener la captura de la sección seleccionada.</p>

								<div class="alert alert-warning mt-3">
									¡Advertencia!
									<p class="text-dark">
										Todas las imágenes que utiliza el script deben residir bajo el mismo origen, para evitar ésto podemos pasarle adicionalmente un objeto de configuración como parámetro. De la siguiente manera:
									</p>
								</div>

								<div class="mt-4">
									<pre><code class="language-javascript">let options = {
    allowTaint: true,
    useCORS: true
}
html2canvas(document.querySelector("#capture"), options).then(canvas => {
    console.log(canvas)									
    document.body.appendChild(canvas)
});</code></pre>
								</div>

								<p class="mt-3">
									Para más información sobre la configuración o sobre la librería, se recomienda visitar
									<a href="https://html2canvas.hertzen.com/documentation" target="_blank">
										La documentación oficial
									</a>
								</p>

								<h2 class="subtitulo mt-4">Ejemplo completo</h2>

								<p class="mt-2">Para nuestro ejemplo utilizaremos un botón para generar el screenshot y luego mostraremos la captura realizada y adicionalmente un botón para descargar la imagen generada.</p>

								<div class="container mt-3">
									<div class="row">
										<div class="col-md-6">
											<div id="capture" style="width: 200px; height: 200px; padding: 10px; background: #f5da55">
											    <h4 style="color: #000; ">Hello world!</h4>
											</div>

											<button @click="screen()" class="btn btn-primary mt-3">
												Screen
												<i class="fas fa-camera"></i>
											</button>
										</div>

										<div class="col-md-6">
											<p v-if="generandoCaptura">Generando captura...</p>

											<section class="d-flex flex-column justify-content-start align-items-start" v-if="!generandoCaptura && capture">
												<img :src="capture" alt="" class="img-fluid">

												<button @click="download()" class="btn btn-info mt-3">
													Descargar imagen
													<i class="fas fa-download"></i>
												</button>
											</section>
										</div>
									</div>
								</div>

								<h2 class="subtitulo mt-3">Para finalizar</h2>

								<p>Deja volar a tu imaginación y busca como poder implementar esta grandiosa librería a tus proyectos y hacer que la interacción con tus usuarios sea fantástica.</p>

								<p class="mt-3">
									Yo realicé un pequeño proyecto (<a href="" target="_blank">Generador de collage</a>) con Vue js en el cual puse a trabajar esta librería.
								</p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import Prism from '~/plugins/prism'

	export default {
		data() {
			return {
				slug: this.$route.params.slug,
				generandoCaptura: false,
				capture: null
			}
		},

		mounted() {
			Prism.highlightAll()
		},

		methods: {
			screen() {
				this.generandoCaptura = true

				setTimeout(() => {
					html2canvas(document.querySelector("#capture")).then(canvas => {
					    this.generandoCaptura = false

					    let url = canvas.toDataURL();
					    this.capture = url
					});
				}, 1000)
			},
			download() {
				html2canvas(document.querySelector("#capture")).then(canvas => {
				    this.generandoCaptura = false

				    let url = canvas.toDataURL();
				    this.capture = url

				    var anchorTag = document.createElement("a");
	                document.body.appendChild(anchorTag);
	                anchorTag.download = "filename.jpg";
	                anchorTag.href = url
	                anchorTag.target = '_blank';
	                anchorTag.click();
				});
			}
		}
	}
</script>

<style lang="scss">
.blog-slug {
	.subtitulo {
		font-size: 1.3em;
		font-weight: 700;

		@media (min-width: 768px) {
			font-size: 1.5em;
		}
	}
}

#screen {
	height: 200px;
	background-color: $light;
}
</style>