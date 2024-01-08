'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config'
import { cn } from '@/lib'

import { Icons } from './icons'
import { MobileLink } from './mobile-link'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          className='absolute text-base focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'>
          <Icons.menu className='w-5 h-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left'>
        <MobileLink
          href='/'
          className='flex items-center'
          onOpenChange={setOpen}>
          <Icons.logo className='mr-2 h-6 w-6' />
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <div className='flex flex-col space-y-3 mt-6'>
          <span className='font-bold text-md text-center'>Navigation</span>
          {siteConfig.mobileNav.map((item, index) => (
            <MobileLink
              key={`mobileNav_link_${index}`}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary dark:hover:text-secondary-foreground',
                pathname === item.href
                  ? 'bg-muted font-medium text-primary dark:bg-primary dark:text-foreground'
                  : 'text-muted-foreground'
              )}
              href={item.href}
              onOpenChange={setOpen}>
              {item.title}
            </MobileLink>
          ))}
        </div>
        <div className='flex flex-col space-y-3 mt-6'>
          <span className='font-bold text-md text-center'>Qwizzes</span>
          {siteConfig.qwizNav.map((item, index) => (
            <MobileLink
              key={`qwizNav_link_${index}`}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary dark:hover:text-secondary-foreground',
                pathname === item.href
                  ? 'bg-muted font-medium text-primary dark:bg-primary dark:text-foreground'
                  : 'text-muted-foreground'
              )}
              href={item.href}
              onOpenChange={setOpen}>
              {item.title}
            </MobileLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
