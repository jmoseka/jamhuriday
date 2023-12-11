import { Inter, Istok_Web, Ibarra_Real_Nova, Nunito, Urbanist, Playfair_Display } from 'next/font/google'
import './globals.css'

const urban = Urbanist({
  subsets: ['latin'],
  variable: "--font--urban"
})

const playFair = Playfair_Display({
  subsets: ['latin'],
  variable: "--font--playfair"
})

export const metadata = {
  title: 'Jamhuri Day',
  description: 'The history of Jamhuri Day',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urban.variable} ${playFair.variable}`}>
      <body >{children}</body>
    </html>
  )
}
