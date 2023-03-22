<script lang="ts">
	import NavBar from './NavBar.svelte';
</script>

<svelte:head>
	<title>Github Action UI</title>
</svelte:head>

<NavBar />

<slot />

<style>
	:global(*) {
		margin: 0;
		padding: 0;
	}
</style>
