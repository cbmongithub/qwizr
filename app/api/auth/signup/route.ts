import { NextApiRequest, NextApiResponse } from 'next'
import User from '@/models/user'
import { hash } from 'bcryptjs'

import { db } from '@/lib/db'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  db().catch(err => res.json(err))

  const {
    first_name,
    last_name,
    username,
    email,
    password,
    country,
    language,
  } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    return res
      .status(409)
      .json({ error: 'That user already exists in our database.' })
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
      const data = {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        password: user.password,
        country: user.country,
        language: user.language,
        _id: user._id,
      }
      return res.status(201).json({
        success: true,
        data,
      })
    })
    .catch(err => {
      res.status(409).json({ error: err })
    })
}
