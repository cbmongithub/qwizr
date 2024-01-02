import { readFile } from 'node:fs/promises'

export async function readQuiz(slug: string) {
  try {
    const filePath = `${slug}/quiz.json`
    const contents = await readFile(filePath, { encoding: 'utf8' })
    return contents
  } catch (err) {
    console.error(err)
  }
}
