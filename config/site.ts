export const siteConfig = {
  name: 'Qwizr',
  url: 'https://qwizr.com',
  dev_url: 'http://localhost:3000',
  ogImage: 'https://qwizr.com/og.jpg',
  description:
    'Take qwizzes and compete for the top spot on the leaderboard with Qwizr! Will you become the next Qwizard?',
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
  qwizNav: [
    {
      title: "API's",
      href: '/qwizzes/apis',
    },
    {
      title: 'Back-end',
      href: '/qwizzes/back-end',
    },
    {
      title: 'Frameworks',
      href: '/qwizzes/frameworks',
    },
    {
      title: 'Front-end',
      href: '/qwizzes/front-end',
    },
    {
      title: 'Languages',
      href: '/qwizzes/languages',
    },
    {
      title: 'Testing',
      href: '/qwizzes/testing',
    },
  ],
}

export type SiteConfig = typeof siteConfig
