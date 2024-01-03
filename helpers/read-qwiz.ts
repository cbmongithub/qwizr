import { readFile } from 'node:fs/promises'

export async function readQwiz(filepath: string) {
  try {
    const qwizContent = await readFile(filepath, { encoding: 'utf8' })
    return qwizContent
  } catch (err) {
    console.error(err)
  }
}
