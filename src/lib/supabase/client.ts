// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// Add error checking with clear messages
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is missing. Please check your .env.local file')
}

if (!supabaseAnonKey) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is missing. Please check your .env.local file')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)