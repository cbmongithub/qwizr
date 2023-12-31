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
import { QwizNav } from '@/components/qwiz-nav'
import { Qwizzes } from '@/components/qwizzes'

export default function LandingPage() {
  return (
    <div className='container relative'>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className='hidden md:block'>
          Take Qwizzes on web development
        </PageHeaderHeading>
        <PageHeaderHeading className='md:hidden'>
          Web development Qwizzes
        </PageHeaderHeading>
        <PageHeaderDescription>
          How well do you know modern web technologies? Put your skills to the
          test with our timed, multiple choice qwizzes and earn your spot on the
          leaderboard.
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
          <Qwizzes qwizzes={frameWorksQwizzes} />
        </div>
      </section>
    </div>
  )
}
