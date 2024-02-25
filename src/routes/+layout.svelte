<script>
	import '../style.css';
	import { page } from '$app/stores';
	import tmdb from '$lib/images/moviedb.svg';
	import PrimeflixLogo from '$lib/images/primeflix.png';
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#f3f3f3" />
	<meta name="theme-color" content="#ffffff" />

	<title>Primeflix</title>
	<meta
		name="description"
		content="Experience Netflix in Svelte style with Primeflix! Dive into the Svelteflix world and enjoy seamless streaming with our innovative platform. Explore now!"
	/>
</svelte:head>

<nav class=" column">
	<div class="logo">
		<a href="/">
			<img src={PrimeflixLogo} alt="Primeflix Logo" />
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
		Data provided by
		<a href="https://www.themoviedb.org/">
			<img alt="The Movie DB" src={tmdb} />
		</a>
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
		padding: 1rem var(--side) 0;
		color: var(--accent);
	}

	.logo a img {
		width: 140px;
		height: auto;
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

	@media (max-width: 400px) {
		.logo a img {
			width: 80px;
			height: auto;
		}
	}
</style>
