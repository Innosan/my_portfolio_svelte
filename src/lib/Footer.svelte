<script lang="ts">
	export let footerItems;
</script>

<footer class="flex gap-5 justify-end pb-5">
	{#each footerItems as {icon, link, title}}
		<a href={link}>
			<img src={icon} alt={title}>
		</a>
	{/each}
</footer>

<style lang="scss">
	a {
		transition: .5s;

		border-radius: 10px;

		&:hover {
			background: rgba(0, 0, 0, 0.32);
			padding: 10px;
			margin: -10px;
		}
	}
</style>
