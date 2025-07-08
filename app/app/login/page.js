'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Check your email for the magic link!')
    }
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    if (session) router.push('/learn')
  })

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-4">
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <form onSubmit={handleLogin} className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email"
          className="p-2 border rounded w-64"
        />
        <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
          Send Magic Link
        </button>
      </form>
      {message && <div className="mt-2">{message}</div>}
    </div>
  )
}
