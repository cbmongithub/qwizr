export interface QuizzesProps {
  id?: number
  key?: string
  title?: string
  duration?: number
  description?: string
  concepts?: string
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

export interface QuizDataProps {
  data?: QuizzesProps[]
}
