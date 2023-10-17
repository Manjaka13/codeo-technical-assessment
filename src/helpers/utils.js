/**
 * Various useful functions
 */

// Simulate sending mail
export const sendMail = (email, message) =>
	new Promise((resolve) => {
		const payload = { email, message };
		console.log(payload);
        // This simulates network latency
		setTimeout(() => {
			resolve();
		}, 2000);
	});
