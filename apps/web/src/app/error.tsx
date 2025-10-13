'use client'

import { ErrorPage } from './(errors)/ErrorPage'
import {
  NotFoundError,
  ServerError,
  UnauthorizedError,
} from './(errors)/errors'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  if (error instanceof NotFoundError) {
    return <ErrorPage title="404 - Não encontrado" message={error.message} />
  }

  if (error instanceof UnauthorizedError) {
    return (
      <ErrorPage
        title="Sessão expirada"
        message="Faça login novamente para continuar."
        showHomeLink={false}
      />
    )
  }

  if (error instanceof ServerError) {
    return (
      <ErrorPage
        title="Erro interno do servidor"
        message={error.message}
        onRetry={reset}
      />
    )
  }

  return (
    <ErrorPage
      title="Ops! Algo deu errado 😬"
      message={error.message || 'Ocorreu um erro inesperado.'}
      onRetry={reset}
    />
  )
}
