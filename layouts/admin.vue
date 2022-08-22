<template>
	<section class="admin-blog">
		<h1>Admin</h1>

		<div class="container-fluid">
			<div class="row">
				<div class="col-md-3">
					<Sidebar />
				</div>

				<div class="col-md-9">
					<Nuxt />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapState } from 'vuex'

	import { auth } from '@/plugins/firebase'

	import Sidebar from '@/components/admin/Sidebar'

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
			Sidebar	
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