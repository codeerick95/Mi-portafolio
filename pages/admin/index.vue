<template>
	<section>
		<h1>Dashboard</h1>
	</section>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		layout: 'admin',
		data() {
			return {
			}
		},
		computed: {
			...mapState({
				usuarioLogueado: state => state.auth.usuarioLogueado
			})
		}
	}
</script>

<style lang="scss">
</style>