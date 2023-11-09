import { useEffect, useState } from 'react';
import supabaseClient from '../type/supabase';

export default function userUser() {
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

  function signInWithGithub() {
    supabaseClient.auth.signIn({ provider: 'email' });
  }

  function signOut() {
    supabaseClient.auth.signOut();
  }

  return {
    session,
    signInWithGithub,
    signOut,
  };
}
