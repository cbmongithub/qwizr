import { QwizItemProps } from '@/types'

const qwizData = [
  {
    question: 'What type of framework is Next?',
    answers: [
      { answer: 'Frontend' },
      { answer: 'Backend' },
      { answer: 'FullStack', isCorrect: true },
      { answer: 'None of the above' },
    ],
  },
  {
    question: 'When was Next released?',
    answers: [
      { answer: 'September 2019' },
      { answer: 'January 2017' },
      { answer: 'October 2016', isCorrect: true },
      { answer: 'March 2018' },
    ],
  },
  {
    question: 'Which CSS Framework does Next use?',
    answers: [
      { answer: 'Bootstrap' },
      { answer: 'Tailwind', isCorrect: true },
      { answer: 'Chakra' },
      { answer: 'Bulma' },
    ],
  },
  {
    question:
      'Which class in Tailwind is used to set flex direction of column?',
    answers: [
      { answer: 'col' },
      { answer: 'col-flex' },
      { answer: 'flex-col', isCorrect: true },
      { answer: 'None of the above' },
    ],
  },
] satisfies QwizItemProps[]

export default qwizData
