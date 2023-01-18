<script lang="ts">
	import "./app.css";

	/*
	Components
	 */
	import Header from "./lib/Header.svelte";
	import Footer from "./lib/Footer.svelte";

	/*
	Icons
	 */
	import githubIcon from "./assets/icons/socials/Github.svg";
	import spotifyIcon from "./assets/icons/socials/Spotify.svg";
	import telegramIcon from "./assets/icons/socials/Telegram.svg";

	let navItems = [
		{
			title: "Home",
			link: "#home",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contacts",
			link: "#contacts"
		}
	]
	let footerItems = [
		{
			icon: githubIcon,
			link: "https://github.com/Innosan",
			title: "My GitHub"
		},
		{
			icon: telegramIcon,
			link: "https://t.me/inno_san",
			title: "My Telegram"
		},
		{
			icon: spotifyIcon,
			link: "https://open.spotify.com/artist/5CySiPyPSavXUd1RhJ3bUS?si=HVnCEumMSsqs8NYbULKNqg",
			title: "My Spotify"
		},
	]

</script>

<main class="flex flex-col gap-20 float-right">

	<Header navItems = {navItems}/>

	<div class="text-white font-bold text-5xl gap-4 flex flex-col text-right">
		<h1 class="mb-1 heading"><span class="strokeme">Hi!</span></h1>

		<p class="text-6xl">I'm Mikhail,</p>
		<p>lovely <span class="strokeme">front-end</span> developer</p>
		<p class="text-2xl text-gray-200 underline">St. Petersburg, Russia</p>

	</div>

	<Footer footerItems={footerItems}/>

</main>
