import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

declare global {
  var supabaseClient: SupabaseClient<Database> | undefined;
}

const supabaseClient =
  global.supabaseClient || createClient(supabaseUrl, supabaseAnonKey);

if (process.env.NODE_ENV === 'development')
  global.supabaseClient = supabaseClient;

export default supabaseClient;
