<script lang="ts">
	import Action from './sidebar/Action.svelte';
	import Job from './sidebar/Job.svelte';
	import Step from './sidebar/Step.svelte';
</script>

<div id="content">
	<div class="sidebar-area" id="step"><Step /></div>
	<div class="sidebar-area" id="job"><Job /></div>
	<div class="sidebar-area" id="action"><Action /></div>
</div>

<style>
	#content {
		display: grid;
		grid-template-areas: 'action job step';
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 2px;
		height: 100%;
	}

	.sidebar-area {
		height: 100%;
		background-color: white;
	}

	#step {
		grid-area: step;
	}

	#job {
		grid-area: job;
	}

	#action {
		grid-area: action;
	}
</style>
