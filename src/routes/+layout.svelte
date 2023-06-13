<script>
	import '../style.css';
	import tmdb from '$lib/images/moviedb.svg';
</script>

<nav>
	<div class="logo">
		<a href="/">
			Svelti <span>Prime</span>
		</a>
	</div>

	<div class="links">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Login</a>
	</div>
</nav>

<main>
	<slot />
</main>

<footer>
	Data provided by
	<a href="https://www.themoviedb.org/" target="_blank">
		<img src={tmdb} alt="The Movie DB" />
	</a>
</footer>

<style>
	nav {
		display: flex;
		width: 100%;
		height: 3rem;
		align-items: center;
		justify-content: space-between;
		max-width: var(--column);
		padding: 0 var(--side);
		color: var(--accent);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.logo a {
		color: #e74c3c;
		font-family: 'Signika', sans-serif;
		font-weight: 300;
		font-size: 1.6rem;
		line-height: 1.3;
	}

	.logo a span {
		background: #e74c3c;
		color: #fff;
		display: inline-block;
		line-height: 1.8;
		padding: 0 1.5rem;
	}

	.links {
		display: flex;
		gap: 1rem;
	}

	footer {
		display: flex;
		justify-content: center;
		height: 5rem;
	}
</style>
