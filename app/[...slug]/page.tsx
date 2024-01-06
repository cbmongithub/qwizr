import { formatSlug } from '@/helpers'
import { QwizPage } from '@/types'

import { NotFound } from '@/components/not-found'
import { Qwiz } from '@/components/qwiz'

export default async function QuizPage({ params }: QwizPage) {
  const slug = params.slug.join('/')
  const ENDPOINT = `${process.env.BASE_URL}/api/${slug}`
  const res = await fetch(ENDPOINT, { method: 'GET' })

  if (!res.ok) {
    return (
      <section className='mt-52 flex flex-col items-center justify-center'>
        <NotFound resource={`${formatSlug(params.slug[1])} qwiz`} />
      </section>
    )
  }

  const qwizData = await res.json()

  return (
    <section className='my-32 md:my-20 lg:my-8 flex flex-col items-center justify-center'>
      <Qwiz qwizData={qwizData} />
    </section>
  )
}
