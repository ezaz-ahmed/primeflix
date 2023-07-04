<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: images = movie.images;
	$: backdrop =
		images.backdrops.find((image) => !image.iso_639_1) ||
		images.backdrops[0];

	$: logo =
		images.logos.find((image) => image.iso_639_1 === 'en') ||
		images.logos[0];
</script>

<a href="/movies/{movie.id}">
	<img
		class="backdrop"
		src={media(backdrop.file_path, 1280)}
		style="aspect-ratio: {backdrop.aspect_ratio}"
		alt={movie.title}
	/>

	<img
		class="logo"
		src={media(logo.file_path, 1280)}
		style="aspect-ratio: {logo.aspect_ratio}"
		alt={movie.title}
	/>
</a>

<style>
	.featured {
		position: relative;
		display: grid;
		background: black;
	}

	.backdrop img {
		width: 100%;
		display: block;
	}

	.backdrop::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 8rem;
		left: 0;
		bottom: 0;
		background: linear-gradient(to top, black, transparent);
	}

	.info {
		display: flex;
		flex-direction: column;
		bottom: 0;
		width: 100%;
		padding: var(--side);
		margin-top: -4rem;
		gap: 1rem;
	}

	.info h1,
	.info p {
		margin: 0;
	}

	.info p {
		max-width: 40ch;
	}

	button {
		background: var(--accent);
		border: none;
		color: black;
		padding: 1rem;
	}

	button:active {
		filter: brightness(0.9);
	}

	@media (min-width: 80em) {
		.featured {
			grid-template-columns: 1fr 80em;
			grid-template-rows: auto;
		}

		.info {
			position: absolute;
			justify-content: center;
			top: 0;
			left: 0;
			width: 40em;
			height: 100%;
			grid-column: 1/2;
			margin: 0;
		}

		.backdrop {
			grid-column: 2/3;
		}

		.backdrop::after {
			width: 15rem;
			height: 100%;
			left: 100px;
			left: 0;
			bottom: 0;
			background: linear-gradient(to right, black, transparent);
		}
	}
</style>
