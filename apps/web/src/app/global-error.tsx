'use client'

import { ErrorPage } from './(errors)/ErrorPage'

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html lang="pt-BR" className="dark">
      <body suppressHydrationWarning>
        <ErrorPage
          title="Erro Global"
          message={error.message || 'Falha crítica na aplicação.'}
        />
      </body>
    </html>
  )
}
