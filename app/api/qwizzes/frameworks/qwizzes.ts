import { QwizInfoCard } from '@/types'

export const qwizzes = [
  {
    category: 'frameworks',
    slug: 'next-js',
    title: 'Next Js',
    description:
      'Test your Next.js skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Pages, App, SSR, SSG, API Routes, Routing, File-Based Routing, Data Fetching, Image Optimization, Automatic Code Splitting, and more.',
  },
  {
    category: 'frameworks',
    slug: 'react-js',
    title: 'React JS',
    description:
      'Test your React.js skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Components, JSX, Virtual DOM, Props, State, Lifecycle Methods, Hooks, Conditional Rendering, Event Handling, Keys, and more.',
  },
  {
    category: 'frameworks',
    slug: 'angular-js',
    title: 'Angular JS',
    description:
      'Test your Angular skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Modules, Components, Directives, Services, Dependency Injection, Pipes, Forms, HTTP Client, Routing, RxJS, and more.',
  },
  {
    category: 'frameworks',
    slug: 'vue-js',
    title: 'Vue JS',
    description:
      'Test your Vue.js skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Vue Instance, Components, Templates, Directives, Reactivity, Computed Properties, Watchers, Lifecycle Hooks, Routing, Vuex, and more.',
  },
  {
    category: 'frameworks',
    slug: 'express-js',
    title: 'Express JS',
    description:
      'Test your Express.js skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Routing, Middleware, Request and Response, RESTful APIs, Template Engines, Error Handling, Security, File Uploads, and more.',
  },
] satisfies QwizInfoCard[]

export default qwizzes
