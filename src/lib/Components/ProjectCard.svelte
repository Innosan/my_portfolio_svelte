<script lang="ts">

import Animated from "./ServiceComponents/Animated.svelte";

export let title, description, dateCreated, mainLanguage, tagIcons;

</script>

<Animated>
    <div class="flex flex-col gap-10 items-end bg-opacity-70 bg-black p-8 rounded-3xl">
        <div class="flex flex-col">
            <h2 class="text-2xl">{title}</h2>
            <p class="text-xl text-gray-200">{mainLanguage}</p>
        </div>
        <p class="w-3/5">{description}</p>
        <p class="text-xl">{dateCreated}</p>
		<div class="flex flex-row gap-5">
			{#each Object.values(tagIcons) as icon}
				{@html icon}
			{/each}
		</div>
    </div>
</Animated>
