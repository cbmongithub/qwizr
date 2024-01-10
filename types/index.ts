import { LinkProps } from 'next/link'

export type Icon = React.HTMLAttributes<SVGElement>

export type Layout = {
  children: React.ReactNode
}

export interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export type QwizzesPage = {
  params: {
    category: string
  }
}

export type QwizPage = {
  params: {
    category: string
    slug: string
  }
}

export interface QwizButtonProps
  extends React.MouseEvent<HTMLButtonElement, MouseEvent> {}

export interface QwizzesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export type Qwiz = {
  question: string
  answers: { answer: string; isCorrect?: boolean }[]
}
;[]

export type QwizData = {
  qwizData?: Qwiz[]
}

export type QwizItem = Qwiz

export type QwizInfoCard = {
  category: string
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

export type QwizzesCategory = Qwizzes
