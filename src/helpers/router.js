import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/Page/HomePage.vue";
import ContactPage from "@/components/Page/ContactPage.vue";
import TaskList from "@/components/Task/TaskList.vue";

/**
 * Routing
 */

const routes = [
	{ path: "/", component: HomePage },
	{ path: "/tasks", component: TaskList },
	{ path: "/contacts", component: ContactPage },
];

const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;