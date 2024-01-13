import { QwizRecapProps } from '@/types'

import { Button } from './ui/button'

export function QwizRecap({
  score,
  length,
  handleExit,
  handleNewQwiz,
}: QwizRecapProps) {
  return (
    <div className='flex flex-col justify-center fixed inset-0 z-50 transition-all duration-500 items-center backdrop-blur supports-[backdrop-filter]:bg-background/10'>
      <div className='py-8 md:py-12 lg:py-24 text-center'>
        <h1 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-3'>
          {score === 100 ? 'Perfect score!' : 'Quiz Completed!'}
        </h1>
        <p className='text-lg font-normal text-muted-foreground'>
          You scored {score} out of {length} points!
        </p>
        <div className='mt-6 flex w-full items-center justify-between'>
          <Button
            variant='outline'
            onClick={e => handleExit(e)}>
            <span className='sr-only'>Exit</span>
            &larr; Exit
          </Button>
          <Button
            variant='default'
            onClick={e => handleNewQwiz(e)}>
            <span className='sr-only'>New Qwiz</span>
            New Qwiz &rarr;
          </Button>
        </div>
      </div>
    </div>
  )
}
