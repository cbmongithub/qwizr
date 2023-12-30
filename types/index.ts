export type Hero = {
  title: string
  description: string
  links?: boolean
}

export interface QuizNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export type Quiz = {
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

export type QuizCard = {
  slug: string
  title: string
  description: string
  duration: number
  concepts: string
}
;[]

export type Quizzes = {
  quizzes: QuizCard[]
}
