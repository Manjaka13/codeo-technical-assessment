import { createStore } from "vuex";
import { getTaskList } from "@/helpers/http";

/**
 * Design our store
 */

export default createStore({
	// Default state
	state() {
		return {
			taskList: [],
			loading: true,
		};
	},
	
	actions: {
		// Fetches task list data from API
		fetchTaskList: async ({ commit }) => {
			try {
				const data = await getTaskList();
				data.forEach((task) => commit("pushTask", task));
			} catch (error) {
				alert(error);
				console.log(error);
			}
			commit("stopLoading");
		},
	},

	mutations: {
		// Adds new task at begining
		addTask(state, task) {
			state.taskList.unshift(task);
		},
		// Pushes new task at end
		pushTask(state, task) {
			state.taskList.push(task);
		},
		// Remove task with given id
		removeTask(state, id) {
			state.taskList.splice(id, 1);
		},
		// Stop loading process
		stopLoading(state) {
			state.loading = false;
		}
	},

	// Data getters
	getters: {
		getTaskList(state) {
			return state.taskList;
		},
		getLoading(state) {
			return state.loading;
		},
	},
});
