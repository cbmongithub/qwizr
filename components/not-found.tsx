import Link from 'next/link'
import { cn } from '@/lib'

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'

import { buttonVariants } from './ui/button'
import { Card } from './ui/card'

export function NotFound({ resource }: { resource: string }) {
  return (
    <Card className='px-4 max-w-[750px]'>
      <PageHeader>
        <PageHeaderHeading>{`${resource} not found`}</PageHeaderHeading>
        <PageHeaderDescription>
          {`The ${resource} you have requested may have been permanently moved,
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
    </Card>
  )
}
