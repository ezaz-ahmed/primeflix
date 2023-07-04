<script>
	import '../style.css';
	import { page } from '$app/stores';
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

<main class:infinite={$page.data.infinite}>
	<slot />
</main>

<footer>
	<p>
		Data provided by <a href="https://www.themoviedb.org/"
			><img alt="The Movie DB" src={tmdb} /></a
		>
	</p>
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

	main.infinite {
		height: 0;
		flex: 1;
		overflow: hidden;
	}

	footer {
		display: flex;
		height: 5rem;
		align-items: center;
		justify-content: center;
	}

	a {
		text-decoration: none;
	}
</style>
