'use client'

import type { QuizDataProps } from '@/types/quizzes'

import { QuizCard } from './quiz-card'

export function Quizzes({ data }: QuizDataProps) {
  return (
    <div className='mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
      {data
        ? data.map((quiz, index) => (
            <QuizCard
              key={`quizCard_quiz_${index}`}
              id={quiz.id}
              title={quiz.title}
              duration={quiz.duration}
              description={quiz.description}
              concepts={quiz.concepts}
            />
          ))
        : 'No quizzes yet... stay tuned!'}
    </div>
  )
}
