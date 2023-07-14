<script lang="ts">
	import { media } from '$lib/api';
	import Starts from '$lib/components/Starts.svelte';
	import { smoothload } from '$lib/actions';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: backdrop =
		movie.images.backdrops.find((image) => !image.iso_639_1) ||
		movie.images.backdrops[0];
</script>

<div class="featured">
	<div class="backdrop">
		<img
			src={media(backdrop.file_path, 1280)}
			style="aspect-ratio: {backdrop.aspect_ratio}"
			alt={movie.title}
			use:smoothload
		/>

		<div class="info column">
			<h1>{movie.title}</h1>
			<Starts
				vote_average={movie.vote_average}
				vote_count={movie.vote_count}
			/>
			<p>{movie.overview}</p>
		</div>
	</div>
</div>

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
		position: absolute;
		top: 50%;
		transform: translateY(-25%);
		left: 0;
		height: 100%;
		grid-column: 1/2;
		margin-top: 0;
	}

	.info h1,
	.info p {
		margin: 0;
	}

	.info p {
		min-width: 100%;
		max-width: 40px;
	}

	@media (min-width: 80em) {
		.featured {
			grid-template-columns: 1fr 80em;
			grid-template-rows: auto;
		}

		.info {
			position: absolute;
			top: 0;
			/* justify-content: center;
			left: 0;
			width: 40em;
			height: 100%;
			grid-column: 1/2;
			margin: 0; */
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
