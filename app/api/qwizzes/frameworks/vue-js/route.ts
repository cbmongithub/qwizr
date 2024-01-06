import { NextResponse as res } from 'next/server'

import qwizData from './qwiz-data'

export function GET() {
  return res.json({ ok: true, qwizData }, { status: 200 })
}
