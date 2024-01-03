import { frontEndQwizzes } from '@/qwizzes'

import { Qwizzes } from '@/components/qwizzes'

export default function FrontEndPage() {
  return <Qwizzes qwizzes={frontEndQwizzes} />
}
