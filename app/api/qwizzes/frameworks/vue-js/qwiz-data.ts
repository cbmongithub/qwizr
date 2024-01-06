import { QwizItem } from '@/types'

const qwizData = [
  {
    question: 'What does Vue.js use to render data to the DOM?',
    answers: [
      { answer: 'Virtual DOM' },
      { answer: 'Actual DOM' },
      { answer: 'Both Virtual and Actual DOM', isCorrect: true },
      { answer: 'None of the above' },
    ],
  },
  {
    question:
      'Which Vue.js feature allows you to conditionally render HTML elements?',
    answers: [
      { answer: 'v-bind' },
      { answer: 'v-show' },
      { answer: 'v-if', isCorrect: true },
      { answer: 'v-for' },
    ],
  },
  {
    question: 'What does Vuex represent in Vue.js?',
    answers: [
      { answer: 'Routing library' },
      { answer: 'State management pattern/library', isCorrect: true },
      { answer: 'Component library' },
      { answer: 'HTTP client library' },
    ],
  },
  {
    question: 'Which lifecycle hook is called after a component is destroyed?',
    answers: [
      { answer: 'beforeDestroy' },
      { answer: 'destroyed', isCorrect: true },
      { answer: 'deleting' },
      { answer: 'removed' },
    ],
  },
] satisfies QwizItem[]

export default qwizData
