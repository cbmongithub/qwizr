import frameWorkQuizzes from '@/constants/quizzes/frameworks'

import { Hero } from '@/components/hero'
import { Quizzes } from '@/components/quizzes'

export default function FrameworksPage() {
  return (
    <>
      <Hero
        links={false}
        title='Frameworks and Libraries'
        description='Put your framework knowledge to the test with our multiple choice timed qwizzes'
      />
      <Quizzes quizData={frameWorkQuizzes} />
    </>
  )
}
