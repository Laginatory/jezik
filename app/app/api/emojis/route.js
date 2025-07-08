import { loadEmojiData } from '@/lib/loadEmojiData'

export async function GET() {
  try {
    const data = await loadEmojiData()
    return Response.json(data)
  } catch (err) {
    return Response.json({ error: 'Failed to load data' }, { status: 500 })
  }
}
