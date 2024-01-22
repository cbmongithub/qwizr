import { NextRequest, NextResponse } from 'next/server'
import User from '@/models/User'
import { hash } from 'bcrypt'

import dbConnection from '@/lib/db-connection'

export async function POST(req: NextRequest) {
  try {
    const db = await dbConnection().catch(err => {
      console.log(err)
      return NextResponse.json(
        {
          success: false,
          error: 'Something went wrong while connecting to the database.',
        },
        { status: 500 }
      )
    })

    const {
      email,
      password,
      first_name,
      last_name,
      username,
      country,
      language,
    } = (await JSON.parse(JSON.stringify(req.body))) ?? {}

    console.log(
      email,
      password,
      first_name,
      last_name,
      username,
      country,
      language
    )

    const userExists = await User.findOne({ email })

    if (userExists) {
      return NextResponse.json(
        {
          success: false,
          error: 'User already exists',
        },
        { status: 409 }
      )
    }

    const hashedPassword = await hash(password, 10)

    const user = await User.create({
      first_name,
      last_name,
      username,
      email,
      password: hashedPassword,
      country,
      language,
    })

    return NextResponse.json({ success: true, data: user }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Something went wrong while processing your request',
      },
      { status: 500 }
    )
  }
}
