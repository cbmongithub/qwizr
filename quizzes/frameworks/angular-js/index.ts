import { type Quiz } from '@/types'

const angularJsQuiz = [
  {
    question: 'What is Angular primarily used for?',
    answerOptions: [
      { answer: 'Backend development' },
      { answer: 'Frontend development', isCorrect: true },
      { answer: 'Database management' },
      { answer: 'Mobile app development' },
    ],
  },
  {
    question: 'What is the current stable version of Angular as of 2023?',
    answerOptions: [
      { answer: 'Angular 8' },
      { answer: 'Angular 10' },
      { answer: 'Angular 13' },
      { answer: 'Angular 15', isCorrect: true },
    ],
  },
  {
    question: 'Which of the following is a built-in directive in Angular?',
    answerOptions: [
      { answer: 'ng-if' },
      { answer: 'v-if' },
      { answer: 'ng-show', isCorrect: true },
      { answer: 'v-show' },
    ],
  },
  {
    question: 'What is the purpose of NgModule in Angular?',
    answerOptions: [
      { answer: 'To define a module', isCorrect: true },
      { answer: 'To create a service' },
      { answer: 'To declare a component' },
      { answer: 'To handle HTTP requests' },
    ],
  },
] satisfies Quiz[]

export default angularJsQuiz
