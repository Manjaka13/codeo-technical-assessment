import axios from "axios";

/**
 * API call(s)
 */

const mockTaskListUrl =
	"https://run.mocky.io/v3/9f9283e5-f983-402a-b701-bf7ba2896d9e";

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
