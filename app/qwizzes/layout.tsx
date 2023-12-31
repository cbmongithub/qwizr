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
import { QwizNav } from '@/components/qwiz-nav'

export const metadata: Metadata = {
  title: 'Examples',
  description: 'Check out some examples app built using the components.',
}

export default function QwizzesLayout({ children }: Layout) {
  return (
    <>
      <div className='container relative'>
        <PageHeader>
          <Announcement />
          <PageHeaderHeading className='hidden md:block'>
            Browse through all Qwizzes
          </PageHeaderHeading>
          <PageHeaderHeading className='md:hidden'>
            Browse all Qwizzes
          </PageHeaderHeading>
          <PageHeaderDescription>
            Find a qwiz for web development languages, libraries, front and
            back-end development and more
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
        <QwizNav />
        <section>
          <div className='overflow-hidden rounded-[0.5rem] bg-background'>
            {children}
          </div>
        </section>
      </div>
    </>
  )
}
