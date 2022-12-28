import Head from "next/head";
import { useSupabase } from "../utils";
import { Auth } from "../components/auth";
import styled from "styled-components";
import { InterestForm } from "../components/forms/interestForm";
import { darkBlue, orange } from "../styles/theme";

export default function Home() {
  const { supabase, session } = useSupabase();
  return (
    <>
      <Head>
        <title>Homer</title>
      </Head>
      <MainContatiner>
        <Title>Homer</Title>
        <Auth />
        <InterestForm />
      </MainContatiner>
    </>
  );
}
const Title = styled.h1`
  margin: 40px;
  color: ${darkBlue};
`;

const MainContatiner = styled.main`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 4em;
`;
