<template>
	<header class="header-p">
		<div class="header-p__contenedor">
			<nuxt-link to="/" class="header-p__titulo font-weight-bold">Erick Huamani</nuxt-link>

			<nav class="h-100 d-flex align-items-center">
				<ul class="list-unstyled d-flex align-items-center mb-0">
					<li class="mx-3">
						<nuxt-link to="/" class="header-p__link">Sobre mí</nuxt-link>
					</li>

					<li class="mx-3">
						<nuxt-link to="/portafolio" class="header-p__link">Proyectos</nuxt-link>
					</li>

					<li class="mx-3">
						<nuxt-link to="/" class="header-p__link">Blog</nuxt-link>
					</li>

					<li class="mx-3">
						<nuxt-link to="/" class="header-p__link btn btn-primary px-3">CONTACTO
							<i class="fas fa-location-arrow"></i>
						</nuxt-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
.header-p {
	background-color: $app-dark;

	border-bottom: 2px dashed $app-primary;
	padding: 1.3rem 0;

	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;

	&__contenedor {
		width: 95%;

		margin: 0 auto;

		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (min-width: 1200px) {
			max-width: 1140px;

			margin: 0 auto;
		}
	}

	&__titulo {
		font-size: 1.1em;

		color: $app-primary;

		@media (min-width: 768px) {
			font-size: 1.5em;
		}

		&:hover {
			text-decoration: none;

			color: $app-primary;
		}
	}

	&__link {
		font-size: 1.1em;
		color: rgba(white, .9);

		&:hover {
			color: $app-primary;

			text-decoration: none;
		}

		&.btn {
			font-size: 1em;
		}
	}
}
</style>