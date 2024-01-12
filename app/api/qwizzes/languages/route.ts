import { NextResponse as res } from 'next/server'

import qwizzes from './qwizzes'

export function GET() {
  return res.json({ ok: true, qwizzes }, { status: 200 })
}
