<template>
	<div class="task-list">
		<div class="task-list__head">
			<h1 class="title">
				<font-icon icon="fa-solid fa-list" /> Ongoing tasks
			</h1>
			<button class="add">
				<font-icon icon="fa-solid fa-plus-circle" /> Add new task
			</button>
		</div>
		<div v-if="error || loading || taskList.length === 0" class="task-list__container">
			<!-- When loading -->
			<div v-if="loading" class="task-list__box">
				<loading-spinner />
				<p class="info-text">Loading, please wait...</p>
			</div>
			<!-- When there is an error -->
			<div v-if="error" class="task-list__box">
				<p v-if="error" class="info-error">{{ error }}</p>
			</div>
			<!-- When list is empty -->
			<div
				v-if="!loading && !error && taskList.length === 0"
				class="task-list__box"
			>
				<p class="info-text">Task list is empty</p>
			</div>
		</div>
		<!-- Rendering our task list -->
		<ul v-if="!loading && !error && taskList.length > 0" class="task-list__list">
			<li v-for="(task, key) in taskList" :key="key">
				<task-item
					:id="key"
					:title="task.title"
					:description="task.description"
					@delete="deleteTask"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
import TaskItem from "@/components/Task/TaskItem.vue";
import LoadingSpinner from "@/components/Page/LoadingSpinner.vue";
import { getTaskList } from "@/helpers/http";

/**
 * Component that displays a list of tasks
 */

export default {
	components: { TaskItem, LoadingSpinner },
	data() {
		return {
			error: "",
			loading: true,
			// List of tasks
			taskList: [],
		};
	},
	// Get list of tasks on mount
	mounted() {
		getTaskList()
			.then((data) => {
				this.taskList = data;
			})
			.catch((message) => {
				this.error = message;
			})
			.finally(() => {
				this.loading = false;
			});
	},
	methods: {
		deleteTask(id) {
			this.taskList.splice(id, 1);
		},
	},
};
</script>
