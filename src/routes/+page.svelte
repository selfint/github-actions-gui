<script lang="ts">
	import Editor from './Editor.svelte';
	import Marketplace from './Marketplace.svelte';
	import Sidebar from './Sidebar.svelte';
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
