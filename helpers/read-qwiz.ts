import { promises as fs } from 'fs'

export async function readQwiz(filepath: string) {
  try {
    const qwizContent = await fs.readFile(filepath, { encoding: 'utf8' })
    return qwizContent
  } catch (err) {
    console.error(err)
  }
}
