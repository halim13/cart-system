import {NextResponse} from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PATH_URL_BACKEND}/products`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await res.json()
  return NextResponse.json({result})
}