import Link from 'next/link'
import { cn } from '@/lib'

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'

import { buttonVariants } from './ui/button'

export function NotFound({ resource }: { resource: string }) {
  return (
    <div className='max-w-[650px] sm:max-w-none'>
      <PageHeader>
        <PageHeaderHeading>{`${resource} not found`}</PageHeaderHeading>
        <PageHeaderDescription>
          {`The ${resource.toLocaleLowerCase()} you have requested may have been permanently moved,
          or is under construction.`}
        </PageHeaderDescription>
        <PageActions>
          <Link
            href='/'
            className={cn(buttonVariants({ variant: 'default' }))}>
            &larr; Go Home
          </Link>
        </PageActions>
      </PageHeader>
    </div>
  )
}
