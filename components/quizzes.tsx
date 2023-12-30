'use client'

import type { Quizzes } from '@/types'

import { QuizCard } from './quiz-card'
import { QuizNav } from './quiz-nav'

export function Quizzes({ quizzes }: Quizzes) {
  return (
    <section className='container relative px-0'>
      <QuizNav />
      <div className='overflow-hidden mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
        {quizzes
          ? quizzes.map(quiz => (
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
