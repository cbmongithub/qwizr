export const siteConfig = {
  name: 'Qwizr',
  url: 'https://qwizr.com',
  ogImage: 'https://qwizr.com/og.jpg',
  description:
    'Take quizzes and compete for the top spot on the leaderboard with Qwizr! Will you become the next Qwizard?',
  links: {
    twitter: 'https://twitter.com/_coderchris',
    github: 'https://github.com/christianbmartinez/',
  },
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Leaderboard',
      href: '/leaderboard',
    },
  ],
  mobileNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Leaderboard',
      href: '/leaderboard',
    },
    {
      title: 'Login',
      href: '/login',
    },
  ],
  quizNav: [
    {
      title: 'Languages',
      href: '/quizzes/languages',
    },
    {
      title: 'Frameworks',
      href: '/quizzes/frameworks',
    },
    {
      title: 'Front-end',
      href: '/quizzes/front-end',
    },
    {
      title: 'Back-end',
      href: '/quizzes/back-end',
    },
    {
      title: "API's",
      href: '/quizzes/apis',
    },
    {
      title: 'Testing',
      href: '/quizzes/testing',
    },
  ],
}

export type SiteConfig = typeof siteConfig
