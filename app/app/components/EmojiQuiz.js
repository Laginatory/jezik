'use client'

import { useState, useEffect } from 'react'

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

export default function EmojiQuiz() {
  const [items, setItems] = useState([])
  const [index, setIndex] = useState(0)
  const [options, setOptions] = useState([])
  const [message, setMessage] = useState('')
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetch('/emojis.json')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch(() => setItems([]))
  }, [])

  useEffect(() => {
    if (items.length) {
      const current = items[index]
      const others = shuffle(
        items.filter((_, i) => i !== index).map((i) => i.meaning_en)
      ).slice(0, 3)
      setOptions(shuffle([current.meaning_en, ...others]))
    }
  }, [items, index])

  function handleGuess(word) {
    const current = items[index]
    const correct = word === current.meaning_en
    setMessage(correct ? 'Correct!' : `Nope, it\'s ${current.meaning_en}`)
    if (correct) setScore((s) => s + 1)
    setTimeout(() => {
      setMessage('')
      setIndex((i) => (i + 1) % items.length)
    }, 800)
  }

  if (!items.length) return <div>Loading...</div>
  const current = items[index]

  return (
    <div className="space-y-4 text-center">
      <div className="text-6xl">{current.emoji}</div>
      <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto">
        {options.map((w) => (
          <button
            key={w}
            onClick={() => handleGuess(w)}
            className="elite-btn"
          >
            {w}
          </button>
        ))}
      </div>
      {message && <div className="font-semibold">{message}</div>}
      <div>
        {score}/{items.length} correct
      </div>
    </div>
  )
}
