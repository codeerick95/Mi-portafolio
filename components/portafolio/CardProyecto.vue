<template>
	<article class="card-proyecto">
		<section class="card-proyecto__imagen" v-bind:style="{backgroundImage: 'url(' + item.imagen + ')'}">
		</section>

		<section class="px-2 py-3">
			<h3 class="card-proyecto__titulo text-primary my-0">{{ item.nombre }}</h3>

			<p class="my-2">
				{{ item.descripcion }}
			</p>

			<div class="d-flex justify-content-end mt-5 px-3 pb-3">
				<a :href="item.url" class="card-proyecto__btn text-center d-flex justify-content-center align-items-center position-relative" target="_blank">Ver proyecto</a>
			</div>
		</section>
	</article>
</template>

<script>
	export default {
		props: {
			item: Object
		}
	}
</script>

<style lang="scss">
.card-proyecto {
	box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 8px;

	&__imagen {
		height: 270px;

		background-size: cover;

		border-radius: .2rem;
	}

	&__titulo {
		font-size: 1em;

		@media (min-width: 768px) {
			font-size: 1.2em;
		}
	}

	&__btn {
		background-color: $app-primary;

		color: white;

		width: 150px;
		height: 40px;

		border: 1px solid $app-primary;
		border-radius: 0;

		z-index: 100 !important;

		transition: transform .5s;

		&:hover {
			color: white;

			text-decoration: none;

			transform: scale(.99);
		}

		&::before {
			content: '';

			width: 100%;
			height: 100%;

			position: absolute;
			right: -.7rem;
			bottom: -.7rem;
			z-index: 10;

			border: 1px solid $app-primary;
		}
	}
}
</style>