# Next Movies (Next.js + App Router, SSR)

Aplicación SSR que muestra **películas populares**, permite **buscar por título** y ver **detalle** usando la API de TMDB.

## Rutas (App Router)
- `/` — Inicio (SSR, `revalidate: 3600`)
- `/movie/[id]` — Detalle (SSR)
- `/search?q=consulta` — Resultados (SSR; `dynamic = 'force-dynamic'`)

## Requisitos
- Node 18+
- Clave de API de TMDB en `.env`

## Configuración y ejecución
1. Crea `.env` (ya incluido en este ZIP) con:
   ```bash
   TMDB_API_KEY=06e0f6d5c636d4e76cf2868e5e38983a
   ```
2. Instala y arranca en desarrollo:
   ```bash
   npm install
   npm run dev
   ```

## Estructura
- `lib/tmdb.js` — funciones server-side para la API.
- `app/page.js` — página de inicio con populares.
- `app/movie/[id]/page.js` — detalle SSR.
- `app/search/page.js` — buscador SSR.
- `app/globals.css` — estilos base (compartidos con la SPA).

## Notas técnicas
- **Next 14 (App Router)**, fetch en servidor (edge/Node).
- Componente `NavBar` es cliente para manejar el formulario de búsqueda.
- No incluye paginación SSR por simplicidad (se puede añadir con `searchParams` y enlaces).
