import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@icons": path.resolve(__dirname, "./src/assets/icons"),
			"@styles": path.resolve(__dirname, "./src/assets/styles"),
			"@components": path.resolve(__dirname, "./src/lib/Components"),
			"@utils": path.resolve(__dirname, "./src/lib/utils"),
		},
	},
});
