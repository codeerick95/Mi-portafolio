<template>
	<article class="card-blog position-relative" v-bind:style="{backgroundImage: 'url(' + item.imagenPrincipal + ')'}">
		<section class="card-blog__content text-white d-flex flex-column justify-content-between py-3 px-4">
			<div class="card-blog__header">
				<span>{{ item.fecha }}</span>
			</div>

			<div class="card-blog__body">
				<h3>
					<nuxt-link :to="`/blog/${item.slug}`" class="text-white font-weight-bold text-decoration-none">{{ item.titulo }}</nuxt-link>
				</h3>
			</div>

			<div class="card-blog__body d-flex justify-content-between">
				<!-- Autor -->
				<div>
					
				</div>

				<!-- tags -->
				<section>
					<nuxt-link to="/" class="card-blog__tag font-weight-bold mr-3" v-for="tag in item.tags">{{ item.id }}</nuxt-link>
				</section>
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
.card-blog {
	min-height: 300px;

	background-size: cover;
	background-position: center;

	border-radius: .3rem;

	&__content {
		width: 100%;
		height: 100%;

		background-color: rgba($app-dark, .6);

		position: absolute;
		top: 0;
		left: 0;

		transition: background-color .7s;

		&:hover {
			background-color: rgba($app-dark, .4);
		}
	}

	&__tag {
		color: rgba($app-primary, .85);

		&:hover {
			color: $app-primary;
		}
	}
}
</style>