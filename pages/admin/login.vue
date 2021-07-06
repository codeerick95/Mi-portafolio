<template>
	<section>
		<b-form @submit.prevent="login">
			<b-form-input type="email" required v-model="email"></b-form-input>
			<b-form-input type="password" required v-model="password"></b-form-input>

			<b-button type="submit">Button</b-button>
		</b-form>
	</section>
</template>

<script>
	export default {
		layout: 'admin',
		data() {
			return {
				email: null,
				password: null
			}
		},
		methods: {
			login() {
				let data = {
					email: this.email,
					password: this.password
				}

				this.$store.dispatch('auth/login', data)
			}
		}
	}
</script>

<style lang="scss">
</style>