import { type Quiz } from '@/types'

const reactJsQuiz = [
  {
    question: 'What type of library is React?',
    answerOptions: [
      { answer: 'Frontend', isCorrect: true },
      { answer: 'Backend' },
      { answer: 'FullStack' },
      { answer: 'None of the above' },
    ],
  },
  {
    question: 'When was React released?',
    answerOptions: [
      { answer: 'May 2013', isCorrect: true },
      { answer: 'March 2018' },
      { answer: 'October 2016' },
      { answer: 'January 2017' },
    ],
  },
  {
    question:
      'What are the differences between class components and function components in React?',
    answerOptions: [
      { answer: 'Syntax' },
      { answer: 'State Management' },
      { answer: 'Lifecycle Methods' },
      { answer: 'All of the above', isCorrect: true },
    ],
  },
  {
    question:
      "What version was it that import React from 'react' became no longer necessary?",
    answerOptions: [
      { answer: 'Version 15' },
      { answer: 'Version 16' },
      { answer: 'Version 17', isCorrect: true },
      { answer: "import React from 'react' has always been optional" },
    ],
  },
] satisfies Quiz[]

export default reactJsQuiz
