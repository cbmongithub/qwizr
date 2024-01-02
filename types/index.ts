export type Layout = {
  children: React.ReactNode
}

export type QwizPage = {
  params: {
    slug: string[]
  }
}

export interface QwizzesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export type Qwiz = {
  question: string
  answerOptions: { answer: string; isCorrect?: boolean }[]
}
;[]

export type QwizItem = Qwiz

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
