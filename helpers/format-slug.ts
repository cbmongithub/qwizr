export function formatSlug(slug: string): string {
  const [firstWord, secondWord] = slug.split('-')

  const formattedSlug = `${
    firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
  } 
   ${secondWord}`

  return formattedSlug
}
