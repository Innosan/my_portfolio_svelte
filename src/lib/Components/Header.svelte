<script>
	import NavItem from "./NavItem.svelte";

	export let navItems;
</script>

<nav class="flex gap-20 justify-end">
	{#each navItems as {title, link}}
		<NavItem title={title} pageLink={link} icon={null}/>
	{/each}
</nav>
