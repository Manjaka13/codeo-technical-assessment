<template>
	<form class="add-task" @submit="handleSubmit">
		<!-- New task title -->
		<div class="add-task__group">
			<div class="icon">
				<font-icon icon="fa-solid fa-list" />
			</div>
			<input
				class="input"
				name="title"
				placeholder="Task title"
				v-model="title"
				required
			/>
		</div>

		<!-- New task description -->
		<div class="add-task__group">
			<div class="icon">
				<font-icon icon="fa-solid fa-list" />
			</div>
			<input
				class="input"
				bame="description"
				placeholder="Task description"
				v-model="description"
				required
			/>
		</div>

		<!-- Submit button -->
		<button class="submit" type="submit" title="Add task">
			<font-icon icon="fa-solid fa-plus-circle" /> Create
		</button>
	</form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

/**
 * Form that adds new task
 */

export default {
	data() {
		return {
			title: "",
			description: "",
		};
	},
	methods: {
		handleSubmit(e) {
			//  The new task object
			const newTask = {
				id: uuidv4(),
				title: this.title,
				description: this.description,
			};
			e.preventDefault();
			
			// Check data and emits it up
			if (newTask.title.length > 0 && newTask.description.length > 0) {
				console.log("Add new task", newTask);
				this.$emit("add", newTask);
				// Reset input fields
				this.title = "";
				this.description = "";
			}
		},
	},
};
</script>
