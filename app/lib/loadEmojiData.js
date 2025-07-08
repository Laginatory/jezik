import { promises as fs } from 'fs'
import path from 'path'

export async function loadEmojiData() {
  const filePath = path.join(process.cwd(), 'public', 'emoji-data.json')
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}
