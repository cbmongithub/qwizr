'use client'

import { useState } from 'react'
import { type QwizData } from '@/types'

import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { Button } from './ui/button'
import { Progress } from './ui/progress'

export function Qwiz({ qwizData }: QwizData) {
  //console.log(qwizData)
  //const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)
  const questionLength = 10
  const [questionNumber, setQuestionNumber] = useState(0)
  //const [totalScore, setTotalScore] = useState(0)
  //const [quizQuestion, setQuizQuestion] = useState(question)
  //const [quizAnswers, setQuizAnswers] = useState(answers)

  function handleNext(e: MouseEvent | KeyboardEvent) {
    e.preventDefault()
    setQuestionNumber(
      questionNumber === questionLength ? questionLength : questionNumber + 1
    )
  }

  function handleBack(e: MouseEvent | KeyboardEvent) {
    e.preventDefault()
    setQuestionNumber(questionNumber === 0 ? 0 : questionNumber - 1)
  }

  return (
    <div className='py-8 md:py-12 lg:py-24'>
      <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
        {`Question 1 of 10`}
      </p>
      <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-8'>
        What type of library is React?
      </h1>
      <Progress value={10} />
      <RadioGroup
        className='my-12'
        name='qwiz'>
        <div className='flex items-center space-x-2 text-card-foreground py-2'>
          <RadioGroupItem
            value='Front-End'
            id='1'
          />
          <Label
            className='text-sm md:text-lg'
            htmlFor='1'>
            Front-End
          </Label>
        </div>
        <div className='flex items-center space-x-2 text-card-foreground py-2'>
          <RadioGroupItem
            value='Back-End'
            id='2'
          />
          <Label
            className='text-sm md:text-lg'
            htmlFor='2'>
            Back-End
          </Label>
        </div>
        <div className='flex items-center space-x-2 text-card-foreground py-2'>
          <RadioGroupItem
            value='Full-Stack'
            id='3'
          />
          <Label
            className='text-sm md:text-lg'
            htmlFor='3'>
            Full-Stack
          </Label>
        </div>
        <div className='flex items-center space-x-2 py-2'>
          <RadioGroupItem
            value='None of the above'
            id='4'
          />
          <Label
            className='text-sm md:text-lg'
            htmlFor='4'>
            None of the above
          </Label>
        </div>
      </RadioGroup>
      <div className='flex w-full items-center justify-between'>
        <Button
          variant='outline'
          onClick={() => handleBack}>
          <span className='sr-only'>Back</span>
          &larr; Back
        </Button>
        <Button
          variant='default'
          onClick={() => handleNext}>
          <span className='sr-only'>Next</span>
          Next &rarr;
        </Button>
      </div>
    </div>
  )
}
