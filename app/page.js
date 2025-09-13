import { getPopularMovies } from '../lib/tmdb'
import NavBar from '../components/NavBar'
import MovieCard from '../components/MovieCard'

export const revalidate = 3600 // revalidar cada hora

export default async function Page() {
  const data = await getPopularMovies(1)
  return (
    <div>
      <NavBar />
      <main className="container">
        <h1 className="section-title">Populares</h1>
        <div className="grid">
          {data.results?.map(m => <MovieCard key={m.id} movie={m} />)}
        </div>
      </main>
    </div>
  )
}
