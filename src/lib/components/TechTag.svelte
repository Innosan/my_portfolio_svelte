<script>
    export let title, icon;

	import {fly, slide} from 'svelte/transition';

	let visible = false;
</script>

<div
	class="flex flex-row items-center gap-2 bg-black bg-opacity-70 backdrop-blur-sm p-3 rounded-2xl icon_container"
	on:mouseenter={() => {visible = true}}
	on:mouseleave={() => visible = false}>
    <div>
        {@html icon}
    </div>
	{#if visible}
		<div class="title-wrapper"
			 in:slide="{{axis: 'x', duration: 200}}"
			 out:slide="{{axis: 'x', duration: 200, delay: 150}}"
		>
			<div class="title"
				 in:fly="{{ x: -50, duration: 200, delay: 150 }}"
				 out:fly="{{ x: -50, duration: 200}}"
			>
				{title}
			</div>
		</div>
	{/if}
</div>

<style>
</style>
