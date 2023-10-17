<template>
	<footer class="footer">
		<!-- Candidate image -->
		<img
			class="footer__avatar"
			:src="candidate.avatar"
			:alt="`Avatar ${candidate.name}`"
		/>

		<!-- Some text infos -->
		<p class="footer__text">
			Technical assessment made with ❤️ by
			<a class="link" :href="candidate.portfolio" title="The candidate">
				{{ candidate.name }} </a
			>.
		</p>

		<!-- Codeo logo -->
		<img class="footer__logo" src="@/images/logo-codeo.png" alt="Codeo logo" />

		<!-- Styled lottie ! -->
		<Vue3Lottie class="lottie" :animationData="lottieCat" :height="100" />
	</footer>
</template>

<script>
import { Vue3Lottie } from "vue3-lottie";
import { CANDIDATE } from "@/helpers/const.js";
import lottieCat from "@/lotties/lottie-cat.json";

/**
 * Footer component
 */

export default {
	components: { Vue3Lottie },
	data() {
		return {
			lottieCat,
			candidate: CANDIDATE,
		};
	},
};
</script>
