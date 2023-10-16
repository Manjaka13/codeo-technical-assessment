<template>
	<div class="task-list">
		<div class="task-list__head">
			<h1 class="title"><font-icon icon="fa-solid fa-list" /> Ongoing tasks</h1>
			<button v-if="addingTask" class="cancel" @click="switchAddingTask" title="Cancel action">
				<font-icon icon="fa-solid fa-times-circle" /> Cancel
			</button>
			<button v-else class="add" @click="switchAddingTask" title="New task">
				<font-icon icon="fa-solid fa-plus-circle" /> Add new task
			</button>
		</div>
		<add-task v-if="addingTask" @add="handleTaskAdd" />
		<div
			v-if="error || loading || taskList.length === 0"
			class="task-list__container"
		>
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
import LoadingSpinner from "@/components/Page/LoadingSpinner.vue";
import TaskItem from "@/components/Task/TaskItem.vue";
import AddTask from "@/components/Task/AddTask.vue";
import { getTaskList } from "@/helpers/http";

/**
 * Component that displays a list of tasks
 */

export default {
	components: { TaskItem, AddTask, LoadingSpinner },
	data() {
		return {
			error: "",
			loading: true,
			addingTask: false,
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
		// Removes task from array
		deleteTask(id) {
			this.taskList.splice(id, 1);
		},
		// Adds new task
		handleTaskAdd(task) {
			// Push at begining of list
			this.taskList.unshift(task);
			// Hides form
			this.addingTask = false;
		},
		// Shows or hides add task form
		switchAddingTask() {
			this.addingTask = !this.addingTask;
		}
	},
};
</script>
