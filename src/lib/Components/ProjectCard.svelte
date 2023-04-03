<script>
	import Animated from "./ServiceComponents/Animated.svelte";
	import TechTag from "./TechTag.svelte";

	//import { fetchImages } from "../store/projectsStore";

    export let title, description, created_at, tags, is_highlighted, thumbnail_url;

	// const [ images, loading] = fetchImages(
	// 	id
	// );

</script>

{#if is_highlighted}
	<Animated>
		<div class="highlighted card_shadow flex flex-col gap-10 items-end rounded-3xl hover:shadow-2xl transition" style="background-image: url({thumbnail_url})">
			<p class="text-xl text-black p-3 bg-white rounded-2xl mr-8">{created_at}</p>
			<div class="flex flex-col p-8 gap-3 bg-black bg-opacity-70 backdrop-blur-sm rounded-3xl">
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
		<div class="card_container card_shadow flex flex-col gap-3 items-end bg-black rounded-3xl card_shadow transition" style="background-image: url({thumbnail_url})">
			<div class="flex flex-row gap-5 pr-5">
				{#each Object.values(tags) as tag}
					<TechTag icon={tag.path} title={tag.title}/>
				{/each}
			</div>
			<div class="header_container justify-between flex flex-row-reverse gap-32 bg-black backdrop-blur-sm rounded-3xl p-5 bg-opacity-70">
				<h2 class="text-2xl">{title}</h2>
				<p class="text-xl self-center p-2 bg-white text-black rounded-2xl">{created_at}</p>
			</div>
		</div>
	</Animated>
{/if}

<style>
    h2 {
        width: min-content;
    }

	.highlighted {
		width: 880px;
		height: 480px;
		justify-content: flex-end;
		background-size: cover;
	}

    .card_container {
        width: 380px;
        justify-content: flex-end;
        height: 289px;
        background-size: cover;
    }

    .header_container {
        width: 380px;
    }

	.card_shadow:hover {
		--tw-shadow: 0 5px 20px -6px rgb(0 0 0 / 0.65);
		--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
	}
</style>
