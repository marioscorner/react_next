'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function NavBar({ defaultQuery = '' }) {
  const router = useRouter()
  const inputRef = useRef(null)

  useEffect(() => {
    if (defaultQuery && inputRef.current) inputRef.current.value = defaultQuery
  }, [defaultQuery])

  const onSubmit = (e) => {
    e.preventDefault()
    const q = new FormData(e.currentTarget).get('q')?.toString().trim()
    if (!q) return
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header>
      <div className="container">
        <nav>
          <Link href="/" className="logo">🎬 Next Movies</Link>
          <Link href="/">Inicio</Link>
          <form className="searchbar" onSubmit={onSubmit} role="search">
            <input
              ref={inputRef}
              name="q"
              placeholder="Buscar películas…"
              aria-label="Buscar películas"
              defaultValue={defaultQuery}
            />
            <button type="submit">Buscar</button>
          </form>
        </nav>
      </div>
    </header>
  )
}
