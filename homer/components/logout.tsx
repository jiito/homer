import styled from "styled-components";

type LogoutProps = {
  signOut: () => Promise<any>;
};
export const Logout = ({ signOut }: LogoutProps) => {
  return (
    <>
      <LogoutButton onClick={async () => await signOut()}>Logout</LogoutButton>
    </>
  );
};

const LogoutButton = styled.button`
  padding: 4px 12px;
`;
