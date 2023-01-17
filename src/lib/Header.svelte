<script lang="ts">
	let currentlyStudy = "Svelte";
</script>

<nav class="flex gap-10">
	<a href="">Home</a>
	<a href="">Projects</a>
	<a href="">Contact</a>
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

		&:hover {
			opacity: .8;

			background: rgba(0, 0, 0, 0.9);
		}
	}
</style>
