<template>
	<div class="contacts">
		<h1 class="contacts__title">
			<font-icon icon="fa-solid fa-envelope" /> Get in touch !
		</h1>
		<div class="divider"></div>
		<form class="contacts__form" @submit="handleSubmit">
			<div class="group">
				<label class="label" for="email">
					<font-icon class="icon" icon="fa-solid fa-user" /> Email address
				</label>
				<input
					class="input"
					type="email"
					name="email"
					v-model="email"
					:disabled="loading"
					required
				/>
			</div>
			<div class="group">
				<label class="label" for="message">
					<font-icon class="icon" icon="fa-solid fa-message" /> Your message
				</label>
				<textarea
					class="textarea"
					name="message"
					v-model="message"
					:disabled="loading"
				></textarea>
			</div>
			<loading-spinner v-if="loading" />
			<button v-else class="submit" type="submit">
				<font-icon class="icon" icon="fa-solid fa-paper-plane" /> Send message
			</button>
			<p v-if="success" class="success">{{ success }}</p>
		</form>
		<div class="arrow arrow--vertical arrow--top"></div>
		<div class="arrow arrow--horizontal arrow--top"></div>
		<div class="arrow arrow--vertical arrow--bottom"></div>
		<div class="arrow arrow--horizontal arrow--bottom"></div>
	</div>
</template>

<script>
import LoadingSpinner from "@/components/Page/LoadingSpinner.vue";
import { sendMail } from "@/helpers/utils.js";

export default {
	components: { LoadingSpinner },
	data() {
		return {
			loading: false,
			success: "",
			email: "",
			message: "",
		};
	},
	methods: {
		// Submits message
		handleSubmit(e) {
			if (!this.loading) {
				e.preventDefault();
				this.loading = true;
				// Fake sending mail :)
				sendMail(this.email, this.message)
					.then(() => {
						this.success = "Your message was sent successfully !";
					})
					.finally(() => {
						this.loading = false;
						this.email = "";
						this.message = "";
					});
			}
		},
	},
};
</script>
