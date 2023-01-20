<script lang="ts">
	import AnimatedPage from "../lib/Components/ServiceComponents/Animated.svelte";
	import ProjectCard from "../lib/Components/ProjectCard.svelte";

	let projects = [
		{
			title: "Figma React",
			description: "Comprehensive collection of little projects based on React, starring: Weather App, Emoji Search App, Harry Potter char search app and much more!",
			dateCreated: "September 23, 2021",
			mainLanguage: "JavaScript",
		},
		{
			title: "Daily Routine",
			description: "Simple ToDo app with registration and authorization, based on React and Redux for state management!",
			dateCreated: "April 23, 2022",
			mainLanguage: "JavaScript",
		},
		{
			title: "This Site",
			description: "Yep, this site is also a pet project, based on beautiful Svelte!",
			dateCreated: "January 18, 2023",
			mainLanguage: "TypeScript",
		}
	]
</script>

<AnimatedPage>
	<div class="text-white font-bold text-2xl gap-4 flex flex-col text-right">
		<h1>Hi, it's projects page!</h1>
		{#each projects as {title, description, dateCreated, mainLanguage}}
			<ProjectCard title={title} description={description} dateCreated={dateCreated} mainLanguage={mainLanguage}/>
		{/each}
	</div>
</AnimatedPage>
