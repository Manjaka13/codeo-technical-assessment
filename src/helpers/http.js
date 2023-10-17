import axios from "axios";
import { GET_ENDPOINT, NETWORK_LATENCY } from "@/helpers/const.js";

/**
 * API call(s)
 */

// Gets task list from run mocky
export const getTaskList = () =>
	new Promise((resolve, reject) => {
        // I use setTimeout to simulate network latency (thus displays our loading spinner)
		setTimeout(() => {
			axios
				.get(GET_ENDPOINT)
				.then(({ data }) => resolve(data))
				.catch(({ message }) => reject(message));
		}, NETWORK_LATENCY);
	});
