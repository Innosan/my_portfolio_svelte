<script lang="ts">
    import Animated from "./ServiceComponents/Animated.svelte";
    import TechTag from "./TechTag.svelte";

    export let title, description, created_at, tags, isHighlighted;
</script>


{#if isHighlighted}
    <Animated>
        <div class="flex flex-col gap-10 items-end bg-opacity-70 bg-black p-8 rounded-3xl">
            <p class="text-xl text-gray-200">{created_at}</p>
            <div class="flex flex-row-reverse gap-32">
                <h2 class="text-4xl">{title}</h2>
                <p class="text-xs">{description}</p>
            </div>
            <div class="flex flex-row gap-5">
                {#each Object.values(tags) as tag}
                    <TechTag icon={tag.path} title={tag.title}/>
                {/each}
            </div>
        </div>
    </Animated>
{:else}
    <Animated delay="400">
        <div class="card_container flex flex-col gap-3 items-end bg-black rounded-3xl">
            <div class="flex flex-row gap-5">
                {#each Object.values(tags) as tag}
                    <TechTag icon={tag.path} title={tag.title}/>
                {/each}
            </div>
            <div class="header_container justify-between flex flex-row-reverse gap-32 bg-black rounded-2xl p-5 bg-opacity-70">
                <h2 class="text-2xl">{title}</h2>
                <p class="text-xl text-center p-2 text-gray-200 bg-white text-black rounded-2xl">{created_at}</p>
            </div>
        </div>
    </Animated>
{/if}


<style>
    h2 {
        width: min-content;
    }

    .card_container {
        width: 438px;
        justify-content: flex-end;
        height: 289px;
        background: white no-repeat;
    }

    .header_container {
        width: 438px;
    }
</style>
