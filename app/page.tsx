'use client'

import { Hero } from '@/components/hero'
import { QuizTabs } from '@/components/quiz-tabs'
import { Quizzes } from '@/components/quizzes'

export default function LandingPage() {
  return (
    <>
      <Hero links={true} />
      <section className='w-full flex flex-col justify-center items-center pb-12 mx-auto md:max-w-6xl max-w-screen px-6'>
        <QuizTabs />
        <Quizzes />
      </section>
    </>
  )
}
