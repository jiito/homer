import styled from "styled-components";
import { useAuth } from "../utils/hooks/auth";

type LoginProps = {
  signIn: () => Promise<any>;
};
export const Login = ({ signIn }: LoginProps) => {
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
