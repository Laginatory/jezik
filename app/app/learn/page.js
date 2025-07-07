'use client'
import EmojiQuiz from '../components/EmojiQuiz'

export default function Learn() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-2xl font-semibold">Learn words</h1>
      <EmojiQuiz />
    </div>
  )
}
