import { NextApiRequest, NextApiResponse } from 'next'

import dbConnection from '../../../../lib/db-connection'
import User from '../../../../models/User'

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req

  await dbConnection()

  try {
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({
        success: false,
        data: null,
        message: 'No user found with that ID.',
      })
    }
    res.status(200).json({ success: true, data: user })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req

  await dbConnection()

  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!user) {
      return res.status(400).json({
        success: false,
        data: null,
        message: 'No user found with that ID to update.',
      })
    }
    res.status(200).json({ success: true, data: user })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req

  await dbConnection()

  try {
    const deletedUser = await User.deleteOne({ _id: id })
    if (!deletedUser) {
      return res
        .status(400)
        .json({
          success: false,
          data: null,
          message: 'No user found with that ID to delete.',
        })
    }
    res.status(200).json({ success: true, data: {} })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}
