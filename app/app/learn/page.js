'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
import EmojiQuiz from '../components/EmojiQuiz'

export default function Learn() {
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) router.push('/')
    })
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-2xl font-semibold">Learn words</h1>
      <EmojiQuiz />
    </div>
  )
}
