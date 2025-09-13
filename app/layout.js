export const metadata = {
  title: 'Next Movies',
  description: 'Listado, búsqueda y detalle de películas con TMDB (SSR)'
}
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
