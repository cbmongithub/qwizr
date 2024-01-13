import { NextRequest, NextResponse } from 'next/server'
import { formatSlug } from '@/helpers'

export async function POST(req: NextRequest) {
  try {
    const {
      category,
      slug,
    }: {
      category: string
      slug: string
    } = await req.json()

    const formattedSlug = formatSlug(slug)

    const payload = {
      model: 'gpt-4-1106-preview',
      messages: [
        {
          role: 'system',
          content: `You are a web development quiz api and the user is requesting a 15 question ${category} quiz about ${formattedSlug}.
          Use regular json like an API would, without any other words or symbols outside of the array. Here is an example of what two questions would look like:
          [
            {
              question: 'What type of framework is Next?',
              answers: [
                { answer: 'Frontend' },
                { answer: 'Backend' },
                { answer: 'Full-Stack', isCorrect: true },
                { answer: 'None of the above' },
              ],
            },
            {
              question: 'When was Next released?',
              answers: [
                { answer: 'September 2019' },
                { answer: 'January 2017' },
                { answer: 'October 2016', isCorrect: true },
                { answer: 'March 2018' },
              ],
            }
          ]
          Using this exact format, generate your own questions and answers for a quiz about ${formattedSlug}. Make sure to use isCorrect: true for the correct answer.  
          `,
        },
      ],
      temperature: 0.7,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 10000,
      n: 1,
    }

    const response: Response = await fetch(
      'https://api.openai.com/v1/chat/completions',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        method: 'POST',
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: response.statusText,
        },
        { status: response.status }
      )
    }

    const completion = await response.json()
    const qwizData = JSON.parse(completion?.choices[0]?.message?.content)

    return NextResponse.json({
      ok: true,
      qwizData: qwizData,
    })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Looks like something went wrong. Try again later.',
      },
      { status: 500 }
    )
  }
}
