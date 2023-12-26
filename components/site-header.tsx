'use client'

import Link from 'next/link'
import { MainNav, ThemeToggle } from '@/components'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { buttonVariants } from './ui'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/10 backdrop-blur-md'>
      <div className='container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0'>
        <MainNav items={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <nav className='flex items-center space-x-2'>
            <ThemeToggle />
            <Link
              href='/login'
              className={cn(buttonVariants({ variant: 'outline' }))}>
              Login
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
