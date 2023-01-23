<script lang="ts">

	/*
	Components
	 */
	import Animated from "../lib/Components/ServiceComponents/Animated.svelte";
	import ProjectCard from "../lib/Components/ProjectCard.svelte";
	import Loader from "../lib/Components/ServiceComponents/Loader.svelte";
	import Error from "../lib/Components/ServiceComponents/Error.svelte";

	/*
	Stores
	 */
	import fetchProjects from "../lib/store/projectsStore";

	let backendUri = "http://127.0.0.1:5000/";

	const [data, loading, error, get] = fetchProjects(
		backendUri + "api/projects"
	);
</script>

{#if $loading}
	<Loader />
{:else if $error}
	<Error error={error}/>
{:else}
<Animated>
	<div class="text-white font-bold text-2xl gap-4 flex flex-col text-right">
		<h1>Hi, it's projects page!</h1>
		<div class="flex flex-wrap flex-row-reverse gap-10">
			{#each Object.values($data) as { title, description, created_at, tags, isHighlighted }}
				<ProjectCard
					{title}
					{description}
					{created_at}
					{tags}
					{isHighlighted}
				/>
			{/each}
		</div>
	</div>
</Animated>
{/if}
