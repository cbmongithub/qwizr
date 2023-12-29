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
      name: 'Languages',
      href: '/languages',
    },
    {
      name: 'Frameworks',
      href: '/frameworks',
    },
    {
      name: 'Front-end',
      href: '/front-end',
    },
    {
      name: 'Back-end',
      href: '/back-end',
    },
    {
      name: "API's",
      href: '/apis',
    },
    {
      name: 'Testing',
      href: '/testing',
    },
  ],
}

export type SiteConfig = typeof siteConfig
