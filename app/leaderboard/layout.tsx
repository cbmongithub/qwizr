import { Metadata } from 'next'

import { Hero } from '@/components/hero'

export const metadata: Metadata = {
  title: 'Quizzes',
  description: 'Check out various Qwizzes',
}

interface LeaderboardLayoutProps {
  children: React.ReactNode
}

export default function LeaderboardLayout({
  children,
}: LeaderboardLayoutProps) {
  return (
    <main className='w-full flex flex-col justify-center items-center pb-12 mx-auto md:max-w-6xl max-w-screen px-6'>
      <Hero
        title='Global Leaderboard'
        description='View the top 100 Qwizrs in the world'
        links={false}
      />
      {children}
    </main>
  )
}
