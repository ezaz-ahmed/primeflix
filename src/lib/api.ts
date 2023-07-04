export const baseUrl = "https://api.movies.tastejs.com"
export const baseMedia = "https://image.tmdb.org/t/p"

const cache = new Map()

export async function get(fetch: typeof globalThis.fetch, endpoint: string, params?: Record<string, string>) {
  const q = new URLSearchParams(params)
  const url = `${baseUrl}/${endpoint}?${q}`

  if (cache.has(url)) {
    return cache.get(url)
  }

  const response = await fetch(url)
  const data = response.json()

  cache.set(url, data)

  return data
}

export function media(file_path: string, width: number) {
  return `${baseMedia}/w${width}${file_path}`
}