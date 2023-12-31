import { frameWorksQuizzes } from '@/quizzes'

import { Quizzes } from '@/components/quizzes'

export default function FrontEndPage() {
  return <Quizzes quizzes={frameWorksQuizzes} />
}
