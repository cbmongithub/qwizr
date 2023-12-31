import { frameWorksQuizzes } from '@/quizzes'

import { Quizzes } from '@/components/quizzes'

export default function ApisPage() {
  return <Quizzes quizzes={frameWorksQuizzes} />
}
