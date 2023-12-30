import { frameWorksQuizzes } from '@/quizzes'

import { Hero } from '@/components/hero'
import { Quizzes } from '@/components/quizzes'

export default function ApisPage() {
  return (
    <>
      <Hero
        links={false}
        title="API's, data fetching and more"
        description="How well do you know api's? Find out with our series of qwizzes!"
      />
      <Quizzes quizzes={frameWorksQuizzes} />
    </>
  )
}
