import { type Quiz } from '@/types'

const expressJsQuiz = [
  {
    question: 'What does Express.js use as its template engine by default?',
    answerOptions: [
      { answer: 'Pug' },
      { answer: 'Handlebars' },
      { answer: 'EJS', isCorrect: true },
      { answer: 'Jade' },
    ],
  },
  {
    question: 'Which method is used in Express.js to handle HTTP GET requests?',
    answerOptions: [
      { answer: 'GET' },
      { answer: 'POST' },
      { answer: 'FETCH' },
      { answer: 'app.get()', isCorrect: true },
    ],
  },
  {
    question: 'What does the middleware in Express.js refer to?',
    answerOptions: [
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
    answerOptions: [
      { answer: 'express-session', isCorrect: true },
      { answer: 'cookie-parser' },
      { answer: 'body-parser' },
      { answer: 'passport' },
    ],
  },
] satisfies Quiz[]

export default expressJsQuiz
