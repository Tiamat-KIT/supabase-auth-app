import { createClient } from '@supabase/supabase-js';
import { Database } from './new-supabase-Schema';
// import { Database } from './schema';

/* declare global {
  var UtakataSupabaseClient: SupabaseClient<Database> | undefined;
} */

const UtakataSupabaseClient = /* global.UtakataSupabaseClient || */ createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );

/* if (process.env.NODE_ENV === 'development')
  global.UtakataSupabaseClient  = UtakataSupabaseClient; */

export default UtakataSupabaseClient;
