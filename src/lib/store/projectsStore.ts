import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

import type { GetProjectsResponse } from "../ts/types/Project";

/**
 * Fetching data from some API
 *
 * @param url - API to fetch
 */
export function fetchData(url: string) {
	const loading: Writable<boolean> = writable(true);
	const error: Writable<Error> = writable();

	const data: Writable<GetProjectsResponse> = writable();

	async function get() {
		try {
			const response = await fetch(url, {
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			});

			if (!response.ok) {
				throw new Error(
					"Something bad happened! Status: " + response.status
				);
			}
			const result = (await response.json()) as GetProjectsResponse;

			data.set(result);
		} catch (e) {
			if (e instanceof Error) {
				error.set(e);
			}
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
// export function fetchImages(id: bigint) {
// 	const imagesData: Writable<Array<object>> = writable([]);
// 	const loading: Writable<boolean> = writable(true);
//
// 	async function get() {
// 		try {
// 			const { data } = await supabase
// 				.from("project_media")
// 				.select()
// 				.eq("project_id", id);
//
// 			imagesData.set(data);
// 		} finally {
// 			loading.set(false);
// 		}
// 	}
//
// 	get();
//
// 	return [imagesData, loading];
// }
