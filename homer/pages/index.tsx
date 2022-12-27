import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useSupabase } from "../utils";
import { Login } from "../components/auth";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { supabase, session } = useSupabase();
  return (
    <>
      <Head>
        <title>Homer</title>
      </Head>
      <MainContatiner>
        <h1>Welcome to Homer</h1>
        {!session ? <Login /> : <p>Logged in!</p>}
      </MainContatiner>
    </>
  );
}

const MainContatiner = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
