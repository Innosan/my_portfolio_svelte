<script lang="ts">
	import "./app.css";

	/*
	Libs
	 */
	import { Router, Route } from 'svelte-routing'

	/*
	Components
	 */
	import Header from "./lib/Components/Header.svelte";
	import Footer from "./lib/Components/Footer.svelte";

	/*
	Pages
	 */
	import Home from "./Pages/Home.svelte";
	import Projects from "./Pages/Projects.svelte";
	import Contacts from "./Pages/Contacts.svelte";
	import Admin from "./Pages/Admin.svelte";

	/*
	Icons
	 */
	import githubIcon from "./assets/icons/socials/Github.svg";
	import spotifyIcon from "./assets/icons/socials/Spotify.svg";
	import telegramIcon from "./assets/icons/socials/Telegram.svg";

	let navItems = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Projects",
			link: "/projects",
		},
		{
			title: "Contacts",
			link: "/contacts"
		},
		{
			title: "Admin",
			link: "/admin"
		},
	]

	let footerItems = [
		{
			icon: githubIcon,
			link: "https://github.com/Innosan",
			title: "GitHub"
		},
		{
			icon: telegramIcon,
			link: "https://t.me/inno_san",
			title: "Telegram"
		},
		{
			icon: spotifyIcon,
			link: "https://open.spotify.com/artist/5CySiPyPSavXUd1RhJ3bUS?si=HVnCEumMSsqs8NYbULKNqg",
			title: "Spotify"
		},
	]

</script>

<main class="flex flex-col gap-20 float-right">

	<Header navItems = {navItems}/>

	<Router>
		<Route path="/">
			<Home/>
		</Route>
		<Route path="/projects">
			<Projects/>
		</Route>
		<Route path="/contacts">
			<Contacts/>
		</Route>
		<Route path="/admin">
			<Admin/>
		</Route>
	</Router>

	<Footer footerItems={footerItems}/>

</main>
