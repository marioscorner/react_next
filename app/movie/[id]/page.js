import Link from 'next/link'
import { getMovieById, posterUrl } from '../../../lib/tmdb'

export async function generateMetadata({ params }) {
  const movie = await getMovieById(params.id)
  return { title: movie.title }
}

export default async function MoviePage({ params }) {
  const movie = await getMovieById(params.id)
  return (
    <main className="container">
      <Link href="/" className="muted">← Volver</Link>
      <div className="detail" style={{ marginTop: '1rem' }}>
        <img className="poster" src={posterUrl(movie.poster_path, 'w500')} alt={movie.title} />
        <div>
          <h1>{movie.title}</h1>
          <p className="muted">{movie.release_date?.slice(0, 4)} • {movie.runtime} min • ⭐ {movie.vote_average?.toFixed(1)}</p>
          <p>{movie.overview || 'Sin sinopsis disponible.'}</p>
          {movie.genres?.length > 0 && (
            <p className="muted">Géneros: {movie.genres.map(g => g.name).join(', ')}</p>
          )}
          {movie.homepage && (
            <p><a href={movie.homepage} target="_blank" rel="noreferrer">Sitio oficial</a></p>
          )}
        </div>
      </div>
    </main>
  )
}
