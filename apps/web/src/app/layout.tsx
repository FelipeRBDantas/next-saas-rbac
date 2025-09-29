import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next SaaS App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
