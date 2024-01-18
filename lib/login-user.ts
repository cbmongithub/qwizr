import { signIn } from 'next-auth/react'

export const loginUser = async (email: string, password: string) => {
  const res = await signIn('credentials', {
    redirect: false,
    email,
    password,
  })

  return res
}
