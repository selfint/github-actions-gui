<div id="content">
	<div class="sidebar-area" id="step">step</div>
	<div class="sidebar-area" id="job">job</div>
	<div class="sidebar-area" id="action">action</div>
</div>

<style>
	#content {
		display: grid;
		grid-template-areas: 'step' 'job' 'action';
		grid-template-rows: 3fr 2fr 1fr;
		row-gap: 2px;
	}

	.sidebar-area {
		background-color: white;
	}
</style>
