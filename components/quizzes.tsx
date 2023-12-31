import type { Quizzes } from '@/types'

import { QuizCard } from './quiz-card'

export function Quizzes({ quizzes }: Quizzes) {
  return (
    <div className='relative px-0 overflow-hidden mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
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
  )
}
