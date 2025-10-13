'use client'

import { ThemeProvider } from 'next-themes'

import { ErrorPage } from './(errors)/ErrorPage'

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ErrorPage
            title="Erro Global"
            message={error.message || 'Falha crítica na aplicação.'}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
