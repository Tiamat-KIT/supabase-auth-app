/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  env: {
    NEXTAUTH_SECRET:
      /* process.env.NEXTAUTH_SECRET
      ? process.env.NEXTAUTH_SECRET
      :  */ 'beBz0cM2ZAVtxlchF0tIddXKTkgFzYY0d/qWujITYE4=',
    /* NEXTAUTH_URL: process.env.NEXT_PUBLIC_VERCEL_URL
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : 'http://localhost:3000', */
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJudWpmdnh6YnVha2tpd3ZzcHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NzY5MDUsImV4cCI6MjAwNzM1MjkwNX0.YQBCwbYGnH_Qn6Bua_LUuxZiaK4i3Z4QK73J7n2_hQw',
    NEXT_PUBLIC_SUPABASE_URL: 'https://rnujfvxzbuakkiwvspra.supabase.co',
    DATABASE_URL:
      'postgresql://postgres:Tiamat0225!!@db.rnujfvxzbuakkiwvspra.supabase.co:5432/postgres',
  },
};

module.exports = nextConfig;
