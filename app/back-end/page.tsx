import { frameWorksQuizzes } from '@/quizzes'

import { Hero } from '@/components/hero'
import { Quizzes } from '@/components/quizzes'

export default function BackEndPage() {
  return (
    <>
      <Hero
        links={false}
        title='Back end web development'
        description='Some say that developing the back end is the toughest. Will you score the highest?'
      />
      <Quizzes quizzes={frameWorksQuizzes} />
    </>
  )
}
