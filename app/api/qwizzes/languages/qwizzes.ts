import { QwizInfoCardProps } from '@/types'

export const qwizzes = [
  {
    category: 'languages',
    slug: 'javascript',
    title: 'JavaScript',
    description:
      'Test your JavaScript skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Variables, Data Types, Operators, Control Structures, Functions, Objects, Arrays, DOM Manipulation, Events, and more.',
  },
  {
    category: 'languages',
    slug: 'html',
    title: 'HTML',
    description:
      'Test your HTML skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'HTML Elements, Attributes, Document Structure, Forms, Multimedia, Semantic HTML, and more.',
  },
  {
    category: 'languages',
    slug: 'css',
    title: 'CSS',
    description:
      'Test your CSS skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Selectors, Box Model, Flexbox, Grid, Positioning, Transitions, Animations, Responsive Design, and more.',
  },
  {
    category: 'languages',
    slug: 'jquery',
    title: 'jQuery',
    description:
      'Test your jQuery skills with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Selectors, DOM Manipulation, Events, Effects, AJAX, Animations, Plugins, and more.',
  },
  {
    category: 'languages',
    slug: 'python',
    title: 'Python',
    description:
      'Test your Python skills for web development with 15 timed, multiple choice questions.',
    progress: 0,
    concepts:
      'Variables, Data Types, Control Structures, Functions, Web Frameworks (e.g., Django, Flask), Database Access, RESTful APIs, and more.',
  },
] satisfies QwizInfoCardProps[]

export default qwizzes
