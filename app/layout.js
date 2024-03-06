import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KillFood',
  description: 'KillFood Homepage',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <header>RootLayout</header> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
