import { siteConfig } from '@/config'

export function Footer() {
  return (
    <footer className='pb-6 pt-12'>
      <div className='container flex flex-col items-center justify-between gap-4'>
        <p className='text-balance text-center text-sm leading-loose text-muted-foreground'>
          Built by{' '}
          <a
            href={siteConfig.links.twitter}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'>
            coderchris
          </a>
          . Source code available on&nbsp;
          <a
            href={siteConfig.links.github}
            target='_blank'
            rel='noreferrer'
            className='font-medium underline underline-offset-4'>
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
