import { useEffect, useRef } from 'react'

export default function useScroll() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      console.log(
        'Scroll Height:',
        ref.current.scrollHeight,
        'Scroll Left:',
        ref.current.scrollLeft,
        'Scroll Width:',
        ref.current.scrollWidth
      )
    }
  })
  return ref
}
