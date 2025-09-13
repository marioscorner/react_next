import MovieCard from '../../components/MovieCard'
import NavBar from '../../components/NavBar'
import { searchMovies } from '../../lib/tmdb'

export const dynamic = 'force-dynamic'

export default async function SearchPage({ searchParams }) {
  const q = searchParams.q || ''
  const page = Number(searchParams.page || '1')
  const data = q ? await searchMovies(q, page) : null

  return (
    <div>
      <NavBar defaultQuery={q} />
      <main className="container">
        <h1 className="section-title">Resultados para “{q}”</h1>
        {!data && <p className="muted">Escribe una consulta para buscar.</p>}
        {data && data.results?.length === 0 && <p className="muted">No se han encontrado resultados.</p>}
        <div className="grid">
          {data?.results?.map(m => <MovieCard key={m.id} movie={m} />)}
        </div>
      </main>
    </div>
  )
}
