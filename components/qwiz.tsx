'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTimer } from '@/hooks'
import { type QwizButtonProps, type QwizDataProps } from '@/types'
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

import { QwizRecap } from './qwiz-recap'
import { Button } from './ui/button'
import { Progress } from './ui/progress'

const FormSchema = z.object({
  selectedAnswer: z.string({
    required_error: 'Please select an answer.',
  }),
})

export function Qwiz({ qwizData }: QwizDataProps) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const { seconds } = useTimer(questionNumber)
  const progressValue = (questionNumber * 100) / qwizData!.length
  const currentQuestion = qwizData![questionNumber]
  const router = useRouter()
  const [score, setScore] = useState(0)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const { selectedAnswer } = data
    if (questionNumber < qwizData!.length) {
      setQuestionNumber(prevNumber => prevNumber + 1)
    }

    if (
      currentQuestion?.answers?.some(
        answer => answer.answer === selectedAnswer && answer.isCorrect
      )
    ) {
      setScore(prevScore => prevScore + 1)
    }
  }

  function handleExit(e: QwizButtonProps) {
    e.preventDefault()
    router.push('/qwizzes/apis')
  }

  function handleNextQwiz(e: QwizButtonProps) {
    e.preventDefault()
    router.push('/qwiz/frameworks/angular-js')
  }

  function handleTryAgain(e: QwizButtonProps) {
    e.preventDefault()
    console.log('Function handleTryAgain called.')
    window.location.reload()
  }

  return (
    <>
      {progressValue === 100 || seconds <= 0 ? (
        <QwizRecap
          score={score}
          length={qwizData!.length}
          isComplete={
            progressValue === 100 ? true : seconds <= 0 ? false : true
          }
          handleExit={handleExit}
          handleNextQwiz={handleNextQwiz}
          handleTryAgain={handleTryAgain}
        />
      ) : (
        <div className='w-full'>
          <div className='flex w-full justify-between items-center'>
            <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
              {`Question ${questionNumber + 1} of ${qwizData!.length}`}
            </p>
            <p className='pb-3 text-center text-md text-muted-foreground md:text-lg'>
              {seconds}
            </p>
          </div>
          <div>
            <h1 className='text-left text-2xl sm:text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-6'>
              {currentQuestion?.question}
            </h1>
            <Progress value={progressValue} />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='selectedAnswer'
                render={({ field }) => (
                  <FormItem className='space-y-3'>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className='my-6'>
                        {currentQuestion?.answers?.map((answer, index) => (
                          <FormItem
                            key={`qwiz_option_${index + 1}`}
                            className='flex items-center space-x-2 text-card-foreground'>
                            <FormControl>
                              <RadioGroupItem
                                id={`${index + 1}`}
                                value={answer.answer}
                              />
                            </FormControl>
                            <FormLabel
                              className='text-sm md:text-md pb-1.5'
                              htmlFor={`${index + 1}`}>
                              {answer.answer}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex w-full items-center justify-between'>
                <Button
                  variant='outline'
                  onClick={e => handleExit(e)}>
                  <span className='sr-only'>Exit</span>
                  &larr; Exit
                </Button>
                <Button
                  type='submit'
                  variant='default'>
                  <span className='sr-only'>Next</span>
                  Next &rarr;
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </>
  )
}
