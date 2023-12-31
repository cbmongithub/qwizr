import Link from 'next/link'
import { cn } from '@/lib'
import { type Qwiz } from '@/types'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { buttonVariants } from './ui/button'
import { Progress } from './ui/progress'

export function Qwiz({ slug, question, answerOptions }: Qwiz) {
  return (
    <div className='flex mx-auto max-w-xl flex-col items-center justify-center py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-10'>
      <div>
        <p className='max-w-xl text-center text-md text-muted-foreground sm:text-lg'>
          Question 1 of 10
        </p>
        <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] mb-8'>
          What type of library is React?
        </h1>
        <Progress value={10} />
        <RadioGroup className='my-12'>
          <div className='flex items-center space-x-2 text-card-foreground py-2 px-3'>
            <RadioGroupItem value='Front-End' />
            <Label
              className='text-sm md:text-lg'
              htmlFor='Front-End'>
              Front-End
            </Label>
          </div>
          <div className='flex items-center space-x-2 text-card-foreground py-2 px-3'>
            <RadioGroupItem value='Back-End' />
            <Label
              className='text-sm md:text-lg'
              htmlFor='Back-End'>
              Back-End
            </Label>
          </div>
          <div className='flex items-center space-x-2 text-card-foreground py-2 px-3'>
            <RadioGroupItem value='Full-Stack' />
            <Label
              className='text-sm md:text-lg'
              htmlFor='Full-Stack'>
              Full-Stack
            </Label>
          </div>
          <div className='flex items-center space-x-2 py-2 px-3'>
            <RadioGroupItem value='None of the above' />
            <Label
              className='text-sm md:text-lg'
              htmlFor='None of the above'>
              None of the above
            </Label>
          </div>
        </RadioGroup>
        <div className='flex w-full items-center justify-between'>
          <Link
            className={cn(buttonVariants({ variant: 'secondary' }))}
            href={`/qwiz/${slug}`}>
            &larr; Back
          </Link>
          <Link
            className={cn(buttonVariants({ variant: 'default' }))}
            href={`/qwiz/`}>
            Next &rarr;
          </Link>
        </div>
      </div>
    </div>
  )
}
