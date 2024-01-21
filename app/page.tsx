import Link from 'next/link'
import { cn } from '@/lib'

import { buttonVariants } from '@/components/ui/button'
import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Qwizzes } from '@/components/qwizzes'

export default function LandingPage() {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className='hidden md:block'>
          Qwizzes on web development
        </PageHeaderHeading>
        <PageHeaderHeading className='md:hidden'>
          Web development Qwizzes
        </PageHeaderHeading>
        <PageHeaderDescription>
          Take multiple choice qwizzes and compete on the leaderboard
        </PageHeaderDescription>
        <PageActions>
          <Link
            href='/'
            className={cn(buttonVariants())}>
            Login
          </Link>
          <Link
            href='/'
            className={cn(buttonVariants({ variant: 'outline' }))}>
            Signup
          </Link>
        </PageActions>
      </PageHeader>
      <section>
        <div className='overflow-hidden rounded-[0.5rem] bg-background'>
          <Qwizzes qwizzes={[]} />
        </div>
      </section>
    </>
  )
}
