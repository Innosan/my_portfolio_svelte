<script>
	import NavItem from "./NavItem.svelte";
	import menuIcon from "@icons/ui/menu.svg";

	export let navItems;

	let clicked = false;

	const toggleMenu = () => {
		clicked = !clicked;
	}

	let innerWidth;
</script>

<svelte:window bind:innerWidth/>

{#if innerWidth <= 600}
	<button on:click={toggleMenu}>
		<img src={menuIcon} alt="Open Menu">
	</button>
	{#if clicked}
		<nav class="flex gap-20 justify-end" on:click={toggleMenu}>
			{#each navItems as {title, link}}
				<NavItem title={title} pageLink={link} icon={null}/>
			{/each}
		</nav>
	{/if}
{:else}
	<nav class="flex gap-20 justify-end">
		{#each navItems as {title, link}}
			<NavItem title={title} pageLink={link} icon={null}/>
		{/each}
	</nav>
{/if}

<style>
	button {
		background-color: transparent;
	}
</style>
