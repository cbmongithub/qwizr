import { useEffect, useState } from 'react'
import { type QwizTimerProps } from '@/types'

export function QwizTimer({ questionNumber }: QwizTimerProps) {
  const [seconds, setSeconds] = useState(0)
  const [degrees, setDegrees] = useState(0)

  useEffect(() => {
    setSeconds(prevSeconds => prevSeconds + 5)

    const interval = setInterval(() => {
      setSeconds(prevSeconds => (prevSeconds <= 0 ? 0 : prevSeconds - 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [questionNumber])

  return (
    <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
      {seconds}s
    </p>
  )
}
