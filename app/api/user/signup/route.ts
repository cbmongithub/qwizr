import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib'
import { hash } from 'bcrypt'

const User = db.User

export async function POST(req: NextRequest) {
  try {
    console.log(req.json())
    const { first_name, last_name, email, password, username, country } =
      await req.json()
    const userExists = await User.findOne({ email })
    if (userExists) {
      return NextResponse.json(
        { message: 'User already exists!' },
        { status: 409 }
      )
    } else {
      const user = await User.create({
        first_name,
        last_name,
        email,
        password: await hash(password, 10),
        username,
        country,
      })

      await user.save()

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
