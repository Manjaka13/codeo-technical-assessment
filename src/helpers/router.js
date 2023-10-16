import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/Page/HomePage.vue";
import TaskList from "@/components/Task/TaskList.vue";

/**
 * Routing
 */

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/tasks", component: TaskList },
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;