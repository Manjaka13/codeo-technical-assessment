import "@/styles/index.scss";
import { createApp } from "vue";
import App from "@/App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faPlusCircle, faList } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt, faPlusCircle, faList);

/**
 * Entry point
 */

createApp(App).component("font-icon", FontAwesomeIcon).mount("#app");
