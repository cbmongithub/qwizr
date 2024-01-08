import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib'
import { type MobileLinkProps } from '@/types'

export function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}>
      {children}
    </Link>
  )
}
