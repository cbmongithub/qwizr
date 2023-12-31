export type Layout = {
  children: React.ReactNode
}

export type QwizPage = {
  params: {
    slug: string
  }
}

export interface QwizNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export type Qwiz = {
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

export type QwizCard = {
  slug: string
  title: string
  description: string
  duration: number
  concepts: string
}
;[]

export type Qwizzes = {
  qwizzes: QwizCard[]
}
