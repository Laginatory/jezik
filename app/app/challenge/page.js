'use client'
import { useState } from 'react'

const choices = ['👋', '🌎', '😊', '🍕', '🏃']

export default function Challenge() {
  const [phrase, setPhrase] = useState([])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-2xl font-semibold">Build a phrase</h1>
      <div className="flex gap-2">
        {choices.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setPhrase([...phrase, c])}
            className="text-3xl p-2 rounded bg-gray-100 hover:bg-gray-200"
          >
            {c}
          </button>
        ))}
      </div>
      <div className="text-4xl h-12 flex items-center">{phrase.join(' ')}</div>
      <button
        onClick={() => setPhrase([])}
        className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
      >
        Clear
      </button>
    </div>
  )
}
