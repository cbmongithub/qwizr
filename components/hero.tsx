'use client'

import Link from 'next/link'

import { Announcement } from '.'
import {
  Button,
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from './ui'

interface HeroProps {
  title?: string
  description?: string
  links?: boolean
}

export function Hero({ title, description, links }: HeroProps) {
  return (
    <PageHeader className='mb-8'>
      <Announcement />
      <PageHeaderHeading>
        {(title ||= 'Quizzes for web development')}
      </PageHeaderHeading>
      <PageHeaderDescription>
        {
          (description ||=
            'Compete for the top spot on the leaderboard and showcase your expertise! Will you become the next quiz master?')
        }
      </PageHeaderDescription>
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
