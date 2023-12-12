import { Urbanist, Josefin_Sans
 } from 'next/font/google'
import './globals.css'

const urban = Urbanist({
  subsets: ['latin'],
  variable: "--font--urban"
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: "--font--josefin"
})

export const metadata = {
  title: 'Jamhuri Day',
  description: 'The history of Jamhuri Day',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${urban.variable} ${josefin.variable}`}>
      <body >{children}</body>
    </html>
  )
}
