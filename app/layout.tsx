import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SlackToNotion — Auto-sync Slack threads to Notion',
  description: 'Monitors Slack channels for reactions or keywords and automatically creates structured Notion pages from thread content.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4348cb6b-bbc6-4fda-8beb-a848917b7830"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
