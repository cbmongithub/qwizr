import { NextApiResponse } from 'next'

import dbConnection from '../../../lib/db-connection'
import User from '../../../models/User'

export default async function GET(res: NextApiResponse) {
  await dbConnection()

  try {
    const users = await User.find({})

    if (!users) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'No users found.',
      })
    }
    res.status(200).json({ success: true, data: users })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
