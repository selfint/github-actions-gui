<script lang="ts">
	import Editor from './Editor.svelte';
	import Marketplace from './Marketplace.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<div class="row">
	<Sidebar />
	<Editor />
	<Marketplace />
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		height: 100%;
	}
</style>
