<template>
	<section class="mensaje-rapido bg-warning px-3 position-relative">
	    <h3 class="mensaje-rapido__titulo font-weight-bold my-0 py-1 px-2">
	    	{{ titulo }}

	    	<img :src="emoji" alt="Emoji contacto" v-if="emoji" class="mensaje-rapido__emoji">
	    </h3>

	    <div class="h-100 d-flex align-items-center">
	    	<div>
	    		<slot name="descripcion"></slot>
	    	</div>
	    </div>
    </section>
</template>

<script>
	export default {
		props: {
			titulo: String,
			emoji: String
		}
	}
</script>

<style lang="scss">
.mensaje-rapido {
	border: 2px solid rgba($app-dark, .8);
	padding-top: 2.5rem;
	padding-bottom: 2rem;

	&__titulo {
		font-size: 1.1em;

		background-color: white;

		border: 1px solid $app-dark;

		position: absolute;
		top: -10px;
		left: 1rem;
	}

	&__emoji {
		width: 1rem;
	}

	p {
		font-size: 1.15em;
	}
}
</style>