import { useEffect, useState } from 'react'

export default function useTimer(questionNumber: number) {
  const [seconds, setSeconds] = useState(5)

  useEffect(() => {
    setSeconds(prevSeconds =>
      prevSeconds === 5 ? prevSeconds : prevSeconds + 5
    )

    const interval = setInterval(() => {
      setSeconds(prevSeconds => (prevSeconds <= 0 ? 0 : prevSeconds - 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [questionNumber])

  return { seconds }
}
