<script lang="ts">
    import Animated from "./ServiceComponents/Animated.svelte";
    import TechTag from "./TechTag.svelte";
	import fetchImages from "../store/fetchImages";
	import Loader from "./ServiceComponents/Loader.svelte";

    export let id, title, description, created_at, tags, is_highlighted;

	const [ images, loading] = fetchImages(
		id
	);

</script>


{#if $loading}
	<Loader />
{:else}
	{#if is_highlighted}
		<Animated>
			<div class="highlighted flex flex-col gap-10 items-end bg-opacity-70 bg-black rounded-3xl" style="background-image: url({$images[0].url})">
				<p class="text-xl text-black p-3 bg-white rounded-2xl">{created_at}</p>
				<div class="flex flex-col p-8 gap-3 bg-black rounded-3xl">
					<div class="flex flex-row-reverse gap-10">
						<h2 class="text-4xl">{title}</h2>
						<p class="text-xl w-5/6">{description}</p>
					</div>
					<div class="flex flex-row gap-5 self-end">
						{#each Object.values(tags) as tag}
							<TechTag icon={tag.path} title={tag.title}/>
						{/each}
					</div>
				</div>
			</div>
		</Animated>
	{:else}
		<Animated>
			<div class="card_container flex flex-col gap-3 items-end bg-black rounded-3xl" style="background-image: url({$images[0].url})">
				<div class="flex flex-row gap-5 pr-5">
					{#each Object.values(tags) as tag}
						<TechTag icon={tag.path} title={tag.title}/>
					{/each}
				</div>
				<div class="header_container justify-between flex flex-row-reverse gap-32 bg-black rounded-3xl p-5 bg-opacity-70">
					<h2 class="text-2xl">{title}</h2>
					<p class="text-xl self-center p-2 bg-white text-black rounded-2xl">{created_at}</p>
				</div>
			</div>
		</Animated>
	{/if}
{/if}

<style>
    h2 {
        width: min-content;
    }

	.highlighted {
		width: 780px;
		height: 400px;
		justify-content: flex-end;
		background-size: cover;
	}

    .card_container {
        width: 438px;
        justify-content: flex-end;
        height: 289px;
        background-size: cover;
    }

    .header_container {
        width: 438px;
    }
</style>
