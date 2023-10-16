import axios from "axios";

/**
 * API call(s)
 */

const mockTaskListUrl =
	"https://run.mocky.io/v3/65b6c189-5e26-4386-94c9-fcc95e396e3a";

// Gets task list from run mocky
export const getTaskList = () =>
	new Promise((resolve, reject) => {
        // I use setTimeout to simulate network latency (thus display our loading spinner)
		setTimeout(() => {
			axios
				.get(mockTaskListUrl)
				.then(({ data }) => resolve(data))
				.catch(({ message }) => reject(message));
		}, 2000);
	});
