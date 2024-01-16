import { connect } from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Invalid Environment variable for MONGODB_URI')
}

export async function db() {
  try {
    const { connection } = await connect(MONGODB_URI!)

    if (connection.readyState === 1) {
      console.log('Connected to MongoDB!')
      return Promise.resolve(true)
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
