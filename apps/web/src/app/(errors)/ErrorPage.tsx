'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface ErrorPageProps {
  title: string
  message: string
  onRetry?: () => void
  showHomeLink?: boolean
}

export function ErrorPage({
  title,
  message,
  onRetry,
  showHomeLink = true,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(`🔴 [ErrorPage] ${title}:`, message)
  }, [title, message])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-6">
      <h1 className="text-3xl font-bold text-red-600 mb-2">{title}</h1>

      <p className="text-gray-600 mb-6">{message}</p>

      <div className="flex gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Tentar novamente
          </button>
        )}

        {showHomeLink && (
          <Link
            href="/"
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Voltar à página inicial
          </Link>
        )}
      </div>
    </div>
  )
}
