import { LinkProps } from 'next/link'
import { Document, Types } from 'mongoose'

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

export interface QwizRecapProps {
  score: number
  length: number
  isComplete: boolean
  handleExit: (e: QwizButtonProps) => void
  handleNextQwiz: (e: QwizButtonProps) => void
  handleTryAgain: (e: QwizButtonProps) => void
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

export interface User extends Document {
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
  country: string
}

export interface UserAuthFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}
