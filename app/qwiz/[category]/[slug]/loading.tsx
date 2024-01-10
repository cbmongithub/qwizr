import { LoadingSkeleton } from '@/components/loading-skeleton'

export default function Loading() {
  return (
    <div className='container relative'>
      <div className='my-[11rem] flex flex-col items-center justify-center mx-auto max-w-[600px]'>
        <LoadingSkeleton />
      </div>
    </div>
  )
}
