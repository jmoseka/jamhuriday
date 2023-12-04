import { Inter, Istok_Web, Ibarra_Real_Nova, Nunito } from 'next/font/google'
import './globals.css'

const istok = Istok_Web({
   subsets: ['latin'],
    variable: "--font--istok",
     weight: ["400","700"], 
    })

const ibara = Ibarra_Real_Nova({ 
  subsets: ['latin'], 
  variable: "--font--ibara" })

  const nunito = Nunito({ 
    subsets: ['latin'], 
    variable: "--font--nunito" })

export const metadata = {
  title: 'Jamhuri Day',
  description: 'The history of Jamhuri Day',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ibara.variable} ${istok.variable} ${nunito.variable}` }>
      <body >{children}</body>
    </html>
  )
}
