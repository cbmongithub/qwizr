import { NextApiRequest, NextApiResponse } from 'next'

import dbConnection from '../../../../lib/db-connection'
import User from '../../../../models/User'

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body

  await dbConnection()

  try {
    const userExists = await User.find({ email: email })

    if (userExists) {
      return res.status(409).json({
        success: false,
        data: null,
        message: 'User already exists.',
      })
    }
    const user = await User.create(req.body)
    res.status(201).json({ success: true, data: user })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
