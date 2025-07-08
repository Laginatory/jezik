import { supabase } from '@/lib/supabaseClient'

export async function POST(request) {
  const { emoji, known } = await request.json()
  const { data: { session }, error: sessionError } = await supabase.auth.getSession()

  if (sessionError) {
    return Response.json({ error: sessionError.message }, { status: 500 })
  }

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { error } = await supabase.from('progress').insert({
    user_id: session.user.id,
    emoji,
    known,
    timestamp: new Date().toISOString(),
  })

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  return Response.json({ success: true })
}
