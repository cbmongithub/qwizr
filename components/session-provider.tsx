'use client'

import * as React from 'react'
import {
  SessionProvider as NextSessionProvider,
  type SessionProviderProps,
} from 'next-auth/react'

export default function SessionProvider({
  children,
  session,
  ...props
}: SessionProviderProps) {
  return (
    <NextSessionProvider
      session={session}
      {...props}>
      {children}
    </NextSessionProvider>
  )
}
