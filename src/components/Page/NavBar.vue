<template>
	<nav class="nav-bar">
		<ul class="nav-bar__list">
			<li class="item" v-for="(link, key) in links" :key="key">
				<router-link :to="link.link">
					<a class="link" :title="link.title">
						<font-icon class="icon" :icon="link.icon" />{{ link.name }}
					</a>
				</router-link>
			</li>
		</ul>
		<div class="nav-bar__line"></div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					name: "Home",
					title: "To homepage",
					link: "/",
					icon: "fa-solid fa-home",
				},
				{
					name: "Tasks",
					title: "Tasklist",
					link: "/tasks",
					icon: "fa-solid fa-pencil-alt",
				},
				{
					name: "Contacts",
					title: "Contacts page",
					link: "/contacts",
					icon: "fa-solid fa-envelope",
				},
			],
		};
	},
};
</script>
