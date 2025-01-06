import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gmkysmwjoxuwrdiypafy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdta3lzbXdqb3h1d3JkaXlwYWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxMzM5MzgsImV4cCI6MjA1MTcwOTkzOH0.sZhvzeLWA9buhclCPONk-OU5oAE-NMl9gehXDo952VI';

if (!supabaseAnonKey) {
  throw new Error('Missing Supabase anon key');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);