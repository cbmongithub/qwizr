import { useEffect, useRef } from 'react'

export default function useScroll(pathname: string) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (pathname === '/qwizzes/front-end') {
        ref.current.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      } else if (pathname === '/qwizzes/back-end') {
        ref.current.scrollTo({
          top: 0,
          left: 139.1,
          behavior: 'smooth',
        })
      } else {
        return
      }
    }
  }, [pathname])

  return ref
}
