import Link from 'next/link'
import { Hero } from '@/components'
import { CalendarIcon } from '@radix-ui/react-icons'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui'

const users = [
  {
    rank: '#1 🥇',
    name: 'mikecodes',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow my socials! @mikecodes on YT and X!",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '21,565',
    total_time: '2D, 22H, 23M',
    country: 'USA',
  },
  {
    rank: '#2 🥈',
    name: 'ally_xoxo',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Ally! I'm going to get #1 :)",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '20,011',
    total_time: '2D, 22H, 23M',
    country: 'USA',
  },
  {
    rank: '#3 🥉',
    name: 'coderchris',
    img: 'https://github.com/vercel.png',
    description: 'Creator of Quizzr | @coderchris on X',
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '19,948',
    total_time: '2D, 22H, 23M',
    country: 'USA',
  },
  {
    rank: '#4',
    name: 'neallly',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow me at @mikecodes",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '16,235',
    total_time: '2D, 22H, 23M',
    country: 'USA',
  },
  {
    rank: '#5',
    name: '123Sesame',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow me at @mikecodes",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '15,157',
    total_time: '2D, 22H, 23M',
    country: 'USA',
  },
  {
    rank: '#6',
    name: 'CodeNinja',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow me at @mikecodes",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '14,758',
    total_time: '2D, 22H, 23M',
    country: 'USA',
  },
  {
    rank: '#7',
    name: 'BobDev',
    img: 'https://github.com/vercel.png',
    description: "Hey i'm Mike! Follow me at @mikecodes",
    profile_url: '/profiles/1234',
    created_at: 'December 2023',
    total_points: '12,645',
    total_time: '2D, 22H, 23M',
    country: 'USA',
  },
]

export default function LeaderBoardPage() {
  return (
    <div className='container relative max-w-[850px] mb-12'>
      <Hero
        title='Global Leaderboard'
        description='View the top 100 qwizards 🧙 in the world'
        links={false}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Rank</TableHead>
            <TableHead className='w-[100px]'>Username</TableHead>
            <TableHead className='w-[100px]'>Points</TableHead>
            <TableHead className='w-[100px]'>Total Time</TableHead>
            <TableHead className='text-right w-[20px]'>Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.rank}>
              <TableCell className='font-medium'>{user.rank}</TableCell>
              <TableCell>
                <HoverCard>
                  <HoverCardTrigger
                    className='p-0'
                    asChild>
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
                      <div className='space-y-1'>
                        <h4 className='text-sm font-semibold'>{user.name}</h4>
                        <p className='text-sm'>{user.description}</p>
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
              <TableCell>{user.total_points}</TableCell>
              <TableCell>{user.total_time}</TableCell>
              <TableCell className='text-right'>{user.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
