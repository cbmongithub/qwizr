import Link from 'next/link'
import { cn } from '@/lib'

import { buttonVariants } from '@/components/ui/button'

import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './mode-toggle'

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <MobileNav />
        <div className='flex flex-1 items-center space-x-2 justify-end'>
          <nav className='flex items-center'>
            <Link
              href='/login'
              className={cn(buttonVariants({ variant: 'outline' }))}>
              Login
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
