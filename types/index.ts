export type Layout = {
  children: React.ReactNode
}

export type QwizPage = {
  params: {
    slug: string
  }
}

export interface QwizzesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export type Qwiz = {
  slug?: string
  question: string
  answerOptions: (
    | {
        answer: string
        isCorrect?: undefined
      }
    | {
        answer: string
        isCorrect: boolean
      }
  )[]
}
;[]

export type QwizInfoCard = {
  slug: string
  title: string
  description: string
  duration: number
  concepts: string
}
;[]

export type Qwizzes = {
  qwizzes: QwizInfoCard[]
}
