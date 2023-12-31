import { frameWorksQuizzes } from '@/quizzes'

import { Quizzes } from '@/components/quizzes'

export default function BackEndPage() {
  return <Quizzes quizzes={frameWorksQuizzes} />
}
