<nav>
	<div>Github Actions UI</div>
	<div id="buttons">
		<a class="button edit" href="/">Edit</a>
		<a class="button export" href="/export">Export</a>
	</div>
</nav>

<style>
	nav {
		background-color: #1e1e1e;
		color: #ffffff;
		display: grid;
		grid-template-areas: 'title' 'buttons';
		grid-template-columns: 1fr 1fr;
		padding: 0.5em;
	}

	.edit {
		margin-left: auto;
		color: #1b1f24;
		background-color: #f6f8fa;
	}

	.export {
		margin-left: auto;
		background-color: #2da44e;
		color: #ffffff;
	}

	.button {
		border-radius: 6px;
		padding: 1px;
		height: fit-content;
		width: fit-content;
		text-decoration: none;
	}

	#buttons {
		justify-self: end;
	}
</style>
