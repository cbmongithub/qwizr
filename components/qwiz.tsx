'use client'

import { useState } from 'react'
import { type Qwiz, type QwizData } from '@/types'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { NotFound } from './not-found'
import { Button } from './ui/button'
import { Progress } from './ui/progress'

export function Qwiz({ qwizData }: QwizData) {
  const [questionNumber, setQuestionNumber] = useState<number>(0)
  const [score, setScore] = useState<number>(0)

  if (!qwizData) {
    return (
      <div className='mt-52 flex flex-col items-center justify-center'>
        <NotFound resource='Qwiz' />
      </div>
    )
  }

  function handleNext(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (qwizData && questionNumber < qwizData.length - 1) {
      setQuestionNumber(prevNumber => prevNumber + 1)
    }
  }

  function handleBack(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (questionNumber > 0) {
      setQuestionNumber(prevNumber => prevNumber - 1)
    }
  }

  const progressValue = (questionNumber * 100) / (qwizData.length - 1)

  const currentQuestion = qwizData[questionNumber]

  return (
    <>
      <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
        {`Question ${questionNumber + 1} of ${qwizData.length}`}
      </p>
      <h1 className='text-center text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-8'>
        {currentQuestion?.question}
      </h1>
      <Progress value={progressValue} />
      <div className='w-full'>
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
            onClick={handleBack}>
            <span className='sr-only'>Back</span>
            &larr; Back
          </Button>
          <Button
            variant='default'
            onClick={handleNext}>
            <span className='sr-only'>Next</span>
            Next &rarr;
          </Button>
        </div>
      </div>
    </>
  )
}
