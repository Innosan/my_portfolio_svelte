<script>
	import Animated from "../../lib/Components/ServiceComponents/Animated.svelte";

	import {toast} from "@zerodevx/svelte-toast";

	let projectData = {
		title: null,
		description: null,
		thumbnail_url: null,
		tags: null,
		created_at: null,
		is_highlighted: false,
	}

	let result = null;

	async function doPost () {
		let notValidated = Object.values(projectData).includes(null);

		if (notValidated === false) {
			const res = await fetch('http://127.0.0.1:5000/projects', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(projectData)
			})

			const json = await res.json()
			result = JSON.stringify(json)

			toast.push(result, {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(72,187,120,0.9)',
				}
			})
		}
		else {
			toast.push('Something went wrong! Looks like you didnt fill out every field(', {
				theme: {
					'--toastColor': 'mintcream',
					'--toastBackground': 'rgba(203,49,49,0.9)',
				}
			})
		}
	}
</script>

<Animated>
	<div>
		<label for="title">
			Project title
			<input type="text" bind:value={projectData.title} name="title" id="title">
		</label>
		<label for="description">
			Project description
			<input type="text" bind:value={projectData.description} name="description" id="description">
		</label>
		<label for="created_at">
			Created at
			<input type="date" bind:value={projectData.created_at} name="created_at" id="created_at">
		</label>
		<label for="thumbnail_url">
			Project thumbnail URL
			<input type="text" bind:value={projectData.thumbnail_url} name="thumbnail_url" id="thumbnail_url">
		</label>
		<label for="is_highlighted">
			Is Highlighted
			<input type="checkbox" bind:checked={projectData.is_highlighted} name="is_highlighted" id="is_highlighted">
		</label>
		<label for="tags">
			Tags
			<input type="text" bind:value={projectData.tags} name="tags" id="tags" >
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

		font-size: 1.5rem;
		font-weight: bold;

		input {
			border-radius: 12px;
			color: #000;

			font-size: 1.25rem;
			width: 50%;

			text-align: right;

			padding: 10px;
		}
	}

	button {
		width: 40%;
		align-self: end;
	}
</style>
