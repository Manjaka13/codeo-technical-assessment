<template>
	<footer class="footer">
		<img
			class="footer__avatar"
			src="@/images/avatar-harijaona.jpg"
			alt="Avatar Harijaona"
		/>
		<p class="footer__text">
			Technical assessment made with ❤️ by
			<a class="link" href="https://harij.vercel.app/" title="The candidate">
				Harijaona</a
			>.
		</p>
		<img class="footer__logo" src="@/images/logo-codeo.png" alt="Codeo logo" />
		<Vue3Lottie class="lottie" :animationData="lottieCat" :height="100" />
	</footer>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import lottieCat from "@/lotties/lottie-cat.json";

export default {
	components: { Vue3Lottie },
	data() {
		return {
			lottieCat,
		};
	},
};
</script>
