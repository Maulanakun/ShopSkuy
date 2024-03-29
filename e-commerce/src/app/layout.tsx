import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faHeart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(faHeart, faUser, faSearch)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha384-3B6NwesSXE7YJlcLI9RpRqGf2p/EgVH8BgoKTaUrmKNDkHPStTQ3EyoYjCGXaOTS"
      crossOrigin="anonymous"
    />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
