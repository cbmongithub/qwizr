import { type QwizPage } from '@/types'

import { Qwiz } from '@/components/qwiz'

export default function QuizPage({ params }: QwizPage) {
  return (
    <section>
      <Qwiz
        slug={params.slug}
        question={''}
        answerOptions={[]}
      />
    </section>
  )
}
