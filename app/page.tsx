import Link from 'next/link'
import { cn } from '@/lib'
import { frameWorksQwizzes } from '@/qwizzes'

import { buttonVariants } from '@/components/ui/button'
import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Qwizzes } from '@/components/qwizzes'
import { QwizzesNav } from '@/components/qwizzes-nav'

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
      <QwizzesNav />
      <section>
        <div className='overflow-hidden rounded-[0.5rem] bg-background'>
          <Qwizzes qwizzes={frameWorksQwizzes} />
        </div>
      </section>
    </>
  )
}
