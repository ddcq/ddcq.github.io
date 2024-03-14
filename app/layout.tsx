import '@fontsource-variable/montserrat'
import '@fontsource/agbalumo'
import '@fontsource/courier-prime'
import '@fontsource/nothing-you-could-do'
import 'aos/dist/aos.css'
import type { Metadata } from 'next'
import '../styles/globals.css'
import { AOSInit } from './aos'

export const metadata: Metadata = {
  title: 'CV - Denis Declercq',
  icons: {
    icon: '/favicon.ico',
    apple: 'apple-icon.png',
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className="bg-base-100 text-base-content">{children}</body>
    </html>
  )
}
