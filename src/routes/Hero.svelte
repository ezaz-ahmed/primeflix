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
	.backdrop::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 8rem;
		left: 0;
		bottom: 0;
		background: linear-gradient(to top, black, transparent);
	}

	@media (min-width: 80em) {
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
