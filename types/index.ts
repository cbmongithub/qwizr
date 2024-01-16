import { LinkProps } from 'next/link'
import { Types } from 'mongoose'

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

export interface User {
  first_name: {
    type: StringConstructor
    required: boolean
    unique: boolean
    trim: boolean
  }
  last_name: {
    type: StringConstructor
    required: boolean
    unique: boolean
    trim: boolean
  }
  username: {
    type: StringConstructor
    required: boolean
    unique: boolean
    trim: boolean
  }
  email: {
    type: StringConstructor
    required: boolean
    unique: boolean
    match: [RegExp]
  }
  password: {
    type: StringConstructor
    required: boolean
    unique: boolean
    min: (string | number)[]
    max: number
  }
  country: {
    type: StringConstructor
    required: boolean
  }
  created_at: {
    type: DateConstructor
    default: () => number
    get: (timestamp: number) => string
  }
  friends: {
    type: typeof Types.ObjectId
    ref: string
  }[]
}
