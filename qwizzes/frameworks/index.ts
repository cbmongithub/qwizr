import { QwizCard } from '@/types'

import angularJsQwiz from './angular-js'
import expressJsQwiz from './express-js'
import nextJsQwiz from './next-js'
import reactJsQwiz from './react-js'
import vueJsQwiz from './vue-js'

const frameWorksQwizzes = [
  {
    slug: 'next-js',
    title: 'Next Js',
    description:
      'Test your Next.js skills with 80 timed, multiple choice questions.',
    duration: 0.5,
    concepts:
      'Pages, App, SSR, SSG, API Routes, Routing, File-Based Routing, Data Fetching, Image Optimization, Automatic Code Splitting, and more.',
  },
  {
    slug: 'react-js',
    title: 'React JS',
    description:
      'Test your React.js skills with 80 timed, multiple choice questions.',
    duration: 0.5,
    concepts:
      'Components, JSX, Virtual DOM, Props, State, Lifecycle Methods, Hooks, Conditional Rendering, Event Handling, Keys, and more.',
  },
  {
    slug: 'angular-js',
    title: 'Angular JS',
    description:
      'Test your Angular skills with 80 timed, multiple choice questions.',
    duration: 0.5,
    concepts:
      'Modules, Components, Directives, Services, Dependency Injection, Pipes, Forms, HTTP Client, Routing, RxJS, and more.',
  },
  {
    slug: 'vue-js',
    title: 'Vue JS',
    description:
      'Test your Vue.js skills with 80 timed, multiple choice questions.',
    duration: 0.5,
    concepts:
      'Vue Instance, Components, Templates, Directives, Reactivity, Computed Properties, Watchers, Lifecycle Hooks, Routing, Vuex, and more.',
  },
  {
    slug: 'express-js',
    title: 'Express JS',
    description:
      'Test your Express.js skills with 80 timed, multiple choice questions.',
    duration: 0.5,
    concepts:
      'Routing, Middleware, Request and Response, RESTful APIs, Template Engines, Error Handling, Security, File Uploads, and more.',
  },
] satisfies QwizCard[]

export {
  angularJsQwiz,
  expressJsQwiz,
  frameWorksQwizzes,
  nextJsQwiz,
  reactJsQwiz,
  vueJsQwiz,
}
