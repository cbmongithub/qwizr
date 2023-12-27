'use client'

import { Hero } from '@/components/hero'
import { QuizTabs } from '@/components/quiz-tabs'
import { Quizzes } from '@/components/quizzes'

export default function LandingPage() {
  return (
    <>
      <Hero links={true} />
      <section className='container relative pb-12'>
        <div className='mx-auto max-w-xl px-4 sm:px-6 lg:px-8'>
          <QuizTabs />
          <Quizzes />
        </div>
      </section>
    </>
  )
}
