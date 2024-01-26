import { NextRequest, NextResponse } from 'next/server'
import { dbConnection } from '@/lib'
import User from '@/models/User'
import { hash } from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const { first_name, last_name, email, password, username, country } =
      await req.json()
    await dbConnection()
    const userExists = await User.findOne({ email })
    if (userExists) {
      return NextResponse.json(
        { message: 'User already exists!' },
        { status: 409 }
      )
    } else {
      await User.create({
        first_name,
        last_name,
        email,
        password: await hash(password, 10),
        username,
        country,
      })
      return NextResponse.json({ message: 'User created!' }, { status: 201 })
    }
  } catch (error) {
    console.log('Error in catch block of signup: ', error)
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 }
    )
  }
}
