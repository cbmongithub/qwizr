import Link from 'next/link'
import { cn } from '@/lib'
import { frameWorksQuizzes } from '@/quizzes'

import { buttonVariants } from '@/components/ui/button'
import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { QuizNav } from '@/components/quiz-nav'
import { Quizzes } from '@/components/quizzes'

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
      <QuizNav />
      <section>
        <div className='overflow-hidden rounded-[0.5rem] bg-background'>
          <Quizzes quizzes={frameWorksQuizzes} />
        </div>
      </section>
    </div>
  )
}
