<template>
	<div :class="`task${deleting ? ' task--deleting' : ''}`">
		<div class="task__head">
			<!-- Task title -->
			<h2 class="title">{{ title }}</h2>
			<!-- Delete button -->
			<div class="delete" title="Delete this task" @click="handleDelete()">
				<font-icon class="button" icon="fa-solid fa-trash-alt" />
			</div>
		</div>
		
		<!-- Task description -->
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
			// Delete the task only after delete animation is done
			setTimeout(() => {
				this.$emit("delete", this.id);
				this.deleting = false;
			}, 200);
		},
	},
};
</script>
