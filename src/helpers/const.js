import HomePage from "@/components/Page/HomePage.vue";
import ContactPage from "@/components/Page/ContactPage.vue";
import TaskList from "@/components/Task/TaskList.vue";
import avatar from "@/images/avatar-harijaona.jpg";

/**
 * Holds constants
 */

// API get endpoint
export const GET_ENDPOINT =
	"https://run.mocky.io/v3/65b6c189-5e26-4386-94c9-fcc95e396e3a";

// App routes
export const ROUTES = {
	"/": {
		name: "Home",
		title: "To homepage",
		icon: "fa-solid fa-home",
		component: HomePage,
	},
	"/tasks": {
		name: "Tasks",
		title: "Tasklist",
		icon: "fa-solid fa-pencil-alt",
		component: TaskList,
	},
	"/contacts": {
		name: "Contacts",
		title: "Contacts page",
		icon: "fa-solid fa-envelope",
		component: ContactPage,
	},
};

// Candidate info (me)
export const CANDIDATE = {
	name: "Harijaona",
	avatar,
	portfolio: "https://harij.vercel.app/",
};

// Network simulated latency in ms
export const NETWORK_LATENCY = 2000;
