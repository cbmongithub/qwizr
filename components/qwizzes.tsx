import { type Qwizzes } from '@/types'

import { Icons } from './icons'
import { QwizInfoCard } from './qwiz-info-card'
import { QwizzesNav } from './qwizzes-nav'

export function Qwizzes({ qwizzes }: Qwizzes) {
  return (
    <div className='mx-auto mt-6 mb-12'>
      <QwizzesNav />
      {qwizzes.length ? (
        <div className='grid max-w-4xl grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'>
          {qwizzes.map(qwiz => (
            <QwizInfoCard
              key={`qwizInfoCard_qwiz_${qwiz.slug}`}
              category={qwiz.category}
              slug={qwiz.slug}
              title={qwiz.title}
              progress={qwiz.progress}
              description={qwiz.description}
              concepts={qwiz.concepts}
            />
          ))}
        </div>
      ) : (
        <div className='container max-w-[650px] mx-auto mt-24 lg:mt-20'>
          <div className='flex flex-col justify-center items-center'>
            <Icons.no_content />
            <p className='text-lg pt-6 font-normal text-muted-foreground'>
              No qwizzes yet! Stay tuned!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
