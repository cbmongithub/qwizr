import Link from 'next/link'

import { MainNav } from '@/components/main-nav'
import { MobileNav } from '@/components/mobile-nav'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui'

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center space-x-2 justify-end'>
          <nav className='flex items-center'>
            <ModeToggle />
            <Link
              href='/login'
              className='ml-4'>
              <Button variant='outline'>Login</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
