import { type QwizPage } from '@/types'

import { Qwiz } from '@/components/qwiz'

export default function QuizPage({ params }: QwizPage) {
  return (
    <section className='my-32 md:my-24 lg:my-12 flex flex-col items-center justify-center'>
      <Qwiz
        slug={params.slug}
        question={''}
        answerOptions={[]}
      />
    </section>
  )
}
