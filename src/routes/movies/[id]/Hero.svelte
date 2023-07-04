<script lang="ts">
	import { media } from '$lib/api';
	import type { MovieDetails } from '$lib/types';

	export let movie: MovieDetails;

	$: backdrop =
		movie.images.backdrops.find((image) => !image.iso_639_1) ||
		movie.images.backdrops[0];
</script>

<div class="hero">
	<div class="backdrop">
		<img alt={movie.title} src={media(backdrop.file_path, 1280)} />
	</div>

	<div class="info">
		<h1>{movie.title}</h1>
		<p>{movie.overview}</p>
	</div>
</div>

<style>
	.hero {
		display: grid;
	}
</style>
