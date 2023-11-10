import { useEffect, useState } from 'react';
import supabaseClient from '../type/supabase';

export default function useUser() {
  const [session, setSession] = useState();

  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (event: any, session: any) => {
        setSession(session);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  function signIn() {
    supabaseClient.auth.signIn({ provider: 'email' });
  }

  function signOut() {
    supabaseClient.auth.signOut();
  }

  return {
    session,
    signIn,
    signOut,
  };
}
