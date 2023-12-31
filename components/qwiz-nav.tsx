'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config'
import { cn } from '@/lib'
import { QwizNavProps } from '@/types'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export function QwizNav({ className, ...props }: QwizNavProps) {
  const pathname = usePathname()
  return (
    <div className='relative'>
      <ScrollArea className='max-w-[750px] w-full whitespace-nowrap'>
        <div
          className={cn('mb-4 flex items-center', className)}
          {...props}>
          {siteConfig.qwizNav.map((nav, index) => (
            <Link
              href={nav.href}
              key={`qwizNav_link_${index}`}
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
        <ScrollBar
          orientation='horizontal'
          className='invisible'
        />
      </ScrollArea>
    </div>
  )
}
