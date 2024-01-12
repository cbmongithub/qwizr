import { Skeleton } from '@/components/ui/skeleton'

export function LoadingSkeleton() {
  return (
    <>
      <div className='flex w-full justify-between items-center'>
        <Skeleton className='mb-3 h-[16px] w-[114.21px] md:h-[18px] md:w-[128.48px]' />
        <Skeleton className='mb-3 h-[16px] w-[18.37px] md:h-[18px] md:w-[20.67px]' />
      </div>
      <Skeleton className='mb-6 h-[24px] w-full md:h-[36px]' />
      <Skeleton className='mb-6 h-2 w-full' />
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
