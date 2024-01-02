import Link from 'next/link'
import { cn } from '@/lib'
import { type Qwiz } from '@/types'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { buttonVariants } from './ui/button'
import { Progress } from './ui/progress'

export function Qwiz({ question, answerOptions }: Qwiz) {
  return (
    <div className='py-8 md:py-12 lg:py-24'>
      <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
        Question 1 of 10
      </p>
      <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-8'>
        What type of library is React?
      </h1>
      <Progress value={10} />
      <RadioGroup
        className='my-12'
        name='qwiz'>
        <div className='flex items-center space-x-2 text-card-foreground py-2'>
          <RadioGroupItem
            value='Front-End'
            id='1'
          />
          <Label
            className='text-sm md:text-lg'
            htmlFor='1'>
            Front-End
          </Label>
        </div>
        <div className='flex items-center space-x-2 text-card-foreground py-2'>
          <RadioGroupItem
            value='Back-End'
            id='2'
          />
          <Label
            className='text-sm md:text-lg'
            htmlFor='2'>
            Back-End
          </Label>
        </div>
        <div className='flex items-center space-x-2 text-card-foreground py-2'>
          <RadioGroupItem
            value='Full-Stack'
            id='3'
          />
          <Label
            className='text-sm md:text-lg'
            htmlFor='3'>
            Full-Stack
          </Label>
        </div>
        <div className='flex items-center space-x-2 py-2'>
          <RadioGroupItem
            value='None of the above'
            id='4'
          />
          <Label
            className='text-sm md:text-lg'
            htmlFor='4'>
            None of the above
          </Label>
        </div>
      </RadioGroup>
      <div className='flex w-full items-center justify-between'>
        <Link
          className={cn(buttonVariants({ variant: 'secondary' }))}
          href={`/`}>
          &larr; Back
        </Link>
        <Link
          className={cn(buttonVariants({ variant: 'default' }))}
          href={`/`}>
          Next &rarr;
        </Link>
      </div>
    </div>
  )
}
