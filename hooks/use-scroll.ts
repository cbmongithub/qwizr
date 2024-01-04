import { useEffect, useRef } from 'react'

export default function useScroll(pathname: string) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const { top, left } = ref.current.getBoundingClientRect()
      ref.current.scrollTo({
        top: top,
        left: left,
        behavior: 'smooth',
      })
    }
  }, [pathname])

  return ref
}
