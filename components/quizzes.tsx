'use client'

import { QuizCard } from './quiz-card'

export function Quizzes() {
  return (
    <div className='mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
      <QuizCard />
      <QuizCard />
      <QuizCard />
      <QuizCard />
      <QuizCard />
      <QuizCard />
    </div>
  )
}
