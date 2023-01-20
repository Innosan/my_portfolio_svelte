<script lang="ts">
	import AnimatedPage from "../lib/Components/ServiceComponents/Animated.svelte";
	import ProjectCard from "../lib/Components/ProjectCard.svelte";
	let backendUri = "http://127.0.0.1:5000/";

	import fetchProjects from "../lib/store/projectsStore";
	import Loader from "../lib/Components/ServiceComponents/Loader.svelte";

	const [data, loading, error, get] = fetchProjects(
		backendUri + "api/projects"
	);
</script>

{#if $loading}
	<Loader />
{/if}
<AnimatedPage>
	<div class="text-white font-bold text-2xl gap-4 flex flex-col text-right">
		<h1>Hi, it's projects page!</h1>
		{#each Object.values($data) as { title, description, dateCreated, mainLanguage, tagIcons }}
			<ProjectCard
				{title}
				{description}
				{dateCreated}
				{mainLanguage}
				{tagIcons}
			/>
		{/each}
	</div>
</AnimatedPage>
