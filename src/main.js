import "@/styles/index.scss";
import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store/tasks";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "@/helpers/router.js";
import "@/helpers/icons.js";

/**
 * Entry point
 */

createApp(App)
	.use(router)
	.use(store)
	.component("font-icon", FontAwesomeIcon)
	.mount("#app");
