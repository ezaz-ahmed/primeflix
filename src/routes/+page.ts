import { get } from '$lib/api.js'
import type { MovieDetails, MovieList } from '$lib/types.js'

export async function load({ fetch }) {
  const trending = await get(fetch, "trending/movie/day") as MovieList

  const featured_data = await get(fetch, `movie/${trending.results[0].id}`, {
    append_to_results: 'images'
  }) as MovieDetails

  return {
    trending,
    featured_data
  }
}