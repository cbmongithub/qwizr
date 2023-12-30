import { frameWorksQuizzes } from '@/quizzes'

import { Hero } from '@/components/hero'
import { Quizzes } from '@/components/quizzes'

export default function LandingPage() {
  return (
    <>
      <Hero
        title='Quizzes for web development'
        description='How well do you know modern web technologies? Put your skills to the test with our timed, multiple choice qwizzes and earn your spot on the leaderboard.'
        links={true}
      />
      <Quizzes quizzes={frameWorksQuizzes} />
    </>
  )
}
