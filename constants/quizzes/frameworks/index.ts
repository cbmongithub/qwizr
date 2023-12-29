const frameWorkQuizzes = [
  {
    slug: 'next-js',
    title: 'Next Js',
    description:
      'Test your Next js skills with 80 timed, multiple choice questions.',
    duration: 0.5,
    concepts:
      'Pages, App, SSR, SSG, API Routes, Routing, File-Based Routing, Data Fetching, Image Optimization, Automatic Code Splitting, and more.',
    content: [
      {
        question: 'What type of framework is Next?',
        answerOptions: [
          { answer: 'Frontend' },
          { answer: 'Backend' },
          { answer: 'FullStack', isCorrect: true },
          { answer: 'None of the above' },
        ],
      },
      {
        question: 'When was Next released?',
        answerOptions: [
          { answer: 'September 2019' },
          { answer: 'January 2017' },
          { answer: 'October 2016', isCorrect: true },
          { answer: 'March 2018' },
        ],
      },
      {
        question: 'Which CSS Framework does Next use?',
        answerOptions: [
          { answer: 'Bootstrap' },
          { answer: 'Tailwind', isCorrect: true },
          { answer: 'Chakra' },
          { answer: 'Bulma' },
        ],
      },
      {
        question:
          'Which class in Tailwind is used to set flex direction of column?',
        answerOptions: [
          { answer: 'col' },
          { answer: 'col-flex' },
          { answer: 'flex-col', isCorrect: true },
          { answer: 'None of the above' },
        ],
      },
    ],
  },
  {
    slug: 'react-js',
    title: 'React JS',
    description:
      'Test your React js skills with 80 timed, multiple choice questions.',
    duration: 0.5,
    concepts:
      'Components, JSX, Virtual DOM, Props, State, Lifecycle Methods, Hooks, Conditional Rendering, Event Handling, Keys, and more.',
    content: [
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
    ],
  },
]

export default frameWorkQuizzes
