<template>
	<header>
		<nav-bar />
	</header>
	<main>
		<router-view />
	</main>
	<footer-section />
</template>

<script setup>
import FooterSection from "@/components/Page/FooterSection.vue";
import NavBar from "@/components/Page/NavBar.vue";
</script>
