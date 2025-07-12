'use client'

import { useState, useEffect } from 'react'

export default function EmojiPhraseChallenge() {
  const [phrases, setPhrases] = useState([])
  const [index, setIndex] = useState(0)
  const [guess, setGuess] = useState('')
  const [attempts, setAttempts] = useState(3)
  const [status, setStatus] = useState('playing') // 'playing' | 'correct' | 'failed'
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/emoji-phrases.json')
      .then((res) => res.json())
      .then((data) => setPhrases(data))
      .catch(() => setPhrases([]))
  }, [])

  if (!phrases.length) return <div>Loading...</div>

  const current = phrases[index]

  function checkAnswer() {
    const normalized = guess.trim().toLowerCase()
    const correct =
      normalized === current.meaning_en.toLowerCase() ||
      normalized === current.meaning_it.toLowerCase()

    if (correct) {
      setStatus('correct')
      setMessage(`Correct! ${current.meaning_en} (${current.meaning_it})`)
    } else if (attempts > 1) {
      const remain = attempts - 1
      setAttempts(remain)
      setMessage(`Try again. ${remain} attempt${remain === 1 ? '' : 's'} left.`)
    } else {
      setStatus('failed')
      setMessage(
        `Out of attempts! Solution: ${current.meaning_en} (${current.meaning_it})`
      )
    }
  }

  function nextPhrase() {
    setGuess('')
    setAttempts(3)
    setStatus('playing')
    setMessage('')
    setIndex((idx) => (idx + 1) % phrases.length)
  }

  return (
    <div className="space-y-4 text-center">
      <div className="text-6xl">{current.emojis.join(' ')}</div>
      {status === 'playing' && (
        <div className="space-y-2">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="p-2 border rounded w-full max-w-xs"
            placeholder="Your guess"
          />
          <button
            onClick={checkAnswer}
            className="elite-btn"
          >
            Guess
          </button>
        </div>
      )}
      {message && <div className="mt-2 font-medium">{message}</div>}
      {status !== 'playing' && (
        <button
          onClick={nextPhrase}
          className="elite-btn mt-2"
        >
          Next
        </button>
      )}
    </div>
  )
}
