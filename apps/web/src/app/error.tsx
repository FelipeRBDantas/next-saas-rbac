'use client'

import { useEffect } from 'react'

import {
  NotFoundError,
  ServerError,
  UnauthorizedError,
} from '@/errors/AppErrors'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // TODO: Integrate Sentry

    console.error('🔴 Erro capturado:', error)
  }, [error])

  if (error instanceof NotFoundError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">404</h1>

        <p className="text-gray-500 mb-4">{error.message}</p>

        <a
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Voltar à Home
        </a>
      </div>
    )
  }

  if (error instanceof UnauthorizedError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl font-semibold text-red-600 mb-2">
          Acesso não autorizado
        </h2>

        <p className="text-gray-500 mb-4">{error.message}</p>

        <a
          href="/login"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Ir para Login
        </a>
      </div>
    )
  }

  if (error instanceof ServerError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-semibold text-red-600 mb-2">
          Erro interno
        </h2>

        <p className="text-gray-500 mb-4">{error.message}</p>

        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Tentar novamente
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold text-red-600 mb-2">
        Ocorreu um erro inesperado.
      </h2>

      <p className="text-gray-500 mb-4">{error.message}</p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Recarregar
      </button>
    </div>
  )
}
