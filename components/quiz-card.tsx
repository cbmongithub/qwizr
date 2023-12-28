'use client'

import { Clock5Icon } from 'lucide-react'

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui'

const quizData = [
  {
    title: 'Javascript',
    description:
      'Test your javascript skills with 80 timed, multiple choice questions.',
    duration: '0.5 hrs',
    concepts:
      'Closures,Prototypes, Modules, Currying, Scopes, Methods, Memoization, IIFE, Error handling, and more.',
  },
]

export function QuizCard() {
  return quizData.map((quiz, index) => (
    <Card key={`quiz_card_${index}`}>
      <CardHeader>
        <div className='flex flex-row justify-between pb-3'>
          <CardTitle>{quiz.title}</CardTitle>
          <Badge variant='default'>
            <Clock5Icon className='h-3 w-3' />
            &nbsp;<p className='font-normal text-[0.75rem]'>{quiz.duration}</p>
          </Badge>
        </div>
        <CardDescription>{quiz.description}</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div
          key={index}
          className='mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0'>
          <span className='flex h-2 w-2 translate-y-1 rounded-full bg-primary' />
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Quiz Material</p>
            <p className='text-sm text-muted-foreground'>{quiz.concepts}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Launch Quiz &rarr;</Button>
      </CardFooter>
    </Card>
  ))
}
