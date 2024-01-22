import { type QwizzesCategoryProps, type QwizzesPageProps } from '@/types'

import { Qwizzes } from '@/components/qwizzes'

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
