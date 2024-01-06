import { NextResponse as res } from 'next/server'
import { QwizItem } from '@/types'

import qwiz from './qwiz'

export function GET() {
  const qwizData = qwiz
  console.log('qwizData: ', qwizData)
  return res.json({ ok: true, qwizData }, { status: 200 })
}
