import type { Qwizzes } from '@/types'

import { QwizInfoCard } from './qwiz-info-card'

export function Qwizzes({ qwizzes }: Qwizzes) {
  return (
    <div className='relative px-0 overflow-hidden mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
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
  )
}
