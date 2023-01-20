<script lang="ts">
	import AnimatedPage from "../lib/Components/ServiceComponents/Animated.svelte";
</script>

<AnimatedPage>
	<div class="text-white font-bold text-5xl gap-4 flex flex-col text-right bg-black bg-opacity-40 bg-blend-color-dodge">
		<h1 class="mb-1 heading"><span class="strokeme">Hi!</span></h1>

		<p class="text-6xl">I'm Mikhail,</p>
		<p>lovely <span class="strokeme">front-end</span> developer</p>
		<p class="text-2xl text-gray-200 underline">St. Petersburg, Russia</p>
	</div>
</AnimatedPage>

<style lang="scss">
	div {
		box-shadow: 0 0 80px 80px rgba(0, 0, 0, 0.40);
		padding-left: 40px;
		border-radius: 40px;
	}
</style>
