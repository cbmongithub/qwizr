import { formatSlug } from '@/helpers'
import { type QwizPage } from '@/types'

import { Progress } from '@/components/ui/progress'
import { Qwiz } from '@/components/qwiz'

export default function QuizPage({ params }: QwizPage) {
  return (
    <>
      <section className='container relative'>
        <Progress value={33} />
        <p>This is the Quiz page for {formatSlug(params.slug)}</p>
        <Qwiz />
      </section>
    </>
  )
}
