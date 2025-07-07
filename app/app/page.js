'use client'
import Link from 'next/link'
import LanguageSelector from './components/LanguageSelector'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <LanguageSelector />
      <Link href="/challenge" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        Challenge
      </Link>
    </div>
  )
}
