export const baseUrl = "https://api.movies.tastejs.com"
export const baseMedia = "https://image.tmdb.org/t/p"

export async function get(fetch: typeof globalThis.fetch, endpoint: string, params?: Record<string, string>) {
  const q = new URLSearchParams(params)
  const response = await fetch(`${baseUrl}/${endpoint}?${q}`)
  return response.json()
}

export function media(file_path: string, width: number) {
  return `${baseMedia}/w${width}${file_path}`
}