import { useSupabase } from "./supabase";

export function useAuth() {
  const { supabase, session } = useSupabase();
  async function signIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    return !error && data;
  }
  async function signout() {
    const { error } = await supabase.auth.signOut();
    return error;
  }
  return { signIn, signout, session };
}
