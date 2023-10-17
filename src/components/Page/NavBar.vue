<template>
	<nav class="nav-bar">
		<ul class="nav-bar__list">
			<li class="item" v-for="(route, key) in routes" :key="key">
				<router-link :to="route.link">
					<a class="link" :title="route.title">
						<font-icon class="icon" :icon="route.icon" />{{ route.name }}
					</a>
				</router-link>
			</li>
		</ul>
		<div class="nav-bar__line"></div>
	</nav>
</template>

<script>
import { ROUTES } from "@/helpers/const.js";

export default {
	data() {
		return {
			routes: [],
		};
	},
	created() {
		this.routes = Object.keys(ROUTES).map((item) => ({
			...ROUTES[item],
			link: item,
		}));
	},
};
</script>
