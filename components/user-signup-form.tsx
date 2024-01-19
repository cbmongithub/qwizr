'use client'

import { useState } from 'react'
import { siteConfig } from '@/config'
import { cn } from '@/lib'
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

export function UserSignupForm({ className, ...props }: UserAuthFormProps) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    username: '',
    country: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(formData)
    try {
      setIsLoading(true)
      const response = await fetch('api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      !response.ok && setSubmitError(response.statusText)

      let result = await response.json()

      result && setIsLoading(false)

      console.log(result)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div
      className={cn('grid gap-6', className)}
      {...props}>
      <form onSubmit={onSubmit}>
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
              onChange={({ target }) =>
                setFormData({ ...formData, email: target.value })
              }
              name='email'
              autoCorrect='off'
              value={formData.email}
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
              onChange={({ target }) =>
                setFormData({ ...formData, password: target.value })
              }
              name='password'
              autoCorrect='off'
              value={formData.password}
              disabled={isLoading}
            />
            <Label
              className='sr-only'
              htmlFor='username'>
              Username
            </Label>
            <Input
              id='username'
              placeholder='Username'
              type='text'
              autoCapitalize='none'
              autoComplete='none'
              onChange={({ target }) =>
                setFormData({ ...formData, username: target.value })
              }
              name='username'
              autoCorrect='off'
              value={formData.username}
              disabled={isLoading}
            />
            <Label
              className='sr-only'
              htmlFor='first_name'>
              First Name
            </Label>
            <Input
              id='first_name'
              placeholder='Bob'
              type='text'
              autoCapitalize='none'
              autoComplete='first_name'
              onChange={({ target }) =>
                setFormData({ ...formData, first_name: target.value })
              }
              name='first_name'
              autoCorrect='off'
              value={formData.first_name}
              disabled={isLoading}
            />
            <Label
              className='sr-only'
              htmlFor='last_name'>
              Last Name
            </Label>
            <Input
              id='last_name'
              placeholder='Thomas'
              type='text'
              autoCapitalize='none'
              autoComplete='last_name'
              onChange={({ target }) =>
                setFormData({ ...formData, last_name: target.value })
              }
              name='last_name'
              autoCorrect='off'
              value={formData.last_name}
              disabled={isLoading}
            />
            <Label
              className='sr-only'
              htmlFor='country'>
              Country
            </Label>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a Country' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {siteConfig.countries.map((option, index) => (
                    <SelectItem
                      key={`userAuthForm_country_${index}`}
                      onChange={() =>
                        setFormData({ ...formData, country: option })
                      }
                      defaultValue={'United States of America'}
                      value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button
            type='submit'
            disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Sign Up
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
