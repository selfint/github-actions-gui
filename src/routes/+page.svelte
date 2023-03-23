<script lang="ts">
	import Editor from '$lib/components/editor/Editor.svelte';
	import Marketplace from '$lib/components/editor/Marketplace.svelte';
	import Sidebar from '$lib/components/editor/Sidebar.svelte';
</script>

<div id="content">
	<Sidebar />
	<Editor />
	<Marketplace />
</div>

<style>
	#content {
		background-color: #d0d7de;
		column-gap: 2px;
		display: grid;
		grid-template-areas: 'sidebar editor marketplace';
		grid-template-columns: 1fr 4fr 1fr;
		height: 100%;
	}
</style>
