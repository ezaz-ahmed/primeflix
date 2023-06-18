import * as api from '$lib/api.js'
import type { MovieDetails, MovieListResult } from '$lib/types.js'

export async function load({ fetch }) {
  const trending = await api.get(fetch, "trending/movie/day") as MovieListResult

  const featured = await api.get(fetch, `movie/${trending.results[0].id}`, {
    append_to_response: 'images'
  }) as MovieDetails

  return {
    trending,
    featured
  }
} 