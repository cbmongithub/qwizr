import { NextResponse as res } from 'next/server'

export async function GET(req: Request) {
  return res.json({ quizData: 'No quiz data found.' }, { status: 404 })
}
