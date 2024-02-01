import { NextRequest, NextResponse } from 'next/server'
import { dbConnection } from '@/lib'
import User from '@/models/User'
import { hash } from 'bcrypt'

export async function GET() {
  try {
    await dbConnection().catch(err => console.log(err))
    const users = await User.find({})
    if (users) {
      return NextResponse.json({ users }, { status: 200 })
    } else {
      return NextResponse.json({ message: 'No users found.' }, { status: 404 })
    }
  } catch (error) {
    console.log('Error in catch block of getting all users: ', error)
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnection().catch(err => console.log(err))
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
      return NextResponse.json(
        { message: 'User created!', user },
        { status: 201 }
      )
    }
  } catch (error) {
    console.log('Error in catch block of signup: ', error)
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 }
    )
  }
}
