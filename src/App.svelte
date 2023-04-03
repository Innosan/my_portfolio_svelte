<script lang="ts">
	import "./app.css";

	/**
	 Types
	 */
	import type {SvelteToastOptions} from "@zerodevx/svelte-toast/stores";

	/*
	Libs
	 */
	import { Router, Route } from 'svelte-routing'
	import { SvelteToast } from "@zerodevx/svelte-toast";

	/*
	Components
	 */
	import Header from "./lib/Components/Header.svelte";

	/*
	Pages
	 */
	import Home from "./Pages/Home.svelte";
	import Projects from "./Pages/Projects.svelte";
	import Contacts from "./Pages/Contacts.svelte";
	import Admin from "./Pages/Admin/Admin.svelte";
	import AddProject from "./Pages/Admin/AddProject.svelte";

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

	const options:SvelteToastOptions = {
		duration: 1500,
		initial: 0,
	}

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
		<Route path="/admin/add-project">
			<AddProject/>
		</Route>
	</Router>
</main>

<SvelteToast {options}/>
