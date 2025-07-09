'use client'
import { useRouter } from 'next/navigation'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
]

export default function LanguageSelector() {
  const router = useRouter()

  function selectLanguage(code) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', code)
    }
    router.push('/learn')
  }

  return (
    <div className="space-y-4 text-center">
      <h1 className="text-2xl font-semibold">Select a language</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-sm mx-auto">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => selectLanguage(l.code)}
            className="elite-btn flex flex-col items-center p-4"
          >
            <span className="text-4xl">{l.flag}</span>
            <span className="mt-2 text-sm">{l.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
