import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jamhuri Day',
  description: 'The history of Jamhuri Day',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
