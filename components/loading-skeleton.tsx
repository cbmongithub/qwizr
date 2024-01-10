import { Skeleton } from '@/components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <>
      <Skeleton className='mb-3 h-[16px] w-[114.22px] md:h-[18px] md:w-[128.48px]' />
      <Skeleton className='mb-8 h-[24px] w-full md:h-[36px]' />
      <Skeleton className='mb-8 h-2 w-full' />
      <div className='py-2 space-x-2 flex flex-row w-full justify-start items-start'>
        <Skeleton className='h-4 w-4 rounded-full' />
        <Skeleton className='h-4 w-[200px] mr-2' />
      </div>
      <div className='py-2 space-x-2 flex flex-row w-full justify-start items-start'>
        <Skeleton className='h-4 w-4 rounded-full' />
        <Skeleton className='h-4 w-[200px] mr-2' />
      </div>
      <div className='py-2 space-x-2 flex flex-row w-full justify-start items-start'>
        <Skeleton className='h-4 w-4 rounded-full' />
        <Skeleton className='h-4 w-[200px] mr-2' />
      </div>
      <div className='py-2 space-x-2 flex flex-row w-full justify-start items-start'>
        <Skeleton className='h-4 w-4 rounded-full' />
        <Skeleton className='h-4 w-[200px] mr-2' />
      </div>
      <div className='flex w-full items-center justify-between mt-8'>
        <Skeleton className='mb-8 h-8 w-[77.59px]' />
        <Skeleton className='mb-8 h-8 w-[77.59px]' />
      </div>
    </>
  )
}
