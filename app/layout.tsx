import '@fontsource-variable/montserrat'
import '@fontsource/agbalumo'
import '@fontsource/courier-prime'
import '@fontsource/nothing-you-could-do'
import 'aos/dist/aos.css'
import type { Metadata } from 'next'
import '../styles/globals.css'
import { AOSInit } from './aos'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Denis Declercq - Développeur Web Fullstack Sénior',
  description: 'Plus de 24 ans d\'expérience en développement web. Expert React, Angular, TypeScript, Node.js, Java, Spring. Spécialisé en migration d\'architectures legacy et méthodologies Agile.',
  keywords: ['développeur fullstack', 'React', 'Angular', 'TypeScript', 'Java', 'Node.js', 'Scrum', 'Agile', 'Paris'],
  authors: [{ name: 'Denis Declercq' }],
  creator: 'Denis Declercq',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://ddcq.github.io',
    title: 'Denis Declercq - Développeur Web Fullstack Sénior',
    description: 'Plus de 24 ans d\'expérience en développement web. Expert React, Angular, TypeScript, Node.js, Java.',
    siteName: 'CV Denis Declercq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denis Declercq - Développeur Web Fullstack Sénior',
    description: 'Plus de 24 ans d\'expérience en développement web.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: 'apple-icon.png',
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <AOSInit />
      <body className="bg-base-100 text-base-content">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
