import '@/styles/globals.css'

import { Metadata, Viewport } from 'next'
import { siteConfig } from '@/config'
import { cn, fontSans } from '@/lib'
import { type Layout } from '@/types'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Home`,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: Layout) {
  return (
    <>
      <html
        lang='en'
        suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange>
            <div className='relative flex min-h-screen flex-col bg-background'>
              <Header />
              <main className='flex-1 container relative'>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
