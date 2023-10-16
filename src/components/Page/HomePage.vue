<template>
	<div class="home-page">
		<h1 class="home-page__title">Welcome to TaskList !</h1>
		<p class="home-page__description">
			I designed this app using Vue 3, Vuex 4 and VueRouter4. Please feel free to
			ask me further information aboaut it, I remain available for any questions !
		</p>
		<router-link to="/tasks">
			<button class="home-page__link" title="Watch ongoing tasks">
				Get started !
			</button>
		</router-link>
	</div>
</template>
