import { formatSlug, readQwiz } from '@/helpers'
import { QwizItem, QwizPage } from '@/types'

import { NotFound } from '@/components/not-found'
import { Qwiz } from '@/components/qwiz'

export default async function QuizPage({ params }: QwizPage) {
  const slug = params.slug.join('/')
  const qwiz = await readQwiz(`./${slug}/qwiz.json`)
  if (!qwiz) {
    return (
      <section className='mt-52 flex flex-col items-center justify-center'>
        <NotFound resource={`${formatSlug(params.slug[1])} qwiz`} />
      </section>
    )
  }
  const qwizData = (await JSON.parse(qwiz)) as QwizItem
  return (
    <section className='my-32 md:my-24 lg:my-12 flex flex-col items-center justify-center'>
      <Qwiz
        question={''}
        answerOptions={[]}
      />
    </section>
  )
}
