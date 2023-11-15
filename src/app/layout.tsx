import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationComponent from '@/app/components/NavigationComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS 14: Fetch & Routing',
  description: 'A simple fetch & routing app',
  keywords: 'nextjs,react'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <MenuComponent /> */}
        {/* <HeaderComponent /> */}
        <NavigationComponent />

        {children}
        {/* <FooterComponent /> */}
      </body>
    </html>
  )
}
