'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config'
import { useScroll } from '@/hooks'
import { cn } from '@/lib'
import { type QwizzesNavProps } from '@/types'

export function QwizzesNav({ className, ...props }: QwizzesNavProps) {
  const pathname = usePathname()
  const ref = useScroll(pathname)
  return (
    <div
      className='relative overflow-x-hidden sm:mx-auto lg:mx-0 max-w-2xl'
      ref={ref}>
      <div
        className={cn('mb-4 flex items-center whitespace-nowrap', className)}
        {...props}>
        {siteConfig.qwizNav.map((nav, index) => (
          <Link
            href={nav.href}
            key={`qwizzesNav_link_${index}`}
            className={cn(
              'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary dark:hover:text-secondary-foreground',
              pathname === nav.href || (index === 0 && pathname === '/')
                ? 'bg-muted font-medium text-primary dark:bg-primary dark:text-foreground'
                : 'text-muted-foreground'
            )}>
            {nav.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
