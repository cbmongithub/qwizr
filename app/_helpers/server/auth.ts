import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

function isAuthenticated() {
  try {
    verifyToken()
    return true
  } catch {
    return false
  }
}

function verifyToken() {
  const token = cookies().get('authorization')?.value ?? ''
  const decoded = jwt.verify(token, process.env.JWT_SECRET!)
  const id = decoded.sub as string
  return id
}

export const auth = {
  isAuthenticated,
  verifyToken,
}
