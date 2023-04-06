<script>

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
	import {fetchData} from "../lib/store/projectsStore";

	const hostingApiUri = "http://innosan.pythonanywhere.com/";

	const [data, loading, error] = fetchData(
		hostingApiUri + "projects"
	);
</script>

{#if $loading}
	<Loader />
{:else if $error}
	<Error error={error}/>
{:else}
<Animated>
	<div class="text-white font-bold text-2xl gap-8 flex flex-col text-right">
		<h1>It's projects page!</h1>
		<div class="flex flex-wrap flex-row-reverse gap-5 projects">
			{#each $data as { title, description, created_at, tags, is_highlighted, thumbnail_url }}
				<ProjectCard
					{title}
					{description}
					{created_at}
					{tags}
					{is_highlighted}
					{thumbnail_url}
				/>
			{/each}
		</div>
	</div>
</Animated>
{/if}
