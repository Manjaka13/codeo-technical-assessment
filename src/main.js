import "@/styles/index.scss";
import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store/tasks";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faTrashAlt,
	faPlusCircle,
	faList,
	faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt, faPlusCircle, faList, faTimesCircle);

/**
 * Entry point
 */

createApp(App).use(store).component("font-icon", FontAwesomeIcon).mount("#app");
