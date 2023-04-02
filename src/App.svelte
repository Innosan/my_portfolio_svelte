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

</script>

<main class="flex flex-col gap-10 float-right">

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

</main>
