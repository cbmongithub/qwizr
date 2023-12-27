'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib'

import { ScrollArea, ScrollBar } from './ui'

const tabs = [
  {
    name: 'Languages',
    href: '/quizzes/languages',
  },
  {
    name: 'Frameworks',
    href: '/quizzes/frameworks',
  },
  {
    name: 'Front-end',
    href: '/quizzes/front-end',
  },
  {
    name: 'Back-end',
    href: '/quizzes/back-end',
  },
  {
    name: "API's",
    href: '/quizzes/apis',
  },
  {
    name: 'Testing',
    href: '/quizzes/testing',
  },
]

interface QuizTabsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function QuizTabs({ className, ...props }: QuizTabsProps) {
  const pathname = usePathname()

  return (
    <ScrollArea className='w-full whitespace-nowrap text-primary'>
      <div
        className={cn('flex w-max space-x-4 pr-4', className)}
        {...props}>
        {tabs.map((tab, index) => (
          <div
            key={`quiz_tab_${index}`}
            className='overflow-x-hidden'>
            <Link
              href={tab.href}
              className={cn(
                'flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary dark:hover:text-secondary-foreground',
                pathname === tab.href || (index === 0 && pathname === '/')
                  ? 'bg-muted font-medium text-primary dark:bg-primary dark:text-foreground'
                  : 'text-muted-foreground'
              )}>
              {tab.name}
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
