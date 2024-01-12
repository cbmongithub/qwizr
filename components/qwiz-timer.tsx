import { useEffect, useState } from 'react'
import { type QwizTimer } from '@/types'

export function QwizTimer({ questionNumber }: QwizTimer) {
  const [seconds, setSeconds] = useState(0)
  const [degrees, setDegrees] = useState(0)
  //const [pie, setPie] = useState({
  //  backgroundImage:
  //    'linear-gradient(90deg, transparent 50%, white 50%),linear-gradient(90deg, white 50%, transparent 50%)',
  //})

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
