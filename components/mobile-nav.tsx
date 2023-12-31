'use client'

import { useState } from 'react'
import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { siteConfig } from '@/config'
import { cn } from '@/lib'

import { Icons } from './icons'
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
          <svg
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'>
            <path
              d='M3 5H11'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M3 12H16'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
            <path
              d='M3 19H21'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
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

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}>
      {children}
    </Link>
  )
}
