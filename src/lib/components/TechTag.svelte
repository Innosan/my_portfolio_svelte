<script>
    export let title, icon;

	import {fly} from 'svelte/transition';

	let visible = false;

    function toggleVisibility() {
        visible = !visible;
    }
</script>

<div class="flex flex-row items-center gap-2 bg-black bg-opacity-70 backdrop-blur-sm p-3 rounded-2xl icon_container" on:mouseenter={toggleVisibility} on:mouseleave={toggleVisibility}>
    <div>
        {@html icon}
    </div>
    {#if visible}
        <p transition:fly={{ x: -50, duration: 500 }}>{title}</p>
    {/if}
</div>
