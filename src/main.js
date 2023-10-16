import "@/styles/index.scss";
import { createApp } from "vue";
import App from "@/App.vue";
// import HomePage from "@/HomePage";
import store from "@/store/tasks";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faTrashAlt,
	faPlusCircle,
	faList,
	faTimesCircle,
	faHome,
	faPencilAlt,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import router from "@/helpers/router.js";

library.add(
	faTrashAlt,
	faPlusCircle,
	faList,
	faTimesCircle,
	faHome,
	faPencilAlt,
	faEnvelope
);

/**
 * Entry point
 */

createApp(App)
	.use(router)
	.use(store)
	.component("font-icon", FontAwesomeIcon)
	.mount("#app");
