import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ["latin"] })

import '../scss/main.scss'

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Projeto Pokedex 2.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
