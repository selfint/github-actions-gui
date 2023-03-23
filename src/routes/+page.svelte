<script lang="ts">
	import Editor from '$lib/components/editor/Editor.svelte';
	import Sidebar from '$lib/components/editor/Sidebar.svelte';
</script>

<div id="content">
	<Sidebar />
	<Editor />
</div>

<style>
	#content {
		background-color: #d0d7de;
		column-gap: 2px;
		display: grid;
		grid-template-areas: 'sidebar editor';
		grid-template-columns: 2fr 1fr;
		height: 100%;
	}
</style>
