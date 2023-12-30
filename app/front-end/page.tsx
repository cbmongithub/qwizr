import { frameWorksQuizzes } from '@/quizzes'

import { Hero } from '@/components/hero'
import { Quizzes } from '@/components/quizzes'

export default function FrontEndPage() {
  return (
    <>
      <Hero
        links={false}
        title='Front end web development'
        description='You think you know front end web technologies? See if you can score a perfect 100!'
      />
      <Quizzes quizzes={frameWorksQuizzes} />
    </>
  )
}
