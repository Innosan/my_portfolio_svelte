<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade>
	<slot />
</div>

<style>
	div {
		padding: 10px 0 10px 0;
	}
</style>
