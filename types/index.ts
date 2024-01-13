import { LinkProps } from 'next/link'

export interface IconProps extends React.HTMLAttributes<SVGElement> {}

export interface LayoutProps {
  children: React.ReactNode
}

export interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

export interface QwizzesPageProps {
  params: {
    category: string
  }
}

export interface QwizPageProps {
  params: {
    category: string
    slug: string
  }
}

export interface QwizTimerProps {
  questionNumber: number
}

export interface QwizRecapProps {
  score: number
  length: number
  handleExit: (e: QwizButtonProps) => void
  handleNewQwiz: (e: QwizButtonProps) => void
}

export interface QwizButtonProps
  extends React.MouseEvent<HTMLButtonElement, MouseEvent> {}

export interface QwizzesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface QwizProps {
  question: string
  answers: { answer: string; isCorrect?: boolean }[]
}
;[]

export interface QwizDataProps {
  qwizData?: QwizProps[]
}

export interface QwizItemProps extends QwizProps {}

export interface QwizInfoCardProps {
  category: string
  slug: string
  title: string
  description: string
  progress: number
  concepts: string
}
;[]

export interface QwizzesProps {
  qwizzes: QwizInfoCardProps[]
}

export interface QwizzesCategoryProps extends QwizzesProps {}
