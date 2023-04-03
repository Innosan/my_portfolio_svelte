<script>
	import {fly} from 'svelte/transition';

	import {link} from "svelte-routing";

	export let pageLink, title, icon;

	let visible = false;

	function toggleVisibility() {
		visible = !visible;
	}
</script>

<div class="flex flex-col">
	<a
		href={pageLink}
		use:link
		class="opacity-70 hover:opacity-100 transition"
		on:mouseover={toggleVisibility}
		on:mouseout={toggleVisibility}>
			{title}
			{#if icon}
				<img src={icon} alt={title}>
			{/if}
	</a>
	{#if visible}
		<span class="hovering_over" transition:fly={{ x: -50, duration: 500 }}></span>
	{/if}
</div>

<style lang="scss">
	div {
		height: 105px;
	}

	a {
		color: white;

		font-family: Overpass, sans-serif;
		font-size: 1.7rem;
		font-weight: bold;

		border-radius: 12px;

		padding: 15px 20px;
		margin: -15px -20px;

		display: flex;
		align-items: center;
		flex-direction: column-reverse;

		gap: 20px;
	}

	.hovering_over {
		height: 3px;
		display: block;
		background: #c95555;
		margin-top: 5px;
		border-radius: 2px;
	}
</style>
