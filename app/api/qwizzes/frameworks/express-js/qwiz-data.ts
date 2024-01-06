import { QwizItem } from '@/types'

const qwizData = [
  {
    question: 'What does Express.js use as its template engine by default?',
    answers: [
      { answer: 'Pug' },
      { answer: 'Handlebars' },
      { answer: 'EJS', isCorrect: true },
      { answer: 'Jade' },
    ],
  },
  {
    question: 'Which method is used in Express.js to handle HTTP GET requests?',
    answers: [
      { answer: 'GET' },
      { answer: 'POST' },
      { answer: 'FETCH' },
      { answer: 'app.get()', isCorrect: true },
    ],
  },
  {
    question: 'What does the middleware in Express.js refer to?',
    answers: [
      { answer: 'Database' },
      { answer: 'Frontend' },
      {
        answer: 'Functions that have access to request and response objects',
        isCorrect: true,
      },
      { answer: 'Server' },
    ],
  },
  {
    question:
      'Which package is commonly used to handle sessions in Express.js?',
    answers: [
      { answer: 'express-session', isCorrect: true },
      { answer: 'cookie-parser' },
      { answer: 'body-parser' },
      { answer: 'passport' },
    ],
  },
] satisfies QwizItem[]

export default qwizData
