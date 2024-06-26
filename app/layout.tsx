import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'Movie Base',
  description: 'my movie rateing website using nextjs and the tmdb api',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
