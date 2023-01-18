<script lang="ts">
	export let navItems;
</script>

<nav class="flex gap-20 justify-end">
	{#each navItems as {title, link}}
		<a href={link}>{title}</a>
	{/each}
</nav>

<style lang="scss">
	a {
		color: white;

		font-family: Overpass, sans-serif;
		font-size: 1.7rem;
		font-weight: bold;

		transition: .3s;

		border-radius: 12px;

		padding: 15px 20px;
		margin: -15px -20px;

		&:hover {
			opacity: .8;

			background: rgba(0, 0, 0, 0.9);
		}
	}
</style>
