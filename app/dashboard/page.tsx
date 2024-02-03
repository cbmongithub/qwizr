import { authOptions } from '@/helpers'
import { getServerSession } from 'next-auth/next'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
