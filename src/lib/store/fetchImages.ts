import { supabase } from "../supabaseClient";

import type { Writable } from "svelte/store";

import { writable } from "svelte/store";

export default function getImages(id: bigint) {
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
