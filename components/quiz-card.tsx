'use client'

import Link from 'next/link'
import { cn } from '@/lib'
import type { QuizCard } from '@/types'
import { Clock5Icon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Badge } from './ui/badge'
import { buttonVariants } from './ui/button'

export function QuizCard({
  slug,
  title,
  duration,
  description,
  concepts,
}: QuizCard) {
  return (
    <Card>
      <CardHeader>
        <div className='flex flex-row justify-between pb-3'>
          <CardTitle>{title}</CardTitle>
          <Badge variant='default'>
            <Clock5Icon className='h-3 w-3' />
            &nbsp;
            <p className='font-normal text-[0.75rem]'>{duration} hrs</p>
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'>
          <span className='flex h-2 w-2 translate-y-1 rounded-full bg-primary' />
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Quiz Material</p>
            <p className='text-sm text-muted-foreground'>{concepts}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          className={cn(buttonVariants({ variant: 'default', width: 'full' }))}
          href={`/quiz/${slug}`}>
          Launch Quiz &rarr;
        </Link>
      </CardFooter>
    </Card>
  )
}
