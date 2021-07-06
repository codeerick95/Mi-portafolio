<template>
	<section class="admin-blog">
		<h1>Admin</h1>

		<div class="container">
			<div class="row">
				<div class="col-md-4">

					{{ usuarioLogueado }}

					{{ content }}

					<froalaView v-model="content"></froalaView>
				</div>

				<div class="col-md-8">
					<froala id="edit" :tag="'textarea'" :config="editorConfig" v-model="content"></froala>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapState } from 'vuex'

	import { auth } from '@/plugins/firebase'

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
		computed: {
			...mapState({
				usuarioLogueado: state => state.auth.usuarioLogueado
			})
		}
	}
</script>

<style lang="scss">
</style>