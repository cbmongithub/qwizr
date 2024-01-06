import { QwizPage } from '@/types'

import { NotFound } from '@/components/not-found'
import { Qwiz } from '@/components/qwiz'

export default async function QuizPage({ params }: QwizPage) {
  const slug = params.slug.join('/')
  const ENDPOINT = `${process.env.BASE_URL}/api/${slug}`
  const res = await fetch(ENDPOINT, { method: 'GET' })

  if (!res.ok) {
    return (
      <div className='mt-52 flex flex-col items-center justify-center'>
        <NotFound resource='Data' />
      </div>
    )
  }

  const { qwizData } = await res.json()

  return (
    <section className='container relative'>
      <div className='my-[11rem] flex flex-col items-center justify-center mx-auto max-w-[650px]'>
        <Qwiz qwizData={qwizData} />
      </div>
    </section>
  )
}
