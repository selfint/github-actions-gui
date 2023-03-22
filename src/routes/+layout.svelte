<script lang="ts">
	import NavBar from './NavBar.svelte';
</script>

<svelte:head>
	<title>Github Action UI</title>
</svelte:head>

<div id="nav">
	<NavBar />
</div>

<div id="content">
	<slot />
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
	}

	:global(html, body) {
		height: 100%;
	}

	:root {
		--var1: 7%;
	}

	#nav {
		height: var(--var1);
	}

	#content {
		height: calc(100% - var(--var1));
	}
</style>
