import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useSupabase } from "./supabase";

export function useAuth() {
  const { supabase, session } = useSupabase();
  const [user, setUser] = useState<User | null>();

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log("Got the user from the session:", user);
    setUser(user);
  };
  useEffect(() => {
    getUser();
  }, [session]);

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
  return { signIn, signout, session, user };
}
