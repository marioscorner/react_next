const API_BASE = 'https://api.themoviedb.org/3'
const IMG_BASE = 'https://image.tmdb.org/t/p'

const API_KEY = process.env.TMDB_API_KEY

if (!API_KEY) {
  console.warn('⚠️ Falta TMDB_API_KEY en .env')
}

async function request(path, params = {}) {
  const url = new URL(API_BASE + path)
  url.search = new URLSearchParams({ api_key: API_KEY, language: 'es-ES', ...params })
  const res = await fetch(url.toString(), { headers: { accept: 'application/json' } })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    const message = data.status_message || `HTTP ${res.status}`
    throw new Error(message)
  }
  return res.json()
}

export function posterUrl(path, size = 'w342') {
  if (!path) return '/placeholder-poster.svg'
  return `${IMG_BASE}/${size}${path}`
}

export async function getPopularMovies(page = 1) {
  return request('/movie/popular', { page })
}

export async function getMovieById(id) {
  return request(`/movie/${id}`)
}

export async function searchMovies(query, page = 1) {
  return request('/search/movie', { query, include_adult: 'false', page })
}
