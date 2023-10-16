<template>
	<div :class="`task${deleting ? ' task--deleting' : ''}`">
		<div class="task__head">
			<h2 class="title">{{ title }}</h2>
			<div class="delete" title="Delete this task" @click="handleDelete()">
				<font-icon class="button" icon="fa-solid fa-trash-alt" />
			</div>
		</div>
		<p class="task__description">{{ description }}</p>
	</div>
</template>

<script>
/**
 * This displays a single given task
 */

export default {
	props: {
		id: Number,
		title: String,
		description: String,
	},
	data() {
		return {
			deleting: false,
		};
	},
	methods: {
		handleDelete() {
			this.deleting = true;
			// Delete the task after delete animation is completed (300ms)
			setTimeout(() => {
				this.$emit("delete", this.id);
				this.deleting = false;
			}, 200);
		},
	},
};
</script>
