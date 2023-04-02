import type { Writable } from "svelte/store";

import { writable } from "svelte/store";

export default function fetchData(url: string) {
	const loading: Writable<boolean> = writable(true);
	const error: Writable<boolean> = writable(false);
	const data: Writable<Array<object>> = writable([]);

	async function get() {
		try {
			const response: Awaited<Promise<any>> = await fetch(url);

			data.set(await response.json());
		} catch (e) {
			error.set(e);
		}
		loading.set(false);
	}

	get();

	return [data, loading, error, get];
}
