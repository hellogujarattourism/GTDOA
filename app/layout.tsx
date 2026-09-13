import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GTDOA | Gujarat Transport Drivers Owners Association',
  description: 'Gujarat Transport Drivers Owners Association official platform.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
