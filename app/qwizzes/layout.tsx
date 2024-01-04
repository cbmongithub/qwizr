import { Metadata } from 'next'
import Link from 'next/link'
import { cn } from '@/lib'
import { type Layout } from '@/types'

import { buttonVariants } from '@/components/ui/button'
import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { QwizzesNav } from '@/components/qwizzes-nav'

export const metadata: Metadata = {
  title: 'Qwizzes',
  description:
    'Qwizzes on modern web development languages, frameworks, and more',
}

export default function QwizzesLayout({ children }: Layout) {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className='hidden md:block'>
          Browse through all Qwizzes
        </PageHeaderHeading>
        <PageHeaderHeading className='md:hidden'>
          Browse all Qwizzes
        </PageHeaderHeading>
        <PageHeaderDescription>
          Qwizzes on modern web development languages, frameworks, and more
        </PageHeaderDescription>
        <PageActions>
          <Link
            href='/login'
            className={cn(buttonVariants())}>
            Login
          </Link>
          <Link
            href='/sign-up'
            className={cn(buttonVariants({ variant: 'outline' }))}>
            Signup
          </Link>
        </PageActions>
      </PageHeader>
      <section>
        <div className='overflow-hidden rounded-[0.5rem] bg-background'>
          {children}
        </div>
      </section>
    </>
  )
}
