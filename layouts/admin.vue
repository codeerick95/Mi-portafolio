<template>
	<section class="admin vh-100">
		<aside class="sidebar">
			<Sidebar />
		</aside>

		<main class="main">
			<AdminHeader />

			<section class="content bg-white">
				<Nuxt />
			</section>
		</main>
	</section>
</template>

<script>
	import { mapState } from 'vuex'

	import { auth } from '@/plugins/firebase'

	import Sidebar from '@/components/admin/Sidebar'
	import AdminHeader from '@/components/admin/AdminHeader'

	export default {
		layout: 'admin',
		data() {
			return {
				editorConfig: {
			        events: {
			          initialized: function () {
			            console.log('initialized')
			          }
			        }
			    },
			    content: ''
			}
		},
		mounted() {
			console.log(auth)
		},
		components: {
			Sidebar,
			AdminHeader
		},
		computed: {
			...mapState({
				usuarioLogueado: state => state.auth.usuarioLogueado
			})
		}
	}
</script>

<style lang="scss" scoped>
.admin {
	font-family: 'Roboto', sans-serif !important;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: 250px 1fr;
	}

	.main {
		padding: 16px;
	}

	.content {
		height: calc(100vh - 88px);
	}
}
</style>