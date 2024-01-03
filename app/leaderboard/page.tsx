import Link from 'next/link'
import { cn } from '@/lib'
import { CalendarIcon } from '@radix-ui/react-icons'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Announcement } from '@/components/announcement'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'

const users = [
  {
    rank: '1',
    name: 'mikecodes',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow my socials! @mikecodes on YT and X!",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '21,565',
    total_time: '11.2 Days',
    country: 'USA',
  },
  {
    rank: '2',
    name: 'ally_xoxo',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Ally! I'm going to get #1 :)",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '20,011',
    total_time: '11.2 Days',
    country: 'USA',
  },
  {
    rank: '3',
    name: 'coderchris',
    img: 'https://github.com/vercel.png',
    description: 'Creator of Quizzr | @coderchris on X',
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '19,948',
    total_time: '11.2 Days',
    country: 'USA',
  },
  {
    rank: '4',
    name: 'neallly',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow me at @mikecodes",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '16,235',
    total_time: '11.2 Days',
    country: 'USA',
  },
  {
    rank: '5',
    name: '123Sesame',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow me at @mikecodes",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '15,157',
    total_time: '11.2 Days',
    country: 'USA',
  },
  {
    rank: '6',
    name: 'CodeNinja',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow me at @mikecodes",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '14,758',
    total_time: '11.2 Days',
    country: 'USA',
  },
  {
    rank: '7',
    name: 'BobDev',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow me at @mikecodes",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '12,645',
    total_time: '11.2 Days',
    country: 'USA',
  },
]

export default function LeaderboardPage() {
  return (
    <>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className='hidden md:block'>
          View the Global Leaderboard
        </PageHeaderHeading>
        <PageHeaderHeading className='md:hidden'>
          Global Leaderboard
        </PageHeaderHeading>
        <PageHeaderDescription>
          View the top 100 Qwizrs in the world
        </PageHeaderDescription>
        <PageActions>
          <Link
            href='/login'
            className={cn(buttonVariants())}>
            Login
          </Link>
          <Link
            href='/sign-up'
            className={cn(buttonVariants({ variant: 'outline' }))}>
            Signup
          </Link>
        </PageActions>
      </PageHeader>
      <section className='container relative'>
        <div className='mx-auto max-w-[750px]'>
          <ScrollArea>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-center'>Rank</TableHead>
                  <TableHead className='text-center'>Username</TableHead>
                  <TableHead className='text-center'>Points</TableHead>
                  <TableHead className='text-center'>Time</TableHead>
                  <TableHead className='text-center'>Country</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.rank}>
                    <TableCell className='text-center'>
                      {`#${user.rank}`}
                    </TableCell>
                    <TableCell className='text-center'>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Link href={user.profile_url}>
                            <Button
                              variant='link'
                              className='text-foreground hover:text-primary'>
                              {user.name}
                            </Button>
                          </Link>
                        </HoverCardTrigger>
                        <HoverCardContent className='w-80'>
                          <div className='flex justify-between space-x-4'>
                            <Avatar>
                              <AvatarImage src={user.img} />
                              <AvatarFallback>VC</AvatarFallback>
                            </Avatar>
                            <div className='space-y-2'>
                              <div className='flex flex-row justify-between'>
                                <h4 className='text-sm font-semibold text-left'>
                                  {user.name}
                                </h4>
                                {user.rank === '1' && (
                                  <Badge variant='default'>🧙 Qwizard</Badge>
                                )}
                              </div>
                              <p className='text-sm text-left'>
                                {user.description}
                              </p>
                              <div className='flex items-center pt-2'>
                                <CalendarIcon className='mr-2 h-4 w-4 opacity-70' />{' '}
                                <span className='text-xs text-muted-foreground'>
                                  Joined {user.created_at}
                                </span>
                              </div>
                            </div>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </TableCell>
                    <TableCell className='text-center'>
                      {user.total_points}
                    </TableCell>
                    <TableCell className='text-center'>
                      {user.total_time}
                    </TableCell>
                    <TableCell className='text-center'>
                      {user.country}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ScrollBar
              orientation='horizontal'
              className='invisible'
            />
          </ScrollArea>
        </div>
      </section>
    </>
  )
}
