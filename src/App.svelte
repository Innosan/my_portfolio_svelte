<script lang="ts">
	import "./app.css";
	import "@styles/toast.css";
	import "@styles/media.scss";

	/**
	 Types
	 */
	import type {SvelteToastOptions} from "@zerodevx/svelte-toast/stores";

	/*
	Libs
	 */
	import {Route, Router} from 'svelte-routing'
	import {SvelteToast} from "@zerodevx/svelte-toast";

	/*
	Components
 	*/
	import Header from "@components/Header.svelte";

	/*
	Pages
 	*/
	import Home from "./Pages/Home.svelte";
	import Projects from "./Pages/Projects.svelte";
	import Contacts from "./Pages/Contacts.svelte";
	import Admin from "./Pages/Admin/Admin.svelte";
	import AddProject from "./Pages/Admin/AddProject.svelte";

	import {header} from "@utils/utilData.js";

	const options:SvelteToastOptions = {
		duration: 1500,
		initial: 0,
		reversed: false,
		intro: { y: -100 }
	}
</script>

<main class="flex flex-col gap-10 float-right">
	<Header navItems = {header}/>

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
