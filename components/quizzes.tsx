'use client'

import type { QuizDataProps } from '@/types/quizzes'

import { QuizCard } from './quiz-card'
import { QuizNav } from './quiz-nav'

export function Quizzes({ quizData }: QuizDataProps) {
  return (
    <section className='container relative px-0'>
      <QuizNav />
      <div className='mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
        {quizData
          ? quizData.map(quiz => (
              <QuizCard
                key={`quizCard_quiz_${quiz.slug}`}
                slug={quiz.slug}
                title={quiz.title}
                duration={quiz.duration}
                description={quiz.description}
                concepts={quiz.concepts}
              />
            ))
          : 'No quizzes yet... stay tuned!'}
      </div>
    </section>
  )
}
