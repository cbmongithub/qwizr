import frameWorkQuizzes from '@/constants/quizzes/frameworks'

import { Hero } from '@/components/hero'
import { Quizzes } from '@/components/quizzes'

export default function TestingPage() {
  return (
    <>
      <Hero
        links={false}
        title='Writing and understanding tests'
        description='Testing is crucial for scalable web apps. How well do you know tests?'
      />
      <Quizzes quizData={frameWorkQuizzes} />
    </>
  )
}
