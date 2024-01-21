import { formatSlug } from '@/helpers'
import { type QwizzesCategoryProps, type QwizzesPageProps } from '@/types'

import { Qwizzes } from '@/components/qwizzes'

export async function generateMetadata({ params }: QwizzesPageProps) {
  return {
    title: `${formatSlug(params.category)}`,
    description: `Browse through our ${formatSlug(
      params.category
    )} qwizzes and challenge your skillset.`,
  }
}
// Come back to this later, figure out why it is not generating
//export async function generateStaticParams() {
//  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/qwizzes`, {
//    method: 'GET',
//  })
//
//  if (!res.ok) {
//    throw new Error('Something when wrong while fetching all qwizzes.')
//  }
//
//  const { qwizzes } = (await res.json()) as QwizzesCategory
//
//  return qwizzes.map(qwiz => ({
//    category: qwiz.slug,
//  }))
//}

export default async function QwizzesPage({
  params: { category },
}: QwizzesPageProps) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/qwizzes/${category}`,
    {
      method: 'GET',
    }
  )

  if (!res.ok) {
    return <Qwizzes qwizzes={[]} />
  }

  const { qwizzes } = (await res.json()) as QwizzesCategoryProps

  return <Qwizzes qwizzes={qwizzes} />
}
