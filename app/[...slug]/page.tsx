// import { formatSlug, readQwiz } from '@/helpers'
import { QwizPage } from '@/types'

// import {QwizItem } from '@/types'
// import { NotFound } from '@/components/not-found'
import { Qwiz } from '@/components/qwiz'

export default async function QuizPage({ params }: QwizPage) {
  //const slug = params.slug.join('/')
  //const qwiz = await readQwiz(`./${slug}/qwiz.json`)
  //if (!qwiz) {
  //  return (
  //    <section className='mt-52 flex flex-col items-center justify-center'>
  //      <NotFound resource={`${formatSlug(params.slug[1])} qwiz`} />
  //    </section>
  //  )
  //}
  //const qwizData = JSON.parse(qwiz) as QwizItem

  return (
    <section className='my-32 md:my-20 lg:my-8 flex flex-col items-center justify-center'>
      <Qwiz />
    </section>
  )
}
