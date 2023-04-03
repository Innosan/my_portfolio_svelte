<script>
	import NavItem from "./NavItem.svelte";

	export let footerItems;
</script>

<footer class="flex gap-10 justify-end pb-5 pt-10">
	{#each footerItems as {icon, link, title}}
		<NavItem icon={icon} pageLink={link} title={title}/>
	{/each}
</footer>
