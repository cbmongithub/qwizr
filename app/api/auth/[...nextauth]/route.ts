import { db } from '@/lib'
import User from '@/models/user'
import { compare } from 'bcryptjs'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_QWIZR_ID!,
      clientSecret: process.env.GITHUB_QWIZR_SECRET!,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        await db().catch(err => {
          throw new Error(err)
        })

        const user = await User.findOne({
          email: req.body?.email,
        }).select('first_name last_name username email password country')

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(req.body?.password, user.password)

        if (!isPasswordValid) {
          return null
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        ...token,
        user: { ...session.user, token: token.user },
      }
    },
    async signIn({ user }) {
      if (user.email) {
        return true
      } else {
        return false
      }
    },
    async redirect({ url, baseUrl }) {
      if (url.includes('/login')) {
        return `${baseUrl}/dashboard`
      } else if (new URL(url).origin === baseUrl) {
        return url
      }
      return baseUrl
    },
  },
})

export { handler as GET, handler as POST }
