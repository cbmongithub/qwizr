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
      <Hero
        title='Browse through all quizzes'
        description='Test your skills with timed questions. Each correct answer totals 1 point'
        links={true}
      />
      <section className='w-full flex flex-col justify-center items-center pb-12 mx-auto md:max-w-6xl max-w-screen px-6'>
        <QuizTabs />
        {children}
      </section>
    </>
  )
}
