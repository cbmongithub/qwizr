import Link from 'next/link'
import { cn } from '@/lib'

import { Icons } from './icons'
import { buttonVariants } from './ui/button'

export function NotFound({ resource }: { resource: string }) {
  return (
    <div className='container max-w-[550px]'>
      <div className='flex flex-col justify-center items-center text-center'>
        <Icons.not_found className='mb-[-170px]' />
        <p className='text-lg pt-6 font-normal text-muted-foreground'>
          {`The ${resource.toLocaleLowerCase()} you have requested may have been permanently moved,
          or is under construction.`}
        </p>
        <div className='mt-6'>
          <Link
            href='/'
            className={cn(buttonVariants({ variant: 'default' }))}>
            &larr; Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
