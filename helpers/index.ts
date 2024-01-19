import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

export default function formatSlug(slug: string): string {
  const [firstWord, secondWord] = slug.split('-')

  const formattedSlug = `${
    firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
  }${secondWord ? ' ' + secondWord : ''}`

  return formattedSlug
}

export function stringToObjectId(id: string): mongoose.Types.ObjectId | null {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return new mongoose.Types.ObjectId(id)
  } else {
    return null
  }
}

export function createErrorResponse(
  message: string,
  statusCode: number
): NextResponse {
  const errorResponse = {
    status: statusCode >= 500 ? 'error' : 'fail',
    message,
  }

  return new NextResponse(JSON.stringify(errorResponse), {
    status: statusCode,
    headers: { 'Content-Type': 'application/json' },
  })
}

export { formatSlug }
