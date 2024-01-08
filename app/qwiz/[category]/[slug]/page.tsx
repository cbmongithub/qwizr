import { formatSlug } from '@/helpers'
import {
  type QwizData,
  type QwizPage,
  type QwizzesCategory,
  type QwizzesPage,
} from '@/types'

import { NotFound } from '@/components/not-found'
import { Qwiz } from '@/components/qwiz'

export async function generateMetadata({ params }: QwizPage) {
  return {
    title: `${formatSlug(params.slug)} Qwiz`,
    description: `How much do you really know about ${formatSlug(
      params.slug
    )}? Take the qwiz today and find out!`,
  }
}
// Come back to this later, figure out why it is not generating
//export async function generateStaticParams({
//  params: { category },
//}: QwizzesPage) {
//  const res = await fetch(
//    `${process.env.NEXT_PUBLIC_BASE_URL}/api/qwizzes/${category}`,
//    { method: 'GET' }
//  )
//
//  if (!res.ok) {
//    throw new Error('Something when wrong while fetching all qwizzes.')
//  }
//
//  const { qwizzes } = (await res.json()) as QwizzesCategory
//
//  return qwizzes.map(qwiz => ({
//    slug: qwiz.slug,
//  }))
//}

export default async function QwizPage({
  params: { category, slug },
}: QwizPage) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/qwizzes/${category}/${slug}`,
    { method: 'GET' }
  )

  if (!res.ok) {
    return (
      <div className='flex flex-col items-center justify-center'>
        <NotFound resource={`${category.toLocaleUpperCase()} qwiz`} />
      </div>
    )
  }

  const { qwizData } = (await res.json()) as QwizData

  return (
    <section className='container relative'>
      <div className='my-[11rem] flex flex-col items-center justify-center mx-auto max-w-[650px]'>
        <Qwiz qwizData={qwizData} />
      </div>
    </section>
  )
}
