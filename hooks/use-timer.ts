import { useEffect, useState } from 'react'

export default function useTimer(questionNumber: number) {
  const [seconds, setSeconds] = useState(10)

  useEffect(() => {
    setSeconds(prevSeconds =>
      prevSeconds === 10 ? prevSeconds : prevSeconds + 5
    )

    const interval = setInterval(() => {
      setSeconds(prevSeconds => (prevSeconds <= 0 ? 0 : prevSeconds - 1))
    }, 1000)

    return () => clearInterval(interval)
  }, [questionNumber])

  return { seconds: seconds }
}
