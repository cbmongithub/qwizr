'use client'

import frameWorkQuizzes from '@/constants/quizzes/frameworks'

import { Hero } from '@/components/hero'
import { QuizTabs } from '@/components/quiz-tabs'
import { Quizzes } from '@/components/quizzes'

export default function LandingPage() {
  return (
    <>
      <Hero
        links={true}
        description='Test your skills with timed questions. Each correct answer totals 1 point'
      />
      <section className='w-full flex flex-col justify-center items-center pb-12 mx-auto md:max-w-6xl px-6'>
        <QuizTabs />
        <Quizzes data={frameWorkQuizzes} />
      </section>
    </>
  )
}
