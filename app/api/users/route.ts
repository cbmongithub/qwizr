import joi from 'joi'

import { apiHandler } from '../../_helpers/server/api/api-handler'
import { usersRepo } from '../../_helpers/server/users-repo'

async function getAll() {
  return await usersRepo.getAll()
}

async function create(req: Request) {
  const body = await req.json()
  await usersRepo.create(body)
}

create.schema = joi.object({
  first_name: joi.string().required(),
  last_name: joi.string().required(),
  username: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().min(6).required(),
  country: joi.string().required(),
})

export async function GET() {
  return apiHandler({
    GET: getAll,
  })
}

export async function POST(req: Request) {
  return apiHandler({
    POST: create(req),
  })
}
