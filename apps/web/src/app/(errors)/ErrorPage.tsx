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
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground text-center px-6 transition-colors duration-300">
      <h1 className="text-3xl font-semibold mb-3 text-primary">{title}</h1>

      <p className="text-muted-foreground mb-8">{message}</p>

      <div className="flex flex-wrap justify-center gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-ring transition"
          >
            Tentar novamente
          </button>
        )}

        {showHomeLink && (
          <Link
            href="/"
            className="px-5 py-2.5 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/90 focus:ring-2 focus:ring-ring transition"
          >
            Voltar à página inicial
          </Link>
        )}
      </div>
    </div>
  )
}
