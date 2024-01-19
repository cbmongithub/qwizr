import _mongoose, { connect } from 'mongoose'

declare global {
  var mongoose: {
    promise: ReturnType<typeof connect> | null
    connection: typeof _mongoose | null
  }
}

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { connection: null, promise: null }
}

export default async function dbConnection() {
  if (cached.connection) {
    console.log('🚀 Using cached connection')
    return cached.connection
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = connect(MONGODB_URI!, opts)
      .then(connection => {
        console.log('✅ New connection established')
        return connection
      })
      .catch(error => {
        console.error('❌ Connection to database failed')
        throw error
      })
  }

  try {
    cached.connection = await cached.promise
  } catch (error) {
    cached.promise = null
    throw error
  }

  return cached.connection
}
