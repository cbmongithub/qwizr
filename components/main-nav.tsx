'use client'

import Link from 'next/link'

import { NavItem } from '@/types/nav'
import { siteConfig } from '@/config/site'

import { Button, Icons } from './ui'

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className='flex gap-6 md:gap-10'>
      <Link
        href='/'
        className='flex items-center space-x-2'>
        <Icons.logo className='h-7 w-7' />
        <span className='inline-block font-bold'>{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className='flex'>
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}>
                  <Button variant='ghost'>{item.title}</Button>
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
