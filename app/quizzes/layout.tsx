import { Metadata } from 'next'

import { Hero } from '@/components/hero'
import { QuizTabs } from '@/components/quiz-tabs'

export const metadata: Metadata = {
  title: 'Quizzes',
  description: 'Check out various Qwizzes',
}

interface QuizzesLayoutProps {
  children: React.ReactNode
}

export default function QuizzesLayout({ children }: QuizzesLayoutProps) {
  return (
    <>
      <Hero links={true} />
      <section className='container relative pb-12'>
        <div className='mx-auto max-w-xl px-4 sm:px-6 lg:px-8'>
          <QuizTabs />
          {children}
        </div>
      </section>
    </>
  )
}
