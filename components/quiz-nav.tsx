'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config'
import { cn } from '@/lib'

import { QuizNavProps } from '@/types/quizzes'

import { ScrollArea, ScrollBar } from './ui'

export function QuizNav({ className, ...props }: QuizNavProps) {
  const pathname = usePathname()

  return (
    <ScrollArea className='w-full md:max-w-2xl lg:max-w-full whitespace-nowrap text-primary'>
      <div
        className={cn('flex w-max space-x-4 pr-4', className)}
        {...props}>
        {siteConfig.quizNav.map((nav, index) => (
          <div
            key={`quizNav_tab_${index}`}
            className='overflow-x-hidden'>
            <Link
              href={nav.href}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary dark:hover:text-secondary-foreground',
                pathname === nav.href || (index === 0 && pathname === '/')
                  ? 'bg-muted font-medium text-primary dark:bg-primary dark:text-foreground'
                  : 'text-muted-foreground'
              )}>
              {nav.name}
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
