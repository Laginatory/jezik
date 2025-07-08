# jezik

Study any language using emoji associations.

This repository contains a Next.js 14 application in the `app/` folder. It uses the App Router and Tailwind CSS.

## Getting started

```bash
cd app
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Supabase setup

Create a project on [Supabase](https://supabase.com/) and copy the URL and anon key to a `.env.local` file inside the `app` directory:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Run the SQL in `supabase/progress.sql` to create the `progress` table used for storing learning progress.
