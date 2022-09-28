<template>
	<header class="header-mobile d-lg-none">
		<div class="d-flex justify-content-end">
			<!-- Hamburger -->
		    <button @click="showNav = !showNav" class="hamburger hamburger--collapse hamburger--mobile p-0" :class="{'is-active': showNav}">
		      <span class="hamburger-box">
		        <span class="hamburger-inner"></span>
		      </span>
		    </button>
		</div>

		<nav class="nav-mobile bg-white d-flex justify-content-center align-items-center animate__animated animate__bounceInDown" v-if="showNav">
			<ul class="list-unstyled text-uppercase p-0">
				<li>
		          <a href="" class="nav-mobile-link" @click.prevent="to('/')">Sobre mí</a>
		        </li>
		        <li>
		          <a href="" class="nav-mobile-link" @click.prevent="to('/proyectos')">Portafolio</a>
		        </li>
		        <li>
		          <a href="" class="nav-mobile-link" @click.prevent="to('/blog')">Blog</a>
		        </li>
		        <li>
		          <a href="" class="nav-mobile-link" @click.prevent="to('/')">Contacto</a>
		        </li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				showNav: false
			}
		},
		methods: {
			to(route) {
				this.showNav = false
				this.$router.push(route)
			}
		}
	}
</script>

<style lang="scss">
.hamburger--mobile {
	position: fixed;
	top: 2rem;
	right: 1.5rem;
	z-index: 110;
}

.nav-mobile {
	width: 100%;
	height: 93vh;

	border-top: 10px solid $app-primary;

	position: fixed;
	top: 0;
	z-index: 100;

	&-link {
		font-size: 1.5em;
		color: $app-dark;

		display: inline-block;

		margin-bottom: .5rem;
	}
}
</style>