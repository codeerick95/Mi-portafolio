<template>
	<nav class="nav-redes bg-white text-center pt-2 d-lg-none">
		<a :href="appConfig.redesSociales.github" target="_blank" class="icon">
	        <i class="fab fa-github"></i>
	    </a>

	    <a :href="appConfig.redesSociales.linkedin" target="_blank" class="icon">
            <i class="fab fa-linkedin-in"></i>
        </a>

        <a :href="appConfig.redesSociales.instagram" target="_blank" class="icon">
            <i class="fab fa-instagram"></i>
        </a>

        <a :href="appConfig.redesSociales.codepen" target="_blank" class="icon">
            <i class="fab fa-codepen"></i>
        </a>

        <a :href="appConfig.redesSociales.twitter" target="_blank" class="icon">
            <i class="fab fa-twitter"></i>
        </a>
	</nav>
</template>

<script>
	import { appConfig } from '@/data/config'

	export default {
		data() {
			return {
				appConfig
			}
		}
	}
</script>

<style lang="scss">
.nav-redes {
	display: grid;
	grid-template-columns: repeat(5, 1fr);

	border-top: 1px solid rgba($app-dark, .3);

	position: fixed;
	bottom: 0;
	right: 0;
	left: 0;

	transition: transform .3s;

	a:active {
		transform: scale(1.1);
	}
}
</style>