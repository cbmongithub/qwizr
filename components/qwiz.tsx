'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  type QwizButtonProps,
  type QwizDataProps,
  type QwizProps,
} from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { QwizTimer } from './qwiz-timer'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Progress } from './ui/progress'

const FormSchema = z.object({
  type: z.enum(['1', '2', '3', '4'], {
    required_error: 'Please select an answer.',
  }),
})

export function Qwiz({ qwizData }: QwizDataProps) {
  const router = useRouter()
  const [questionNumber, setQuestionNumber] = useState(0)
  const progressValue = (questionNumber * 100) / qwizData!.length
  const currentQuestion = qwizData![questionNumber]
  const [score, setScore] = useState(0)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }

  function handleNext(e: QwizButtonProps) {
    e.preventDefault()
    console.log('Function handleNext called.')
    if (questionNumber < qwizData!.length) {
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

    if (
      currentQuestion?.answers?.some(
        answer => answer.answer === selectedAnswer && answer.isCorrect
      )
    ) {
      setScore(prevScore => prevScore + 1)
    }
  }

  if (progressValue === 100) {
    return (
      <div className='flex flex-col justify-center fixed inset-0 z-50 transition-all duration-500 items-center backdrop-blur supports-[backdrop-filter]:bg-background/10'>
        <div className='py-8 md:py-12 lg:py-24 text-center'>
          <h1 className='text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-3'>
            {score === qwizData!.length ? 'Perfect score!' : 'Quiz Completed!'}
          </h1>
          <p className='text-lg font-normal text-muted-foreground'>
            You scored {score} out of {qwizData!.length} points!
          </p>
          <Button
            className='my-6'
            variant='ghost'
            onClick={() => router.refresh}>
            <span className='sr-only'>Try Again</span>
            Try Again
          </Button>
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
      </div>
    )
  }

  return (
    <>
      <div className='flex w-full justify-between items-center'>
        <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
          {`Question ${questionNumber + 1} of ${qwizData!.length}`}
        </p>
        <QwizTimer questionNumber={questionNumber + 1} />
      </div>
      <h1 className='text-left text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6'>
        {currentQuestion?.question}
      </h1>
      <div className='w-full'>
        <Progress value={progressValue} />
        <form>
          <RadioGroup
            required={true}
            className='my-6'
            name='qwiz'>
            {currentQuestion?.answers?.map((answer, index) => (
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
              type='submit'
              variant='default'
              onClick={e => handleNext(e)}>
              <span className='sr-only'>Next</span>
              Next &rarr;
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
