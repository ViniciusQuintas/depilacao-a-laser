import type { Metadata } from 'next'
import { Anton } from 'next/font/google'
import './globals.css'

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Depilação a Laser',
  description:
    'O Estética Sense oferece excelência em estética corporal e facial em Viçosa - MG os melhores profissionais da dermatologia, tricologia médica, plástica, endocrinologia, ginecologia, fisioterapia dermatofuncional, sexóloga, nutrição e estética.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={anton.className}>{children}</body>
    </html>
  )
}
