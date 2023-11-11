import { useEffect, useState } from 'react';
import UtakataSupabaseClient from '../type/supabase.d';
import { Session } from '@supabase/supabase-js';

export default function useUser() {
  const [session, setSession] = useState<Session>();

  useEffect(() => {
    const { data: authListener } = UtakataSupabaseClient.auth.onAuthStateChange(
      (event, session) => {
        if(session) setSession(session);
      }
    );

    return () => {
      authListener.subscription.unsubscribe() /* .unsubscribe(); */
    };
  }, []);

  async function getUser() {
    return await UtakataSupabaseClient.auth.getUser()
  }

  async function signUp(email: string, password: string) {
    await UtakataSupabaseClient.auth.signUp({
      email: email,
      password: password,
    })
  }

  async function signIn(email: string, password: string) {
    await UtakataSupabaseClient.auth.signInWithPassword({ email, password });
  }

  async function signOut() {
    await UtakataSupabaseClient.auth.signOut();
  }

  return {
    session,
    getUser,
    signUp,
    signIn,
    signOut,
  };
}
