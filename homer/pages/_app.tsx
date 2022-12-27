import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const theme: DefaultTheme = {
  colors: {
    primary: "#111",
    secondary: "#0070f3",
  },
};
export default function App({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SessionContextProvider
          supabaseClient={supabase}
          initialSession={pageProps.initialSession}
        >
          <Component {...pageProps} />
        </SessionContextProvider>
      </ThemeProvider>
    </>
  );
}
