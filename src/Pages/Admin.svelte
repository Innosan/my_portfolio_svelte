<script>
	import Animated from "../lib/Components/ServiceComponents/Animated.svelte";

	let title = '';
	let description = '';
</script>

<Animated>
	<div class="text-black flex flex-col items-end text-3xl font-bold">
		<form on:submit|preventDefault enctype="multipart/form-data">
			<label for="title">
				<input type="text" name="title" id="title" bind:value={title}>
			</label>
			<label for="description">
				<input type="text" name="description" id="description" bind:value={description}>
			</label>
			<label for="description">
				<input type="file" name="" id="file">
			</label>
			<button type="submit">
				POST
			</button>
		</form>
	</div>
</Animated>
