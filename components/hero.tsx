'use client'

import Link from 'next/link'
import { type Hero } from '@/types'

import { Announcement } from './announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from './page-header'
import { Button } from './ui/button'

export function Hero({ title, description, links }: Hero) {
  return (
    <PageHeader>
      <Announcement />
      <PageHeaderHeading>{title}</PageHeaderHeading>
      <PageHeaderDescription>{description}</PageHeaderDescription>
      {links && (
        <PageActions>
          <Link href='/login'>
            <Button variant='default'>Login</Button>
          </Link>
          <Link href='/sign-up'>
            <Button variant='outline'>Signup</Button>
          </Link>
        </PageActions>
      )}
    </PageHeader>
  )
}
