export interface QuizListProps {
  content?: {
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
  }[]
}
;[]

export interface QuizNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface QuizCardProps {
  slug: string
  title: string
  duration: number
  description: string
  concepts: string
}

export interface QuizDataProps {
  quizData: QuizCardProps[]
}
