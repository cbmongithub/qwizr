import { type User } from '@/types'
import moment from 'moment'
import { model, Schema } from 'mongoose'

const UserSchema = new Schema<User>(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/],
    },
    password: {
      type: String,
      required: true,
      unique: true,
      min: [8, 'Password must be at least 8 characters long.'],
      max: 36,
    },
    country: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
      get: (timestamp: number) =>
        moment(timestamp).format('MMMM Do YYYY [at] h:mm:ss a'),
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
)

UserSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

const User = model<User>('User', UserSchema)

module.exports = User
