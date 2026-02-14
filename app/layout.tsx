import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Lexie — Law at the Speed of Thought',
  description: 'Lexie is the native AI layer for Microsoft Office. Drafting, reviewing, and executing inside Word and Outlook.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ '--font-serif': 'var(--font-serif)' } as React.CSSProperties}>
        {children}
      </body>
    </html>
  )
}
