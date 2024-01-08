'use client'

import { useState } from 'react'
import { type Qwiz, type QwizData } from '@/types'

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { NotFound } from './not-found'
import { Button } from './ui/button'
import { Label } from './ui/label'
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

  function handleNext() {
    if (qwizData && questionNumber < qwizData.length - 1) {
      setQuestionNumber(prevNumber => prevNumber + 1)
    }
  }

  function handleBack() {
    if (questionNumber > 0) {
      setQuestionNumber(prevNumber => prevNumber - 1)
    }
  }

  function handleAnswer(selectedAnswer: string) {
    if (!qwizData) {
      return
    }

    const currentQuestion = qwizData[questionNumber]

    if (
      currentQuestion &&
      currentQuestion.answers.some(
        answer => answer.answer === selectedAnswer && answer.isCorrect
      )
    ) {
      setScore(prevScore => prevScore + 1)
      console.log(score)
    }

    handleNext()
  }

  function selectAnswer(selectedAnswer: string) {
    handleAnswer(selectedAnswer)
  }

  const progressValue = (questionNumber * 100) / (qwizData.length - 1)

  const currentQuestion = qwizData[questionNumber]

  if (progressValue === 100) {
    return (
      <div className='py-8 md:py-12 lg:py-24'>
        <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-8'>
          Quiz Completed!
        </h1>
        <p className='text-center text-xl font-semibold'>
          Your Score: {score} out of {qwizData.length}
        </p>
      </div>
    )
  }

  return (
    <>
      <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
        {`Question ${questionNumber + 1} of ${qwizData.length}`}
      </p>
      <h1 className='text-center text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-8'>
        {currentQuestion?.question}
      </h1>
      <form className='w-full sm:w-[500px]'>
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
                onChange={() => selectAnswer(answer.answer)}
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
      </form>
    </>
  )
}
