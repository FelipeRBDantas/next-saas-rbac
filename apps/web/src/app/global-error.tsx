'use client'

import { ErrorPage } from './(errors)/ErrorPage'

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <ErrorPage
          title="Erro Global"
          message={error.message || 'Falha crítica na aplicação.'}
        />
      </body>
    </html>
  )
}
