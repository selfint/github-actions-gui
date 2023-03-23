<script lang="ts">
	import NavBar from './NavBar.svelte';
</script>

<svelte:head>
	<title>Github Action UI</title>
</svelte:head>

<div id="layout">
	<NavBar />
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

	#layout {
		display: grid;
		grid-template-rows: max-content auto;
		height: 100%;
	}
</style>
