'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { type Qwiz, type QwizButtonProps, type QwizData } from '@/types'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { NotFound } from './not-found'
import { QwizTimer } from './qwiz-timer'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Progress } from './ui/progress'

export function Qwiz({ qwizData }: QwizData) {
  const router = useRouter()
  const [questionNumber, setQuestionNumber] = useState(0)
  const [score, setScore] = useState(0)

  if (!qwizData) {
    return (
      <div className='mt-52 flex flex-col items-center justify-center'>
        <NotFound resource='Qwiz' />
      </div>
    )
  }

  function handleNext(e: QwizButtonProps) {
    e.preventDefault()
    console.log('Function handleNext called.')
    if (qwizData && questionNumber < qwizData.length - 1) {
      setQuestionNumber(prevNumber => prevNumber + 1)
    }
  }

  function handleExit(e: QwizButtonProps) {
    e.preventDefault()
    console.log('Function handleExit called.')
    router.push('/qwizzes/apis')
  }

  function handleNewQwiz(e: QwizButtonProps) {
    e.preventDefault()
    console.log('Function handleNewQwiz called.')
    router.push('/qwiz/frameworks/angular-js')
  }

  function handleAnswer(selectedAnswer: string) {
    console.log('Function handleAnswer called.')
    const currentQuestion = qwizData && qwizData[questionNumber]

    if (
      currentQuestion &&
      currentQuestion.answers.some(
        answer => answer.answer === selectedAnswer && answer.isCorrect
      )
    ) {
      setScore(prevScore => prevScore + 1)
      console.log('Score count: ', score)
    }
  }

  const progressValue = (questionNumber * 100) / (qwizData.length - 1)

  const currentQuestion = qwizData[questionNumber]

  if (progressValue === 100) {
    return (
      <div className='py-8 md:py-12 lg:py-24 text-center'>
        <h1 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-3'>
          Quiz Completed!
        </h1>
        <p className='text-lg font-normal text-muted-foreground'>
          You scored {score} out of {qwizData.length}!
        </p>
        <div className='mt-6 flex w-full items-center justify-between'>
          <Button
            variant='outline'
            onClick={e => handleExit(e)}>
            <span className='sr-only'>Exit</span>
            &larr; Exit
          </Button>
          <Button
            variant='default'
            onClick={e => handleNewQwiz(e)}>
            <span className='sr-only'>New Qwiz</span>
            New Qwiz &rarr;
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='flex w-full justify-between items-center'>
        <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
          {`Question ${questionNumber + 1} of ${qwizData.length}`}
        </p>
        <QwizTimer questionNumber={questionNumber + 1} />
      </div>
      <h1 className='text-left text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6'>
        {currentQuestion?.question}
      </h1>
      <div className='w-full'>
        <Progress value={progressValue} />
        <RadioGroup
          className='my-6'
          name='qwiz'>
          {currentQuestion?.answers.map((answer, index) => (
            <div
              key={index}
              className='flex items-center space-x-2 text-card-foreground py-2'>
              <RadioGroupItem
                value={answer.answer}
                id={`${index + 1}`}
                onClick={() => handleAnswer(answer.answer)}
              />
              <Label
                className='text-sm md:text-md'
                htmlFor={`${index + 1}`}>
                {answer.answer}
              </Label>
            </div>
          ))}
        </RadioGroup>
        <div className='flex w-full items-center justify-between'>
          <Button
            variant='outline'
            onClick={e => handleExit(e)}>
            <span className='sr-only'>Exit</span>
            &larr; Exit
          </Button>
          <Button
            variant='default'
            onClick={e => handleNext(e)}>
            <span className='sr-only'>Next</span>
            Next &rarr;
          </Button>
        </div>
      </div>
    </>
  )
}
