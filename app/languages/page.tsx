import { frameWorksQuizzes } from '@/quizzes'

import { Hero } from '@/components/hero'
import { Quizzes } from '@/components/quizzes'

export default function LanguagesPage() {
  return (
    <>
      <Hero
        links={false}
        title='The webs most popular languages'
        description='How well do you know your languages? Time to put your skills to the test.'
      />
      <Quizzes quizzes={frameWorksQuizzes} />
    </>
  )
}
