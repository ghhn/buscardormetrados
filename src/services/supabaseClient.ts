import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY || '').trim();

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('[SUPABASE] Faltan VITE_SUPABASE_URL o VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
