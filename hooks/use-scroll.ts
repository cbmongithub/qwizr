import { useEffect, useRef } from 'react'

export default function useScroll() {
  const ref = useRef<HTMLDivElement>(null)
  console.log(ref)

  useEffect(() => {
    console.log(ref)
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      })
    }
  })

  return ref
}
