import { formatSlug } from '@/helpers'
import { type QwizDataProps, type QwizPageProps } from '@/types'

import { NotFound } from '@/components/not-found'
import { Qwiz } from '@/components/qwiz'

export default async function QwizPage({
  params: { category, slug },
}: QwizPageProps) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/qwizzes/${category}/${slug}`,
    { method: 'GET' }
  )

  if (!res.ok) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <NotFound resource={`${formatSlug(category)} qwiz`} />
      </div>
    )
  }

  const { qwizData } = (await res.json()) as QwizDataProps

  return (
    <section className='container relative'>
      <div className='my-[11rem] flex flex-col items-center justify-center mx-auto max-w-[600px]'>
        <Qwiz qwizData={qwizData} />
      </div>
    </section>
  )
}
