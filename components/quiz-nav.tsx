'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config'
import { useScroll } from '@/hooks'
import { cn } from '@/lib'
import { QuizNavProps } from '@/types'

import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export function QuizNav({ className, ...props }: QuizNavProps) {
  const pathname = usePathname()
  const ref = useScroll()

  return (
    <ScrollArea className='w-full whitespace-nowrap text-primary'>
      <div
        className={cn('flex w-max space-x-4 pr-4', className)}
        {...props}>
        {siteConfig.quizNav.map((nav, index) => (
          <div
            key={`quizNav_link_${index}`}
            ref={ref}
            className='overflow-hidden'>
            <Link
              href={nav.href}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary dark:hover:text-secondary-foreground',
                pathname === nav.href || (index === 0 && pathname === '/')
                  ? 'bg-muted font-medium text-primary dark:bg-primary dark:text-foreground'
                  : 'text-muted-foreground'
              )}>
              {nav.title}
            </Link>
          </div>
        ))}
      </div>
      <ScrollBar
        orientation='horizontal'
        className='invisible'
      />
    </ScrollArea>
  )
}
