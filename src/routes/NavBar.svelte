<nav>
	<div id="name">Github Actions UI</div>
	<div id="buttons">
		<a class="button edit" href="/">Edit</a>
		<a class="button export" href="/export">Export</a>
	</div>
</nav>

<style>
	nav {
		align-items: center;
		background-color: #1e1e1e;
		display: grid;
		grid-template-areas: 'title' 'buttons';
		grid-template-columns: 1fr 1fr;
		padding: 0.5rem;
	}

	#name {
		color: #ffffff;
		font-size: xx-large;
	}

	.edit {
		background-color: #f6f8fa;
		color: #1b1f24;
		font-weight: bold;
	}

	.export {
		background-color: #2da44e;
		color: #ffffff;
	}

	.button {
		border-radius: 0.4em;
		padding: 0.6em;
		margin: 0.3em;
		text-decoration: none;
		font-size: medium;
	}

	#buttons {
		justify-self: end;
	}
</style>
