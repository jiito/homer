import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
export const useSupabase = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  return { session, supabase };
};
