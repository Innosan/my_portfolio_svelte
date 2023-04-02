<script>
	import Animated from "../../lib/Components/ServiceComponents/Animated.svelte";

	let title, description, thumbnail_url, tags, created_at  = "";
	let is_highlighted = false;

	let result = null;

	async function doPost () {
		const res = await fetch('http://127.0.0.1:5000/projects', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				description,
				thumbnail_url,
				tags,
				created_at,
				is_highlighted
			})
		})

		const json = await res.json()
		result = JSON.stringify(json)
	}
</script>

<Animated>
	<div>
		<h2>{result}</h2>
		<label for="title">
			Project title
			<input type="text" bind:value={title} name="title" id="title">
		</label>
		<label for="description">
			Project description
			<input type="text" bind:value={description} name="description" id="description">
		</label>
		<label for="created_at">
			Created at
			<input type="date" bind:value={created_at} name="created_at" id="created_at">
		</label>
		<label for="thumbnail_url">
			Project thumbnail URL
			<input type="text" bind:value={thumbnail_url} name="thumbnail_url" id="thumbnail_url">
		</label>
		<label for="is_highlighted">
			Is Highlighted
			<input type="checkbox" bind:value={is_highlighted} name="is_highlighted" id="is_highlighted">
		</label>
		<label for="tags">
			Tags
			<input type="text" bind:value={tags} name="tags" id="tags">
		</label>
	</div>
	<button on:click={doPost}>
		Add
	</button>
</Animated>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 40px;

		height: 70vh;
		flex-wrap: wrap-reverse;
	}

	label {
		display: flex;
		flex-direction: column;
		align-items: end;
		gap: .5em;

		color: white;

		font-size: 2rem;
		font-weight: bold;

		input {
			border-radius: 12px;
			color: #000;

			text-align: right;

			padding: 10px;
		}
	}
</style>
