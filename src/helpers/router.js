import { createRouter, createWebHistory } from "vue-router";
import { ROUTES } from "@/helpers/const.js";

/**
 * Routing
 */

// Build our routes
let routes = [];
Object.keys(ROUTES).forEach((item) =>
	routes.push({ path: item, component: ROUTES[item].component })
);

// Create the router from it
const router = createRouter({
	history: createWebHistory("/"),
	routes,
});

export default router;
