import Link from 'next/link'
import { posterUrl } from '../lib/tmdb'

export default function MovieCard({ movie }) {
  const { id, title, vote_average, poster_path, release_date } = movie
  const year = release_date?.slice(0, 4)
  return (
    <article className="card">
      <Link href={`/movie/${id}`} aria-label={`Ver detalles de ${title}`}>
        <img src={posterUrl(poster_path)} alt={title} loading="lazy" />
      </Link>
      <div className="padded">
        <div className="badge" title="Puntuación media">
          ⭐ {vote_average?.toFixed(1)}
        </div>
        <h3 className="movie-title">
          <Link href={`/movie/${id}`}>{title}</Link>
        </h3>
        <p className="muted">{year || '—'}</p>
      </div>
    </article>
  )
}
