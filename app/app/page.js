'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import LanguageSelector from './components/LanguageSelector'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  function signOut() {
    supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <LanguageSelector />
      <Link href="/challenge" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        Challenge
      </Link>
      {session ? (
        <button onClick={signOut} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Sign out
        </button>
      ) : (
        <Link href="/login" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          Sign in
        </Link>
      )}
    </div>
  )
}
