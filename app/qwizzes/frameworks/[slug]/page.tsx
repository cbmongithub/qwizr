import { readQuiz } from '@/helpers'
import { QwizItem, QwizPage } from '@/types'

import { Qwiz } from '@/components/qwiz'

export default async function QuizPage({ params }: QwizPage) {
  const quiz = await readQuiz(`./qwizzes/frameworks/${params.slug}`)
  if (!quiz) {
    return (
      <section className='my-32 md:my-24 lg:my-12 flex flex-col items-center justify-center'>
        <h1>Error while loading qwiz</h1>
        {/* Replace with a styled error component */}
      </section>
    )
  }
  const quizData = JSON.parse(quiz) as QwizItem
  console.log(quizData)
  return (
    <section className='my-32 md:my-24 lg:my-12 flex flex-col items-center justify-center'>
      <Qwiz
        question={''}
        answerOptions={[]}
      />
    </section>
  )
}
