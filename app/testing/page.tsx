import { Hero, QuizTabs, Quizzes } from '@/components'

export default function TestingPage() {
  return (
    <>
      <Hero links />
      <div className='container relative pb-12'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <QuizTabs />
          <Quizzes />
        </div>
      </div>
    </>
  )
}
