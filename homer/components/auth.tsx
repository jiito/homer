import { useState } from "react";
import styled from "styled-components";
import { useSupabase } from "../utils";

export const Login = () => {
  const { supabase } = useSupabase();
  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <>
      <LoginButton onClick={async () => await signIn()}>
        Login with Google
      </LoginButton>
    </>
  );
};

const LoginButton = styled.button`
  padding: 4px 12px;
`;
