import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gmkysmwjoxuwrdiypafy.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseAnonKey) {
  console.error('Missing Supabase anon key');
  throw new Error('Missing Supabase anon key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);