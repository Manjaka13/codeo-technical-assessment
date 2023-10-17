<template>
	<div class="task-list">
		<!-- Tasklist head -->
		<div class="task-list__head">
			<!-- Title -->
			<h1 class="title"><font-icon icon="fa-solid fa-list" /> Ongoing tasks</h1>
			<!-- Cancel new task -->
			<button
				v-if="addingTask"
				class="cancel"
				@click="switchAddingTask"
				title="Cancel action"
			>
				<font-icon icon="fa-solid fa-times-circle" /> Cancel
			</button>
			<!-- New task -->
			<button
				v-if="!addingTask && !loading"
				class="add"
				@click="switchAddingTask"
				title="New task"
			>
				<font-icon icon="fa-solid fa-plus-circle" /> Add new task
			</button>
		</div>

		<!-- Add task component -->
		<add-task v-if="addingTask" @add="addTask" />

		<div v-if="loading || taskList.length === 0" class="task-list__container">
			<!-- When loading -->
			<div v-if="loading" class="task-list__box">
				<loading-spinner />
				<p class="info-text">Loading, please wait...</p>
			</div>
			<!-- When list is empty -->
			<div v-if="!loading && taskList.length === 0" class="task-list__box">
				<p class="info-text">Task list is empty</p>
			</div>
		</div>

		<!-- Rendering our task list -->
		<ul v-if="!loading && taskList.length > 0" class="task-list__list">
			<li v-for="(task, key) in taskList" :key="key">
				<!-- Use task-item to render each element -->
				<task-item
					:id="key"
					:title="task.title"
					:description="task.description"
					@delete="removeTask"
				/>
			</li>
		</ul>
	</div>
</template>

<script>
import LoadingSpinner from "@/components/Page/LoadingSpinner.vue";
import TaskItem from "@/components/Task/TaskItem.vue";
import AddTask from "@/components/Task/AddTask.vue";

/**
 * Component that displays a list of tasks
 */

export default {
	components: { TaskItem, AddTask, LoadingSpinner },
	data() {
		return {
			addingTask: false,
		};
	},
	// Fetch task list at component creation
	created() {
		this.$store.dispatch("fetchTaskList");
	},
	// Data getters
	computed: {
		taskList() {
			return this.$store.getters.getTaskList;
		},
		loading() {
			return this.$store.getters.getLoading;
		},
	},
	methods: {
		// Shows or hides add task form
		switchAddingTask() {
			this.addingTask = !this.addingTask;
		},
		// Adds new task
		addTask(task) {
			this.$store.commit("addTask", task);
			this.switchAddingTask();
		},
		// Remove task with given id
		removeTask(id) {
			this.$store.commit("removeTask", id);
		},
	},
};
</script>
