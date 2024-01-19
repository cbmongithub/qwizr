import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'

import db from '../../../../lib/db-connection'
import User from '../../../../models/User'

export default async function POST(req: NextRequest, res: NextResponse) {
  db().then(() => res.json())

  const {
    first_name,
    last_name,
    username,
    email,
    password,
    country,
    language,
  } = await req.json()

  const userExists = await User.findOne({ email })

  if (userExists) {
    return res.json()
  }

  const hashedPassword = await hash(password, 10)

  User.create({
    first_name,
    last_name,
    username,
    email,
    password: hashedPassword,
    country,
    language,
  })
    .then(user => {
      // const data = {
      // first_name: user.first_name,
      // last_name: user.last_name,
      // username: user.username,
      // email: user.email,
      // password: user.password,
      // country: user.country,
      // language: user.language,
      // _id: user._id,
      // }
      console.log(user)
      return user
    })
    .catch(err => {
      res.json()
    })
}
