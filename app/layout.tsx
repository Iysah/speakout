// 'use client'
import './globals.css'
import Link from 'next/link'
import { Metadata } from 'next'
import ResponsiveMenu from './components/ResponsiveMenu'

// export const metadata: Metadata = {
//   title: 'Anti-Corruption Initiative',
//   description: 'Platform for reporting and combating corruption',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}