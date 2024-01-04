import type { Qwizzes } from '@/types'

import { QwizInfoCard } from './qwiz-info-card'
import { QwizzesNav } from './qwizzes-nav'

export function Qwizzes({ qwizzes }: Qwizzes) {
  return (
    <div className='mx-auto mt-6 mb-12'>
      <QwizzesNav />
      <div className='grid max-w-4xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
        {qwizzes
          ? qwizzes.map(qwiz => (
              <QwizInfoCard
                key={`qwizInfoCard_qwiz_${qwiz.slug}`}
                slug={qwiz.slug}
                title={qwiz.title}
                duration={qwiz.duration}
                description={qwiz.description}
                concepts={qwiz.concepts}
              />
            ))
          : 'No qwizzes yet... stay tuned!'}
      </div>
    </div>
  )
}
