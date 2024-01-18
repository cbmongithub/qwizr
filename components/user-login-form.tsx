'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/config'
import { cn, loginUser } from '@/lib'
import { UserAuthFormProps } from '@/types'
import { signIn } from 'next-auth/react'

import { Icons } from '@/components/icons'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const router = useRouter()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      setIsLoading(true)
      const loginRes = await loginUser(email, password)
      if (loginRes && !loginRes.ok) {
        setSubmitError('Invalid Email or Password')
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <div
      className={cn('grid gap-6', className)}
      {...props}>
      <form
        onSubmit={onSubmit}
        onChange={() => submitError != '' && setSubmitError('')}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label
              className='sr-only'
              htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              onChange={({ target }) => setEmail(target.value)}
              name='email'
              autoCorrect='off'
              value={email}
              disabled={isLoading}
            />
            <Label
              className='sr-only'
              htmlFor='password'>
              Password
            </Label>
            <Input
              id='password'
              placeholder='************'
              type='password'
              autoCapitalize='none'
              autoComplete='none'
              onChange={({ target }) => setPassword(target.value)}
              name='password'
              autoCorrect='off'
              value={password}
              disabled={isLoading}
            />
          </div>
          <Button
            type='submit'
            disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Login
          </Button>
        </div>
        {submitError && <p>{submitError}</p>}
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant='outline'
        onClick={() => signIn('github')}
        type='button'
        disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.gitHub className='mr-2 h-4 w-4' />
        )}{' '}
        GitHub
      </Button>
    </div>
  )
}
