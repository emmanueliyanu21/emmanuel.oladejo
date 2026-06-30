import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emmanuel Oladejo — Senior Frontend Engineer',
  description:
    'Emmanuel Iyanu Oladejo — Senior Frontend Engineer specializing in fintech. I build the payment interfaces people trust with their money: checkout gateways, multi-currency cards, and real-time transaction flows. React, Angular, TypeScript. Lagos, Nigeria.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
