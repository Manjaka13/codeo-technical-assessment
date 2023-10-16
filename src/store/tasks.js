import { createStore } from "vuex";
import { getTaskList } from "@/helpers/http";

/**
 * Design our store
 */

export default createStore({
	state() {
		return {
			taskList: [],
			loading: true,
		};
	},
	actions: {
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
		addTask(state, task) {
			state.taskList.unshift(task);
		},
		pushTask(state, task) {
			state.taskList.push(task);
		},
		removeTask(state, id) {
			state.taskList.splice(id, 1);
		},
		stopLoading(state) {
			state.loading = false;
		}
	},
	getters: {
		getTaskList(state) {
			return state.taskList;
		},
		getLoading(state) {
			return state.loading;
		},
	},
});
