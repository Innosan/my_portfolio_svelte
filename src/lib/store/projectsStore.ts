import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

import { supabase } from "../supabaseClient";

/**
 * Fetching data from some API
 *
 * @param url - API to fetch
 */
export function fetchData(url: string) {
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

	return [data, loading, error];
}

/**
 * Maybe will use this for getting project screenshots
 * in future
 *
 * @param id - project id)
 */
export function fetchImages(id: bigint) {
	const imagesData: Writable<Array<object>> = writable([]);
	const loading: Writable<boolean> = writable(true);

	async function get() {
		try {
			const { data } = await supabase
				.from("project_media")
				.select()
				.eq("project_id", id);

			imagesData.set(data);
		} finally {
			loading.set(false);
		}
	}

	get();

	return [imagesData, loading];
}
